function validateForm() {
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = 'Please enter a valid email';
    return false;
  } else emailError.textContent = '';
  const country = document.getElementById('country');
  const countryError = document.getElementById('countryError');
  const countryPattern = /[a-zA-Z]{2,}/;
  if (!countryPattern.test(country.value)) {
    countryError.textContent = 'Please enter at least 2 letters';
    return false;
  } else countryError.textContent = '';
  const zipCode = document.getElementById('zipCode');
  const zipCodeError = document.getElementById('zipCodeError');
  const zipCodePattern = /\d{4,5}([ \-]\d{4})?/;
  if (!zipCodePattern.test(zipCode.value)) {
    zipCodeError.textContent = 'Please enter a valid zip code';
    return false;
  } else zipCodeError.textContent = '';
  const pwdWrapper = document.getElementById('pwdWrapper');
  const password = document.getElementById('password');
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
  }

  const pwdConfirm = document.getElementById('passwordConfirm');
  const pwdConfirmError = document.getElementById('pwdConfirmError');
  if (pwdConfirm.value !== password.value) {
    pwdConfirmError.textContent = 'Passwords do not match';
    pwdConfirm.className = 'invalid';
    return false;
  } else {
    pwdConfirmError.textContent = '';
    pwdConfirm.className = 'valid';
  }
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
resetBtn.addEventListener('click', () => {
  resultWrapper.className = 'hidden';
});
