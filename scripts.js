document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menuOptions = document.getElementById("menu-options");
  
    menuButton.addEventListener("click", function () {
      menuOptions.style.display = menuOptions.style.display === "block" ? "none" : "block";
    });
  });
  