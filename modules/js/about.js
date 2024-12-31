// ABOUT PAGE: Observer for slide-in animations
const aboutPageSlideInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible'); // About-specific class
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    threshold: 0.1 // Trigger at 20% visibility
});

// Apply observer to elements only if they exist on the about page
const leftElement = document.querySelector('.abt-first-c');
const rightElement = document.querySelector('.abt-sec-c');

// Add animations only if elements are present
if (leftElement && rightElement) {
    leftElement.classList.add('slide-in-left'); // Initial left-side animation class
    rightElement.classList.add('slide-in-right'); // Initial right-side animation class

    aboutPageSlideInObserver.observe(leftElement);
    aboutPageSlideInObserver.observe(rightElement);
}

// Select the About Swiper container
const aboutSwiperContainer = document.querySelector('.abt-swiper');

// Create the Intersection Observer
const aboutSwiperObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'visible' class to trigger animation
      entry.target.classList.add('visible');

      // Stop observing once the animation has started
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1, // Trigger when 20% of the container is visible
});

// Observe the About Swiper container
aboutSwiperObserver.observe(aboutSwiperContainer);


