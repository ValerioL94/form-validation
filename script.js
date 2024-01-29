const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const country = document.getElementById('country');
const countryError = document.getElementById('countryError');
const zipCode = document.getElementById('zipCode');
const zipCodeError = document.getElementById('zipCodeError');
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const pwdConfirm = document.getElementById('passwordConfirm');
const pwdConfirmError = document.getElementById('pwdConfirmError');

const confirmBtn = document.getElementById('confirm');
const resetBtn = document.getElementById('reset');
const result = document.getElementById('resultWrapper');
confirmBtn.addEventListener('click', () => {
  result.classList.remove('hidden');
});
resetBtn.addEventListener('click', () => {
  result.classList.add('hidden');
});
