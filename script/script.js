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

menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', function() {
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
  
  

