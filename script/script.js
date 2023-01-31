const el = document.querySelector('.spinner-wrapper');
window.addEventListener('load', () => {
    el.style.opacity = '0';

    setTimeout(() => {
        el.style.display = 'none';
    }, 2000);
});

