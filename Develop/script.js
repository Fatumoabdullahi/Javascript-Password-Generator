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



function generatePassword
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
