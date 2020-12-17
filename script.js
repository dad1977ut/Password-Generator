// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  // get the number of caracters the user want the password to have
  do {
    var numberOfLetters = prompt("How many caracters do you want in your password. Passwords can only be between 8 and 128 caracters long.");
  }while (numberOfLetters < 8 || numberOfLetters > 128)
  wantCapitalLetter = confirm("Do you want capital letters.");
  wantLowerCaseLetter = confirm("Do you want lower case letters.");
  console.log(numberOfLetters);
  console.log(wantCapitalLetter);
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
