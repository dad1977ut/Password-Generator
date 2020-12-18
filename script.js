// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function randomCharacter(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}
function generatePassword() {
  var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var numArr = ["0","1","2","3","4","5","6","7","8","9"]
  var specialArr =["!","@","#","$","%","^","&","*","(",")"]
  var storePass =" "
  var randomNumArr = []
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
  // Make an array of base on the choices user pick
  if(wantUpperCaseLetter){
    randomNumArr.push(1);
  }
  if(wantLowerCaseLetter){
    randomNumArr.push(2);
  }
  if(wantNumber){
    randomNumArr.push(3);
  }
  if(wantSpecialChar){
    randomNumArr.push(4);
  }
  console.log(randomNumArr);
  // check if user didn't pick any criteria
  if(wantUpperCaseLetter || wantLowerCaseLetter || wantNumber || wantSpecialChar){
  // create random character
     for (var i = 0 ; i < numberOfLetters - 4 ; i++) {
       var randomNum = randomNumArr[Math.floor(Math.random() * randomNumArr.length)]
       if(randomNum === 1){
       storePass = storePass + randomCharacter(upperArr);
       }else if(randomNum === 2){
        storePass = storePass + randomCharacter(lowArr);
       }else if(randomNum === 3){
        storePass = storePass + randomCharacter(numArr);
       }else if(randomNum === 4){
        storePass = storePass + randomCharacter(specialArr);
       }
      
     }
     for (var i = 0 ; i < 4 ; i++) {
      var randomNum = randomNumArr[Math.floor(Math.random() * randomNumArr.length)]
      if(randomNum === 1){
      storePass = storePass + randomCharacter(upperArr);
      }else if(randomNum === 2){
       storePass = storePass + randomCharacter(lowArr);
      }else if(randomNum === 3){
       storePass = storePass + randomCharacter(numArr);
      }else if(randomNum === 4){
       storePass = storePass + randomCharacter(specialArr);
      }
     
    }
      return storePass 

  }
  else{
    alert("Cannot complete task. You needs to select at least one criteria.")
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
