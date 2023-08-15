document.addEventListener("DOMContentLoaded", function() {

    // 1. Toggle navigation dropdown for mobile devices
    const toggleButton = document.getElementById("menu-toggle");
    const navList = document.querySelector("nav ul");

    toggleButton.addEventListener("click", function() {
        navList.classList.toggle("show");
    });

    // 2. Smooth scroll to sections
    const navLinks = document.querySelectorAll("nav a");

    for (let link of navLinks) {
        link.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent the default click action

            // Get the target section's ID from the href of the clicked link
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            // Scroll to the target section
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });

            // Close the mobile nav menu if it's open
            navList.classList.remove("show");
        });
    }

});

