// Assignment Code
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "1234567890"
var passwordlength = ""

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if (passwordlength >= 8 && passwordlength < 250 ) {
  // block of code to be executed if the condition is true
  console.log("Password must be more then 8 characters and less than 250");
} else {
  console.log("No Password can be made")
}