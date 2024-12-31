
// Initial Setup: Add 'transparent' class on page load
const header = document.querySelector('.header-sec');
header.classList.add('transparent');

let lastScrollY = window.scrollY; // Tracks the last scroll position

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll Down: Smoothly hide the header
        header.classList.add('hide');
        header.classList.remove('show');
    } else {
        // Scroll Up: Smoothly show the header
        header.classList.add('show');
        header.classList.remove('hide');
    }

    // Make header transparent when at the top
    if (currentScrollY === 0) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }

    lastScrollY = currentScrollY; // Update the last scroll position
});







// Toggle Fullscreen Navigation
function toggleMenu() {
    const nav = document.getElementById('fullscreenNav');
    nav.classList.toggle('active');
}

// Toggle Submenu for "Services"
function toggleSubmenu(event) {
    event.preventDefault();
    const parentLi = event.target.closest('li');
    const submenu = parentLi.querySelector('.submenu');
    
    if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

        // Animate submenu items step by step
        const submenuItems = submenu.querySelectorAll('li');
        submenuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200); // Delay each item by 200ms
        });
    }
}

// Function to close the fullscreen nav
function closeNav() {
    const nav = document.getElementById('fullscreenNav');
    nav.classList.remove('active');

    // Hide links immediately when nav is closed
    const links = document.querySelectorAll('.nav-links li');
    links.forEach(link => {
        link.classList.remove('show-link');
    });
}

// Function to toggle the left sidebar
function toggleLeftBar() {
    const leftBar = document.querySelector('.left-bar-sec');
    leftBar.classList.toggle('active');
}

// Function to close the left sidebar when clicking the close button
function closeLeftBar() {
    const leftBar = document.querySelector('.left-bar-sec');
    leftBar.classList.remove('active');
}

// Create an intersection observer to watch for the element entering the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class that triggers the fade-in animation when the element enters the viewport
            entry.target.classList.add('fade-in-visible');
            
            // Optionally stop observing after the animation starts
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger the animation when 10% of the element is in view (adjust based on need)
});

// Target all elements with the 'fade-in' class
const elements = document.querySelectorAll('.fade-in');
elements.forEach(element => {
    observer.observe(element); // Start observing each element
});



const arrowUpBtn = document.getElementById('arrow-up-btn');
const socialIcons = document.getElementById('social-icons');
let isIconsVisible = false;

arrowUpBtn.addEventListener('click', function () {
  if (isIconsVisible) {
    // Add 'hidden' class to start hiding icons
    socialIcons.classList.remove('visible');
    socialIcons.classList.add('hidden');
    // Change arrow to "up" after hiding
    setTimeout(() => {
      arrowUpBtn.innerHTML = '<span class="material-symbols-outlined">arrow_drop_up</span>';
    }, 300); // Wait for the last icon to finish hiding
    isIconsVisible = false;
  } else {
    // Add 'visible' class to start showing icons
    socialIcons.classList.remove('hidden');
    socialIcons.classList.add('visible');
    // Change arrow to "down"
    arrowUpBtn.innerHTML = '<span class="material-symbols-outlined">arrow_drop_down</span>';
    isIconsVisible = true;
  }
});

// Active links

document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href.split(/[?#]/)[0]; // Get current URL without query or hash
    const submenuLinks = document.querySelectorAll('.submenu a');
    const servicesLink = document.querySelector('.has-submenu > a');

    submenuLinks.forEach(link => {
        const linkHref = link.href.split(/[?#]/)[0];
        console.log('Current URL:', currentUrl, 'Link Href:', linkHref); // Debugging log
        if (linkHref === currentUrl) {
            console.log('Match found!'); // Debugging log
            servicesLink.classList.add('submenu-active'); // Highlight "Services"
        }
    });
});






