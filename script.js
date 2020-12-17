// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  // get the number of caracters the user want the password to have
  do {
    numberOfLetters = prompt("How many caracters do you want in your password. Passwords can only be between 8 and 128 caracters long.");
  }while (numberOfLetters < 8 || numberOfLetters > 128)
  console.log(numberOfLetters);
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
