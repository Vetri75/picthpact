document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector('.arrow');
      const isActive = answer.classList.contains('active');
      
      if (isActive) {
        arrow.style.transform = 'rotate(0deg)';
        answer.style.maxHeight = null;
        answer.classList.remove('active');
  
        // Delay removing the active class from the question for smooth transition
        setTimeout(() => {
          question.classList.remove('active'); // Remove active class after answer closes
        }, 500); // Ensure this time matches the answer's transition duration
      } else {
        arrow.style.transform = 'rotate(180deg)';
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        answer.classList.add('active');
        question.classList.add('active'); // Add active class to question immediately
      }
    });
  });


  $(document).ready(function () {
    $('#example').anyImageComparisonSlider({
        orientation: 'horizontal',            // Slider orientation
        initialPosition: 0.5,                 // Start position (50%)
        width: '100%',                        // Slider width
        backgroundColor: 'none',              // Background color
        interactive: true,                    // Enable interaction
        autoAnimation: true,                  // Enable automatic animation
        autoAnimationSpeed: 8,                // Speed of animation (adjust as needed)
        autoAnimationPause: 1,                // Pause between animations (in seconds)
        autoAnimationEasing: 'inOutCubic',    // Easing function for smooth transition
        dividingLine: 'solid 2px #000',       // Divider line style
        cursor: 'ew-resize',                  // Cursor style
    });
});