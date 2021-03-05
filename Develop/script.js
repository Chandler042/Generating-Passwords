// Assignment Code
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialcharacters = "!@#$%^&*()_"
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
function generatePassword() {
  var passwordlength = prompt (
    "Choose a length of at least 8 characters and no more than 130 characters"
  );

  if (passwordlength > 8 && passwordlength <= 130) {
    //Pop up questions for the users
    var lowercase = confirm("Click ok to confirm using lowercase letters in password");
    var Uppercase = confirm("CLick ok to confirm using uppercase letters in password");
    var numbers = confirm("Click ok to confirm using numbers in password");
    var specialcharacters = confirm("Click ok to confirm using special characters in password");
  } else {
    alert(
      //Letting user know password must be within 8-130 characters, will come up as a pop up
      "Length of password must be at least 8 characters and less than 130 characters"
    );
    return "";
  }
}
