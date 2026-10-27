/*
  Module 5, Part 3: show a thank you message when the form is submitted.
*/

// 1. Find the form, the name field, and the message area.
const form = document.querySelector("#contact-form");
const nameField = document.querySelector("#full-name");
const message = document.querySelector("#form-message");

// 2. Run this function when the form is submitted.
form.addEventListener("submit", function (event) {
  // Stop the page from reloading.
  event.preventDefault();

  // 3. Show the message.
  message.textContent =
    "Thank you, " + nameField.value + ". " +
    "This is a practice form, so your message was not sent.";

  // 4. Clear the form.
  form.reset();
});
