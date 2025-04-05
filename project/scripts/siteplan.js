// Toggle Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Current Year
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Last Modified Date and Time
    const lastModified = new Date(document.lastModified);
    const options = { 
        year: "numeric", 
        month: "long", 
        day: "numeric", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
    };
    document.getElementById("lastModified").textContent = lastModified.toLocaleString(undefined, options);
});
