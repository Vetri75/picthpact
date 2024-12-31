//   // Restrict phone input to valid international phone number characters
//   document.getElementById("phone").addEventListener("input", function (event) {
//     // Allow only numbers, +, -, and spaces
//     this.value = this.value.replace(/[^0-9+\- ]/g, "");
// });

// // Phone number validation regex (international format)
// const phoneRegex = /^[+]*[0-9][0-9\s\-]*$/;

// // Form validation logic on submit
// document.getElementById("contact-form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Clear previous error messages
//     const errorMessages = document.querySelectorAll(".error-message");
//     errorMessages.forEach(msg => msg.style.display = "none");

//     let isValid = true;

//     // Name validation
//     const name = document.getElementById("name").value;
//     if (!name) {
//         document.getElementById("name-error").style.display = "block";
//         isValid = false;
//     }

//     // Phone validation (allowing international formats)
//     const phone = document.getElementById("phone").value;
//     if (!phone || !phoneRegex.test(phone)) {
//         document.getElementById("phone-error").style.display = "block";
//         isValid = false;
//     }

//     // Custom Email validation (disable default browser validation)
//     const email = document.getElementById("email").value;
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//     if (!emailRegex.test(email)) {
//         document.getElementById("email-error").style.display = "block";
//         isValid = false;
//     }

//     // Message validation
//     const message = document.getElementById("message").value;
//     if (!message) {
//         document.getElementById("message-error").style.display = "block";
//         isValid = false;
//     }

//    // If valid, submit the form (for now, just log success)
// if (isValid) {
// // Fade out the form with opacity transition
// document.querySelector(".form-sec").style.opacity = 0;

// // After fade-out, hide the form and show the thank you message with slide-in animation
// setTimeout(function () {
//     document.querySelector(".form-sec").style.display = "none"; // Hide the form container
//     const afterSub = document.querySelector(".after-sub");
//     afterSub.classList.add("show"); // Show the thank you message with animation
// }, 500); // Wait for 500ms to complete the fade-out transition
// }
// });

// // Add event listeners to hide the error message when user starts typing (except for email and phone)
// function addInputListener(inputId, errorId) {
//     document.getElementById(inputId).addEventListener("input", function () {
//         // If the input has a value, hide the error message
//         if (this.value) {
//             document.getElementById(errorId).style.display = "none";
//         } else {
//             document.getElementById(errorId).style.display = "block"; // Re-show the error if cleared
//         }
//     });
// }

// // Attach input listeners to fields (skip email and phone)
// addInputListener("name", "name-error");
// addInputListener("message", "message-error");


