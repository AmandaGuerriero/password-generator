// Assignment code here

// Global Input Variables
var specialCharacters = [
  "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"
];

var numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

var lowerLetters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var upperLetters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

// Global Functions
var randomNumber = function() {
  var value = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  return value;
};

// Click Generate Password, prompt the user to input password needs
var generatePassword = function () {
  var charLength = parseInt(window.prompt("How many characters would you like your password to be? Please enter a number between 8 and 128."));
   // Handle case for invalid lengths
  if (!charLength || charLength < 8 || charLength > 128) {
    window.alert("Please enter a number between 8 and 128");
    console.log(charLength);
    generatePassword ();
    }
   // Tell user how long password will be and prompt for inputs
  else {
    window.alert ("You password will be " + (charLength) + " characters long");
    console.log(charLength);
    var confirmUpper = window.confirm("Do you want to include upper cased letters?");
    console.log(confirmUpper);
    var confirmLower = window.confirm("Do you wnat to include lower case letters?");
    console.log(confirmLower);
    var confirmSpec = window.confirm("Do you want to include special characters?");
    console.log(confirmSpec);
    var confirmNum = window.confirm("Do you want to inlcude numbers?");
    console.log(confirmNum);
    
  }
  // Handle no inputs choosen
  if (!confirmUpper && !confirmLower && !confirmSpec && !confirmNum) {
    window.alert ("You must select at least 1 input to include");
    generatePassword ();
  }
  // Log Confirmations
  else {
    if (confirmUpper) {
      var useUpper = upperLetters;
      console.log (useUpper);
    }
    if (confirmLower) {
      var useLower = lowerLetters;
      console.log (useLower);
    }
    if (confirmSpec) {
      var useSpec = specialCharacters;
      console.log (useSpec);
    }
    if (confirmNum) {
      var useNum = numbers;
      console.log (useNum);
    }
  }

  // Pick random characters from each array

  // var passwordInputs = [useLower, useNum, useUpper, useSpec]
  // console.log (passwordInputs);

  // for (var i = 0; i < charLength; i++) {
  //   var randomPassword = passwordInputs[Math.floor(Math.random() * passwordInputs.charlength)];
  //   return randomPassword
  // }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button - Was causing it to loop twice
// generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", generatePassword);


