// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!@£$%^&*+=";

const passwordLength = prompt("Please enter password length:");
const length = parseInt (passwordLength);

if (length < 8 || length > 128 || isNaN(passwordLength)) {
  alert("choose a different length.");
  return;
}

const isLowercase = confirm("Do you want to add lowercase values to your password?");
const isUppercase = confirm("Do you want to add uppercase values to your password?");
const isNumeric = confirm("Do you want to add numeric values to your password?");
const isSpecial = confirm("Do you want to add special characters to your password?");

if (!isLowercase && !isUppercase && !isNumeric && !isSpecial) {
  alert()
  return;
}

const choices = [];
if (isLowercase) {
  choices.push(lowercase);
}
const choices = [];
if (isUppercase) {
  choices.push(uppercase);
}
const choices = [];
if (isNumeric) {
  choices.push(numeric);
}
const choices = [];
if (isSpecial) {
  choices.push(special);
}

let password = "";




function generatePassword
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
