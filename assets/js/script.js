// Assignment code here

// Global Input Variables
var specialCharacters = [
  "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"
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

// Randomizer that my tutor helped me with
function randomNumber(arr) {
  var value = Math.floor(Math.random() * arr.length);
  var valueElement = arr[value];

  return valueElement;
};

// Generate the password based on user inputs
var generatePassword = function () {
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  var results = [];
  var charLength = parseInt(window.prompt("How many characters would you like your password to be? Please enter a number between 8 and 128."));
   // Handle case for invalid lengths
  if (!charLength || charLength < 8 || charLength > 128) {
    window.alert("Please enter a number between 8 and 128");
    console.log(charLength); 
    return "Please enter a number between 8 and 128. Try again."
    }
    
   // Tell user how long password will be and prompt for additional inputs
  else {
    window.alert ("You password will be " + (charLength) + " characters long");
    var confirmUpper = window.confirm("Do you want to include upper cased letters?");
    var confirmLower = window.confirm("Do you wnat to include lower cased letters?");
    var confirmSpec = window.confirm("Do you want to include special characters?");
    var confirmNum = window.confirm("Do you want to inlcude numbers?");
    
  }
  // Handle no inputs choosen
  if (!confirmUpper && !confirmLower && !confirmSpec && !confirmNum) {
    window.alert ("You must select at least 1 input to include. Try again");
    return "You must select at least 1 input to include. Try again."
  }
  // Log Confirmations and concat
  else {
    if (confirmUpper) {
      var useUpper = upperLetters;
      possibleCharacters = possibleCharacters.concat(useUpper);
    }
    if (confirmLower) {
      var useLower = lowerLetters;
      possibleCharacters = possibleCharacters.concat(useLower);
    }
    if (confirmSpec) {
      var useSpec = specialCharacters;
      possibleCharacters = possibleCharacters.concat(useSpec);
    }
    if (confirmNum) {
      var useNum = numbers;
      possibleCharacters = possibleCharacters.concat(useNum);
    }
  }
  console.log(possibleCharacters);
  for (var i = 0; i < charLength; i++) {
      var guaranteedCharacters = randomNumber(possibleCharacters);
      results.push(guaranteedCharacters);
  };
  console.log(results.join(""));
  return results.join("");
}
/// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
