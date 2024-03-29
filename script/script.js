/*Typed JS*/
var typed = new Typed(".auto-text", {
  strings: ["ERP Software Development", "Web Development", "ICT Consulting", "Technical Support","Mobile App Development"],
  typeSpeed: 10,
  backSpeed: 35,
  backDelay: 2500,
  fadeOut: true,
  showCursor: false,
  loop: true
});

const el = document.querySelector('.spinner-wrapper');
window.addEventListener('load', () => {
  el.style.opacity = '0';

  setTimeout(() => {
    el.style.display = 'none';
  }, 2000);
});

/*toogle menu icon*/
const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    if (window.innerWidth < 992) {
      navbarCollapse.classList.remove('show');
    }
  });
});

/*Back to top Button */
window.addEventListener('scroll', () => {
  let backToTopBtn = document.querySelector('#backToTopBtn');
  if (window.pageYOffset > 500) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let backToTopBtn = document.querySelector('#backToTopBtn');
  backToTopBtn.style.display = 'none';
});

document.querySelector('#backToTopBtn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/*Read More button*/
function toggleContent() {
  var content = document.getElementById("collapseExample");
  var button = document.querySelector(".btn");
  if (content.classList.contains("show")) {
    content.classList.remove("show");
    button.innerHTML = "Read more";
  } else {
    content.classList.add("show");
    button.innerHTML = "Read less";
  }
}

/*Scroll Reveal*/
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duratiuon: 2000,
  delay:200
});

//ScrollReveal().reveal('.service-content', { origin: 'top' });
//ScrollReveal().reveal('.col-md, .h2', { origin: 'right' });

/*Image Lazy Loading */
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img[loading='lazy']"));

  if ("IntersectionObserver" in window) {
    var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.removeAttribute("data-src");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});