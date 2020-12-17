// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  // get the number of caracters the user want the password to have
  do {
    var numberOfLetters = prompt("How many caracters do you want in your password. Passwords can only be between 8 and 128 caracters long.");
  }while (numberOfLetters < 8 || numberOfLetters > 128)
  // Ask user if they want any upper case letters in their password
  var wantUpperCaseLetter = confirm("Do you want upper case letters?");
  // Ask user if they want any lower case letters in their password
  var wantLowerCaseLetter = confirm("Do you want lower case letters?");
  // Ask user if they want any numbers in their password
  var wantNumber = confirm("Do you want numbers?");
  // Ask user if they want any special characters in their password
  var wantSpecialChar = confirm("Do you want special characters?")
  // check if user didn't pick any criteria
  if(wantUpperCaseLetter || wantLowerCaseLetter || wantNumber || wantSpecialChar){
    return "ok";
  }
  else{
    alert("Cannot complete task.")
  }
  console.log(numberOfLetters);
  console.log(wantUpperCaseLetter);
  console.log(wantLowerCaseLetter);
  console.log(wantNumber);
  console.log(wantSpecialChar);
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
