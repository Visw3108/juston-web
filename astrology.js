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





// HERO SECTION

/* let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = 'none'; // Hide all images
    img.classList.remove('show'); // Remove 'show' class from all
  });
  images[index].style.display = 'block'; // Show the current image
  images[index].classList.add('show'); // Add 'show' class for transition
}

function rotateImages() {
  currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
  showImage(currentIndex);
}

// Initial setup
showImage(currentIndex);
setInterval(rotateImages, 3000); // Rotate every 3 seconds

document.querySelector(".search-bar").addEventListener("submit", function(e) {
  e.preventDefault();
  const query = document.getElementById("searchInput").value.toLowerCase();
  // You can add functionality to search or filter content here
  console.log("Searching for:", query);
});

document.getElementById("filter").addEventListener("change", function() {
  const filterValue = this.value;
  // You can add functionality to filter content based on the selected category
  console.log("Filtering by:", filterValue);
});
 */

// SERVICE PROVIDE SECTION

const carousels = document.querySelectorAll('.carousel-track-container');

carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let currentSlide = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Clone the first and last slide for seamless rolling effect
    const firstSlideClone = slides[0].cloneNode(true);
    const lastSlideClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstSlideClone);  // Add clone of the first slide to the end
    track.insertBefore(lastSlideClone, slides[0]);  // Add clone of the last slide to the beginning
    
    const totalSlides = Array.from(track.children); // Update to reflect the new clones

    function moveToSlide(track, currentSlide) {
        track.style.transition = 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)'; // Rolling effect
        track.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
    }

    function autoMove() {
        currentSlide++;
        moveToSlide(track, currentSlide);
        
        // When reaching the last clone, reset position without transition (for seamless looping)
        if (currentSlide === totalSlides.length - 1) {
            setTimeout(() => {
                track.style.transition = 'none'; // Remove transition for seamless effect
                currentSlide = 1; // Jump back to the real first slide
                track.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
            }, 1200); // Wait for the transition to finish
        }
    }

    // Set the starting position to the real first slide (skip the clone)
    track.style.transform = 'translateX(' + (-slideWidth * 1) + 'px)';
    currentSlide = 1;

    setInterval(autoMove, 2000); // Move every 4 seconds
});




  document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.about, .section-title, .section-text, .about-banner, .about-list, .about-item');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    // Observe all the elements we want to animate
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });

 document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.about, .about-content .section-title, .about-content .section-text, .about-content .h3, .about-list, .about-item');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Observe each element for animation
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });





  /*  <!---------------------  TESTIMONIAL ------------------------> */

   const sliderContainer = document.querySelector('.testimonial-container');
      const dots = document.querySelectorAll('.dot');
      let index = 0;

      function changeSlide() {
        index = (index + 1) % dots.length;
        updateSlider();
      }

      function updateSlider() {
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
      }

      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          index = i;
          updateSlider();
        });
      });

      setInterval(changeSlide, 3000); // Auto-scroll every 3 seconds