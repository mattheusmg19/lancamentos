document.addEventListener("DOMContentLoaded", function () {
    const ppcp = document.getElementById("ppcp");
  
    if (ppcp) {
      ppcp.addEventListener("click", function () {
        window.history.back();
      });
    }
  });
  