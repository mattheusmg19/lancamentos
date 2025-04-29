function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

document.querySelector('.searchBar').addEventListener('input', function() {
    const searchValue = removeAccents(this.value);
    const rows = document.querySelectorAll('.screens tbody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const match = Array.from(cells).some(cell => removeAccents(cell.textContent).includes(searchValue));
        row.style.display = match ? '' : 'none';
    });
});
