document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navigation Menu
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("open");
        if (menu.classList.contains("open")) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });

    // Dynamic Footer Updates
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

