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

// ABOUT SECTION

document.addEventListener("DOMContentLoaded", function () {
  const eventSection = document.querySelector(".event-section");

  function handleScroll() {
      const sectionPosition = eventSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
          eventSection.classList.add("visible");
          window.removeEventListener("scroll", handleScroll);
      }
  }

  window.addEventListener("scroll", handleScroll);
});

// SERVICE SECTION

document.addEventListener("DOMContentLoaded", function() {
  const serviceItems = document.querySelectorAll(".service-item");

  function handleScroll() {
      const section = document.querySelector(".services-section");
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
          serviceItems.forEach((item, index) => {
              if (Math.floor(index / 4) % 2 === 0) {
                  item.classList.add("fade-in-left");
              } else {
                  item.classList.add("fade-in-right");
              }
          });
          window.removeEventListener("scroll", handleScroll); // Trigger only once
      }
  }

  window.addEventListener("scroll", handleScroll);
});


 // Add zoom-in effect when the section is in view
 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("zoom-in");
      }
  });
});
observer.observe(document.querySelector(".gallery"));

 // Check if observer exists and define if not
 if (!window.fadeInObserver) {
  window.fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              // Unobserve the element after it has become visible to avoid re-triggering
              fadeInObserver.unobserve(entry.target);
          }
      });
  });
}

// Array of testimonial data
const testimonials = [
  {
      image: '/assets/images/men1.gif',
      name: 'Mr. Viswajit Mallick',
     /*  userTag: '@polog', */
      title: '"Just On Services made our wedding day truly magical! Their attention to detail and dedication to our vision exceeded our expectations.” ',
     /*  text: 'As one of the top real estate teams in Canada, we leverage software like MyFinder.ai to help deploy new dynamic ad campaigns. With the least effort of a few clicks.' */
  },
  {
      image: '/assets/images/men2.gif',
      name: 'Mr. Deepak Kumar Pani',
      /* userTag: '@slee', */
      title: '“We hosted our annual corporate event with Just On Services, and it was a huge success! They managed everything seamlessly.” ',
      /* text: 'Sophia provides excellent customer service and attention to detail, making sure that all her clients are satisfied with their experience.' */
  },
  {
      image: '/assets/images/women1.gif',
      name: 'John Smith',
     /*  userTag: '@jsmith', */
      title: 'Reliable and Professional',
      /* text: 'John’s reliability and professionalism make him one of the top agents in his area. Clients trust his advice and guidance in real estate.' */
  }
];

let currentIndex = 0;

function changeTestimonial(index) {
  document.getElementById('testimonial-image').src = testimonials[index].image;
  document.getElementById('testimonial-name').textContent = testimonials[index].name;
  document.getElementById('testimonial-user-tag').textContent = testimonials[index].userTag;
  document.getElementById('testimonial-title').textContent = testimonials[index].title;
  document.getElementById('testimonial-text').textContent = testimonials[index].text;

  document.querySelectorAll('.nav-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
  });
}

function startAutoCycle() {
  setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      changeTestimonial(currentIndex);
  }, 5000); // Change every 5 seconds
}

// Initial load of the first testimonial
changeTestimonial(currentIndex);
startAutoCycle();



// WHY CHOOSE US

document.addEventListener("DOMContentLoaded", function() {
  const features = document.querySelectorAll(".fade-in-zoom");
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  features.forEach(feature => {
      observer.observe(feature);
  });
});


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

document.addEventListener('copy', function(e) {
  e.preventDefault();
});

document.addEventListener('cut', function(e) {
  e.preventDefault();
});

document.addEventListener('paste', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
    e.preventDefault();
  }
});













  
