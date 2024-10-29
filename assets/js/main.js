document.addEventListener("DOMContentLoaded", function () {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


let lastScrollTop = 0; 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('sticky'); 
        navbar.style.top = '-60px'; 
    } else {
        navbar.style.top = '0'; 
    }

    lastScrollTop = scrollTop;
});



