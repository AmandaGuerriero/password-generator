// Assignment code here

// Once they have clicked Generate Password, prompt the user to input password needs
var generatePassword = function () {
  charLength = window.prompt("How many characters would you like the password to be?");
  if (!charLength || charLength === 0) {
    window.alert("Please enter a length greater than 0")
    console.log(generatePassword.charLength);
    }
  else {
    confirmUpper = window.confirm("Do you want to include upper cased letters?");
    console.log(generatePassword.confirmUpper);
    confirmLower = window.confirm("Do you wnat to include lower case letters?");
    console.log(generatePassword.confirmSpec);
    confirmSpec = window.confirm("Do you want to include special characters?");
    console.log(generatePassword.confirmSpec);
    confirmNum = window.confirm("Do you want to inlcude numbers?");
    console.log(generatePassword.confirmNum);
  }

  // Handle no inputs choosen
  if (!confirmUpper && !confirmLower & !confirmSpec & !confirmNum) {
    window.alert ("You must select at least 1 input to include");
  }
  else {
    writePassword ();
  }
};

var randomNumber = function() {
  var value = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  return value;
};

var specialCharacters = [
  "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"
];

var numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

var letters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword(); - Was causing it to loop twice
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button - Was causing it to loop twice
// generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", generatePassword);

// Error message for not entering a length or a length of 0

// Address the all cancel options

// Use confirm prompts to figure out how to conditionally record response to return

// Processing user input and providing an output - return

