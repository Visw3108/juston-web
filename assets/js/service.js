'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

//------------------ WELCOME-----------------------------------------

 // Fade-in up transition effect when scrolling to the section
 document.addEventListener("DOMContentLoaded", function() {
  const welcomeContent = document.querySelector(".welcome-content");
  window.addEventListener("scroll", function() {
      const section = document.getElementById("welcome-section");
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (sectionPosition < screenPosition) {
          welcomeContent.classList.add("fade-in-up");
      }
  });
});

// ABOUT SECTION

 // Fade-in transition for the image when scrolling to the section
 document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container");
  window.addEventListener("scroll", function() {
      const section = document.getElementById("about-section");
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (sectionPosition < screenPosition) {
          imageContainer.classList.add("fade-in");
      }
  });
});

// JavaScript for filtering with temporary removal effect
document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons and add to the clicked button
        document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Get the selected filter category
        const filterValue = button.getAttribute('data-filter');
        
        // Show or hide products based on the selected category with transition effect
        document.querySelectorAll('.product-card').forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block'; // Ensure element is displayed
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
                card.style.pointerEvents = 'auto';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                card.style.pointerEvents = 'none';
                
                // After the opacity and transform transition, hide the element completely
                setTimeout(() => {
                    card.style.display = 'none';
                }, 100); // Match this delay to the CSS transition duration
            }
        });
    });
});
