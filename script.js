// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let charLen, charLower, charUpper, charNum, charSpecial;
// Function to prompt user for password options
function getPasswordOptions() {

  charLen = prompt("Please enter the length of the password between 10-64")

  if (charLen < 10 || charLen > 64) {
    alert("Password length must be between 10 and 64 characters");
    return;
  }
  else {
    getCharacterTypes();
  }


}
// Function to prompt user to select character types only after selecting a valid password length
function getCharacterTypes() {

  charLower = confirm("Do you want your password to have lowercase characters");
  console.log(charLower);
  charUpper = confirm("Do you want your password to have UPPERCASE characters");
  console.log(charUpper);
  charNum = confirm("Do you want your password to have Numbers characters");
  console.log(charNum);
  charSpecial = confirm("Do you want your password to have Special characters");
  console.log(charSpecial);

  if (charLower == false && charUpper == false && charNum == false && charSpecial == false) {
    alert("Password must contain atleast one character type");
    getCharacterTypes();
  }
}



// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);