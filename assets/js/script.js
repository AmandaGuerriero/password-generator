// Assignment code here

var passwordInfo = function () {
  for(var i=0; i < passwordInfo.charLength; i++) {
    if (passwordInfo.charLength === 0) {
      window.alert("Please enter a length greater than 0")
    }
    break;
  }
}

var passwordInfo = {
  charLength: window.prompt("How many characters would you like the password to be?"),
  special: window.confirm("Do you want to include special characters?"),
  numbers: window.confirm("Do you want to inlcude numbers?"),
  upper: window.confirm("Do you want to include upper cased letters?"),
  lower: window.confirm("Do you wnat to include lower case letters?"),
}

console.log(passwordInfo.charLength);
console.log(passwordInfo.special);
console.log(passwordInfo.numbers);
console.log(passwordInfo.upper);
console.log(passwordInfo.lower);

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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Ask for # of characters - prompt

// Do you want special characters?

// Including numbers

// Upper

// Lower

// Error message for not entering a length or a length of 0

// Address the all cancel options

// Use confirm prompts to figure out how to conditionally record response to return

// Processing user input and providing an output - return

