//Assignment Code
var generateBtn = document.querySelector("#generate");

//Create password function
function generatePassword() {
  let pwsize = 0
  let possibleCharacters = []

  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numeric = [0,1,2,3,4,5,6,7,8,9];
  const special = ["!", "@", "£", "$", "%", "^", "&", "*", "=", "+"];

  while (parseInt(pwSize) < 8 || parseInt(pwSize) >128 || Number.isNaN(parseInt(pwSize))) {
    pwSize = prompt("Please select a password length between 8 values and 128 values.")
  }
  
  const lowerCaseChoice = confirm("Would you like your password to contain lowercase values?")
  if (lowerCaseChoice == true){
    possibleCharacters = possibleCharacters.concat(lowerCase)
  }

  const upperCaseChoice = confirm("Would you like your password to contain uppercase values?")
  if (upperCaseChoice == true){
    possibleCharacters = possibleCharacters.concat(upperCase)
  }

  const numericChoice = confirm("Would you like your password to contain numeric values?")
  if (numericChoice == true){
    possibleCharacters = possibleCharacters.concat(numeric)
  }

  const specialChoice = confirm("Would you like your password to contain special values?")
  if (specialChoice == true){
    possibleCharacters = possibleCharacters.concat(special)
  }
    
  let result = ""
  for (let i = 0, n=possibleCharacters.length; i<parseInt(pwSize); i++) {
    result += possibleCharacters[Math.floor (Math.random ()*n)]
  }
  return result;
  }

//display generated password on screen
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector ("#password");

    passwordText.textContent = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
