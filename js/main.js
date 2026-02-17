/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    // Only if it's not a dropdown toggle
    if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('dropdown-menu')) {
        navMenu.classList.remove('show-menu')
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== MOBILE DROPDOWNS ====================*/
const dropdownLinks = document.querySelectorAll('.nav-link');

dropdownLinks.forEach(link => {
    const dropdownMenu = link.nextElementSibling;
    if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
        link.addEventListener('click', (e) => {
            // Only prevents default on mobile/tablet widths where we want click-to-expand
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = link.parentElement;
                parent.classList.toggle('active-dropdown');

                // Optional: Rotate icon
                const icon = link.querySelector('i');
                if (icon) {
                    icon.style.transform = parent.classList.contains('active-dropdown') ? 'rotate(180deg)' : 'rotate(0)';
                }
            }
        });
    }
});
