/* eslint-disable no-useless-escape */
const email = document.getElementById('email');
function validateEmail() {
  const emailError = document.getElementById('emailError');
  const emailPattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = 'Please enter a valid email';
    return false;
  } else emailError.textContent = '';
  return true;
}
email.addEventListener('change', validateEmail);

const country = document.getElementById('country');
function validateCountry() {
  const countryError = document.getElementById('countryError');
  const countryPattern = /[a-zA-Z]{2,}/;
  if (!countryPattern.test(country.value)) {
    countryError.textContent =
      'Please enter your country abbreviation or the full name';
    return false;
  } else countryError.textContent = '';
  return true;
}
country.addEventListener('change', validateCountry);

const zipCode = document.getElementById('zipCode');
function validateZipCode() {
  const zipCodeError = document.getElementById('zipCodeError');
  const zipCodePattern = /^\d{4,5}([ \-]\d{4})?$/;
  if (!zipCodePattern.test(zipCode.value)) {
    zipCodeError.textContent = 'Please enter a valid zip code';
    return false;
  } else zipCodeError.textContent = '';
  return true;
}
zipCode.addEventListener('change', validateZipCode);

const password = document.getElementById('password');
function validatePassword() {
  const pwdWrapper = document.getElementById('pwdWrapper');
  const passwordError = document.getElementById('passwordError');
  const pwdPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (!pwdPattern.test(password.value)) {
    passwordError.textContent =
      'Password must be minimum 8 characters and must contain one  number, one uppercase and lowercase letter';
    pwdWrapper.className = 'marginBottom';
    return false;
  } else {
    passwordError.textContent = '';
    pwdWrapper.className = '';
    return true;
  }
}
password.addEventListener('change', validatePassword);

const pwdConfirm = document.getElementById('passwordConfirm');
function validatePwdConfirm() {
  const pwdConfirmError = document.getElementById('pwdConfirmError');
  if (pwdConfirm.value !== password.value) {
    pwdConfirmError.textContent = 'Passwords do not match';
    pwdConfirm.className = 'invalid';
    return false;
  } else {
    pwdConfirmError.textContent = '';
    pwdConfirm.className = 'valid';
    return true;
  }
}
pwdConfirm.addEventListener('change', validatePwdConfirm);

function validateForm() {
  if (
    validateEmail() &&
    validateCountry() &&
    validateZipCode() &&
    validatePassword() &&
    validatePwdConfirm()
  )
    return true;
}

const confirmBtn = document.getElementById('confirm');
const resultWrapper = document.getElementById('resultWrapper');
const resultText = document.getElementById('formResult');
confirmBtn.addEventListener('click', () => {
  if (validateForm()) {
    resultWrapper.className = 'isValid';
    resultText.textContent = 'Form submitted successfully!';
    return;
  } else resultWrapper.className = 'isNotValid';
  resultText.textContent = 'Please check all the form fields and try again';
});
const resetBtn = document.getElementById('reset');
const spanError = document.querySelectorAll('.error');
resetBtn.addEventListener('click', () => {
  resultWrapper.className = 'hidden';
  spanError.forEach((span) => {
    span.textContent = '';
  });
});
