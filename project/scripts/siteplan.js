document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Toggle menu on click
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");

        // Change icon between ≡ and ✖
        if (navMenu.classList.contains("show")) {
            menuToggle.innerHTML = "&times;"; // ✖
        } else {
            menuToggle.innerHTML = "&#9776;"; // ≡
        }
    });

    // Close menu when a nav link is clicked (mobile UX)
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
            menuToggle.innerHTML = "&#9776;";
        });
    });


    // Update footer year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Update last modified
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
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

