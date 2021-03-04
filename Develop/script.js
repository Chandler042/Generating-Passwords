// Assignment Code
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
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

// Adding prompts to ask user the complexity of password
if (passwordlength >= 8 && passwordlength <= 130) {
  // block of code to be executed if the condition is true
  console.log("Password must be more then 8 characters and less than 250");
} else {
  console.log("No Password can be made")
}

if (lowercase) {
  console.log("Have lowercase letters in password")
} else {
  console.log("Have no lowercase letters in password")
}

if (Uppercase) {
  console.log("Have Uppercase letters in password")
} else {
  console.log("Have no Uppercase letters in password")
}

if (numbers) {
  console.log("Have Numbers in password")
} else {
  console.log("Have no Numbers letters in password")
}

