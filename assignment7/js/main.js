/*
Sign up form.

Please refer to the PDF for the instructions, and do not change the html.
*/
// imports below bootstrap, validator and local signin.css file.

import 'bootstrap/dist/css/bootstrap.min.css';
import validator from 'validator';
import '../css/signin.css';

// elements to use (do not change names)
let form = document.querySelector(".form-signin")
let welcome = document.querySelector(".welcome-user")

// event listener below
document.querySelector(".form-signin").addEventListener("submit", (e)=>{
  e.preventDefault();

  let isValid = true;

  // Validate email
  let emailElem = document.querySelector("#inputEmail");
  let email = emailElem.value;
  if (!validator.isEmail(email)) {
    emailElem.classList.add("is-invalid");
    isValid = false;
  }
  else {
    emailElem.classList.remove("is-invalid");
  }

  // Validate password
  let passwordOneElem = document.querySelector("#inputPasswordOne");
  let passwordOne = passwordOneElem.value;
  if (!validator.isStrongPassword(passwordOne)) {
    passwordOneElem.classList.add("is-invalid");
    isValid = false;
  }
  else {
    passwordOneElem.classList.remove("is-invalid");
  }

  // Validate password one and two
  let passwordTwoElem = document.querySelector("#inputPasswordTwo");
  let passwordTwo = passwordTwoElem.value;
  if (passwordTwo != passwordOne) {
    passwordTwoElem.classList.add("is-invalid");
    isValid = false;
  }
  else {
    passwordTwoElem.classList.remove("is-invalid");
  }

  // Submit
  if (isValid) {
    signInSuccess(email);
  }
})



/**
 * Handles the successful sign-in process by hiding the form,
 * showing a welcome message, and updating the displayed message
 * with the user's email.
 *
 * @param {string} email - The email of the user who signed in successfully.
 * @returns {void}
 */
const signInSuccess = (email) => {
  // hide the form show the message.
  form.classList.add("d-none")
  welcome.classList.remove("d-none")
  //update the message
  let welcomeUserMessage= document.querySelector("#welcome-user-message")
  welcomeUserMessage.textContent = `Welcome ${email}!`
}
