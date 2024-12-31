document.addEventListener("DOMContentLoaded", function () {
    const words = ['relationship', 'client satisfaction', 'timely delivery', 'quality', '24/7 Services'];
    let currentWordIndex = 0; // Keeps track of the current word
    let charIndex = 0; // Keeps track of the character index
    let typingTimeout; // Stores the timeout for typing

    // Typing Effect Function
    function typeEffect(element) {
        const currentWord = words[currentWordIndex];

        // Add the next character and the custom blinking cursor
        if (charIndex <= currentWord.length) {
            element.innerHTML =
                currentWord.slice(0, charIndex) + `<span class="cursor">|</span>`;
            charIndex++;
            typingTimeout = setTimeout(() => typeEffect(element), 200); // Smooth letter-by-letter typing speed
        } else {
            // Wait before moving to the next word
            setTimeout(() => {
                charIndex = 0; // Reset character index for the new word
                currentWordIndex = (currentWordIndex + 1) % words.length; // Loop through words
                typeEffect(element); // Start typing the next word
            }, 1000); // Pause before switching to the next word
        }
    }

    // Reset Typing Effect for Slide Transitions
    function resetTypingEffect(element) {
        clearTimeout(typingTimeout); // Clear any existing timeouts
        charIndex = 0; // Reset character index
        element.innerHTML = ''; // Clear text content
        typeEffect(element); // Restart typing effect
    }

    // Initialize Swiper
    const swiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                const typingSection = document.querySelector('.typing-section');
                const dynamicText = document.querySelector('.dynamic-text');

                // Hide the typing section
                typingSection.classList.add('hide');
                resetTypingEffect(dynamicText); // Reset typing effect

                // Show the typing section after slide transition
                setTimeout(() => {
                    typingSection.classList.remove('hide');
                    typingSection.classList.add('show');
                }, 1000); // Delay to sync with slide transition
            },
        },
    });

    // Start typing effect on first load
    const dynamicText = document.querySelector('.dynamic-text');
    typeEffect(dynamicText);
});









gsap.from(".hero-swiper .swiper-slide img", {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".swiper-slide",
        start: "top center",
        end: "bottom top",
        scrub: true,
    }
});

const swiper = new Swiper('.imageSlider', {
    slidesPerView: 1, // One slide containing two images
    spaceBetween: 0, // Space between slides
    loop: true, // Enable infinite loop
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

var newSwiper = new Swiper('.content-swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    speed: 1200,
    effect: 'slide',
    navigation: {
        nextEl: '.content-swiper-button-next', // Unique class for next button
        prevEl: '.content-swiper-button-prev', // Unique class for prev button
    },
    pagination: {
        el: '.content-swiper-pagination', // Unique class for pagination
        clickable: true,
        type: 'bullets',
    },
});

const imageSwiper = new Swiper('.image-swiper', {
    loop: true,
    spaceBetween: 0, // Remove gap between slides
    navigation: {
        nextEl: '.image-swiper-button-next', // New arrow class
        prevEl: '.image-swiper-button-prev', // New arrow class
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
        1200: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
    },
});

const logoSwiper = new Swiper('.logo-swiper', {
    loop: true, // Infinite loop
    spaceBetween: 20, // Space between slides
    slidesPerView: 5, // Show 5 slides at a time
    autoplay: {
        delay: 0, // No delay between slides for continuous scrolling
        disableOnInteraction: false, // Keep autoplay active even after user interaction
    },
    speed: 3000, // Adjust speed for the scrolling pace (lower = slower, higher = faster)
    freeMode: true, // Enable continuous scrolling
    freeModeMomentum: false, // Prevent speed fluctuations for consistent scrolling
});





const swiperContainer = document.querySelector('.about-swiper');
if (swiperContainer) {
  const aboutSwiper = new Swiper('.about-swiper', {
      loop: true,
      spaceBetween: 0,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.about-swiper-pagination',
          clickable: true,
      },
  });
}


// const testimonialSwiper = new Swiper('.testimonial-swiper', {
//     slidesPerView: 1.5, // Shows part of the adjacent slides
//     spaceBetween: 20, // Spacing between slides
//     centeredSlides: true, // Center the active slide
//     loop: true, // Infinite looping
//     effect: 'coverflow', // Use coverflow effect
//     coverflowEffect: {
//       rotate: 0, // No rotation of slides
//       stretch: 0, // No stretching
//       depth: 100, // Depth for 3D effect
//       modifier: 2.5, // Multiplier for slide scaling
//       slideShadows: false, // Disable shadows
//     },
//     autoplay: {
//       delay: 3000, // Automatically change slides every 3 seconds
//       disableOnInteraction: false, // Keep autoplay after user interactions
//     },
   
//   });
  
  


