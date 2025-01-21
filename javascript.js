
        // Toggle the navigation menu on smaller screens
        function toggleNav() {
            const navList = document.querySelector('.nav-list');
            navList.classList.toggle('active');
        }
    
    document.addEventListener("DOMContentLoaded", () => {
    const personalPhoto = document.querySelector('.personal-photo .photo');

    if (!personalPhoto) {
        console.error("Error: '.personal-photo .photo' element not found in the DOM.");
        return; // Exit if the element doesn't exist
    }

    // Function to check if the element is in view
    function isInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Function to add animation class when in view
    function addPhotoAnimation() {
        if (isInView(personalPhoto)) {
            personalPhoto.classList.add('slide-in'); // Add the slide-in class
            window.removeEventListener('scroll', addPhotoAnimation); // Trigger only once
        }
    }

    // Run the animation check on scroll
    window.addEventListener('scroll', addPhotoAnimation);

    // Check visibility on initial load
    addPhotoAnimation();
});
document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll('.right-section > *'); // Select all children of the right-section

    // Function to check if an element is in view
    function isInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Function to add animation class to elements in view
    function addAnimation() {
        textElements.forEach(el => {
            if (isInView(el)) {
                el.classList.add('slide-in'); // Add animation class
            }
        });
    }

    // Trigger the animation on scroll
    window.addEventListener('scroll', addAnimation);

    // Check visibility on initial load
    addAnimation();
});

// JavaScript code to add the slide-in effect
document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');

    // Function to check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Function to add slide-in class when in viewport
    function handleScroll() {
        if (isInViewport(aboutSection)) {
            aboutSection.classList.add('slide-in'); // Add the class to trigger animation
        }
    }

    // Initial check if the section is already in the viewport
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
});


document.addEventListener("DOMContentLoaded", () => {
    const skillsContainer = document.querySelector('.skills-container');

    if (!skillsContainer) {
        console.error("Error: '.skills-container' element not found in the DOM.");
        return; // Exit if the element doesn't exist
    }

    console.log("Skills container found:", skillsContainer); // Debug log

    function isInView(el) {
        const rect = el.getBoundingClientRect();
        console.log("Element rect:", rect); // Debug log
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function checkVisibility() {
        if (isInView(skillsContainer)) {
            console.log("Element is in view. Applying animation."); // Debug log
            skillsContainer.style.animation = "slideInFromLeft 1s ease-in-out forwards";
            window.removeEventListener("scroll", checkVisibility);
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
$(document).ready(function () {
    // Enable tooltips on page load
    $('[data-toggle="tooltip"]').tooltip();
});
