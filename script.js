// Assignment Code
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialCharacters = "!@#$%^&*()_"

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
  var creatingPassword = ""
  var chosenChars = ""

  //ask the user now many chars (passLength)
  var passLength = prompt(
    "Choose a length of at least 8 characters and no more than 130 characters."
  )

  if (passLength >= 8 && passLength <= 126) {
    
  } else {
    return window.alert("Password must be 8 through 126 characters long!"),
    console.log("Generate Password Again!")
  }
  //make sure the user typed in a number and not like, a word.
  //and if it is a number, make sure it is within bounds

  //ask the user do you want lowercase? 
  //if yes, chosenChar += lowerCase
  userChoiceLower = confirm("Would you like lowercase letters in password?")
  if (userChoiceLower) {
    chosenChars += lowerCase
  }
  userChoiceUpper = confirm("Would you like uppercase letters in password?")
  if (userChoiceUpper) {
    chosenChars += upperCase
  }
  userChoiceNumbers = confirm("Would you like numbers in password?")
  if (userChoiceNumbers) {
    chosenChars += numbers
  }
  userChoiceSpecialCharacters = confirm("Would you like specials character in password?")
  if (userChoiceSpecialCharacters) {
    chosenChars += specialCharacters
  }
//must pick at least one of the variables above
  //ask the user do you want Upper?
  //if yes, chosenChar ++ upperCase

  //and so on for number and spec...


  //loop for passLength number of times
  //each time, get a random char from the "chosenChars" string
  //put that character into creatingPassword
  for (var i = 0; i < passLength; i++) {
    //genearate a random number between 0 and chosenChars.length
    var randomIndex = Math.floor(Math.random() * chosenChars.length);
    var randomChar = chosenChars[randomIndex]
    creatingPassword += randomChar
  }

  return creatingPassword
}
