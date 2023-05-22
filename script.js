// Assignment Code
var generateBtn = document.querySelector("#generate");

// Stage variables to be defined in the generatePassword function
var genConfirm;
var pLength;
var lowCase;
var upCase;
var numb;
var specChars;

// Define the character types to be used and randomized by the password randomizer loop
var lowAlph = ["abcdefghijklmnopqrstuvwxyz"];
var upAlph = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var specials = ["!@#$%^&*()+-/?.,"];

// Declare and create the generatePassword function
function generatePassword() {
  // Ensure button is actually working
  console.log("clicked");
  // Confirm the user wants to create a new password
  genConfirm = window.confirm("Do you want to create a new password?");
  // prompt user with password length
  pLength = window.prompt(
    "Please choose a password length 8-128 characters long"
  );
  // Validate password length and reprompt until the length is a valid number
  while (true) {
    if (isNaN(pLength) || pLength < 8 || pLength > 128) {
    } else {
      break;
    }
    var pLength = window.prompt("Please re-enter a password length");
  }
  // confirm user wants lowercase chars
  lowCase = window.confirm("Do you want to use lowercase letters?");
  // confirm user wants uppercase chars
  upCase = window.confirm("Do you want to use uppercase letters?");
  // confirm user wants numbers
  numb = window.confirm("Do you want to use numbers?");
  // confirm user wants special characters
  specChars = window.confirm(
    "Do you want to use special characters (i.e. !@#$)?"
  );
  //Confirms that the user has chosen at least one of the four character sets, otherwise it will continue to loop through the same four questions.
  while (true) {
    if (!lowCase && !upCase && !numb && !specChars) {
    } else {
      break;
    }
    window.alert("Please choose at least one of the four character sets :)");
    lowCase = window.confirm("Do you want to use lowercase letters?");
    upCase = window.confirm("Do you want to use uppercase letters?");
    numb = window.confirm("Do you want to use numbers?");
    specChars = window.confirm(
      "Do you want to use special characters (i.e. !@#$)?"
    );
  }

  // Defines the charset and concatenates the arrays as the user chooses which character types are to be utilized.
  var charset = "";
  if (lowCase) {
    charset = charset.concat(lowAlph);
  }
  if (upCase) {
    charset = charset.concat(upAlph);
  }
  if (numb) {
    charset = charset.concat(numbers);
  }
  if (specChars) {
    charset = charset.concat(specials);
  }

  // Randomizes the characters in the chosen charset

  var password = "";
  for (var i = 0; i < pLength; i++) {
    let bs = [Math.floor(Math.random() * charset.length)];
    password = password + charset[bs];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
