
// =========================
// MOBILE MENU (MODERN OVERLAY)
// =========================

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const links = document.querySelectorAll('.mobile-menu a');

function openMenu() {
    burger.classList.add('active');
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// toggle menu
burger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// close on link click
links.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// close on outside click
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMenu();
    }
});

// ESC close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

// =========================
// SWIPER (LICENSES)
// =========================

const swiper = new Swiper(".licenseSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        }
    }
});

// =========================
// FANCYBOX SETTINGS
// =========================

Fancybox.bind("[data-fancybox='licenses']", {
    Thumbs: {
        autoStart: true,
    },

    Toolbar: {
        display: [
            "zoom",
            "fullscreen",
            "close",
        ],
    },

    animated: true,
});

// =========================
// SMOOTH REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    '.section-title, .service-card, .doctor-card, .stat-card, .contact-card'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// =========================
// HEADER SHADOW ON SCROLL
// =========================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 10) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }

});



// =========================
// LEGAL MODAL (SAFE VERSION)
// =========================

document.addEventListener('DOMContentLoaded', () => {

    const openLegal = document.getElementById('openLegal');
    const legalModal = document.getElementById('legalModal');
    const closeLegal = document.getElementById('closeLegal');

    if (!openLegal || !legalModal || !closeLegal) return;

    const open = () => {
        legalModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        legalModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    openLegal.addEventListener('click', (e) => {
        e.preventDefault();
        open();
    });

    closeLegal.addEventListener('click', close);

    legalModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__overlay')) {
            close();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });

});