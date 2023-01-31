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

  charLen = prompt("Please enter the length of the password between 8-64")

  if (charLen < 8 || charLen > 64) {
    alert("Password length must be between 8 and 64 characters - click GENERATE PASSWORD AGAIN");
    return;
  }
  else {
    console.log("Lenght of the password chosen is " + charLen);
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
  else {
    //Generates an Array with random lower case characters
    getRandom(lowerCasedCharacters, randomLower, charLower)
    console.log("Random Lower case Array " + randomLower);
    //Generates an Array with random Upper case characters
    getRandom(upperCasedCharacters, randomUpper, charUpper)
    console.log("Random UPPER case Array " + randomUpper);
    //Generates an Array with random Numerical characters
    getRandom(numericCharacters, randomNum, charNum)
    console.log("Random Numerical Array " + randomNum);
    //Generates an Array with random Special characters
    getRandom(specialCharacters, randomSpecial, charSpecial)
    console.log("Random Special character Array " + randomSpecial);
  }
}

//Defining Randomly generated arrays 
let randomLower = [], randomUpper = [], randomNum = [], randomSpecial = [];


// Function for getting a random element from an array
function getRandom(ogArr, randArr, charType) {
  if (charType == true) {
    for (i = 0; i < charLen; i++) {
      //Generates a random number to be used as index for the new array
      let mathRandom = Math.floor(Math.random() * charLen);


      // If the lenght of the original array is greater than the random number, splice the index value into new array else split the random number and use the 2nd digit at array index.
      if (ogArr.length > mathRandom) {
        randArr.splice(mathRandom, 0, ogArr[mathRandom]);
      }
      else {

        var num = mathRandom;
        var digits = [];
        while (num != 0) {
          digits.push(mathRandom % 10);
          num = Math.trunc(num / 10);
          digits.reverse();

        }

        randArr.splice(i, 0, ogArr[digits[1]]);
      }
    }
  }
  else {
    return;
  }
}



// Function to generate password with user input
function generatePassword() {
  let arrPassword = [];
  let arrConcat = randomLower.concat(randomUpper, randomNum, randomSpecial);

  for (i = 0; i < charLen; i++) {
    let mathRandom = Math.floor(Math.random() * arrConcat.length);
    arrPassword.splice(mathRandom, 0, arrConcat[mathRandom]);

  }
  console.log("Randomly Generated Password in an array form= " + arrPassword);

  generatedPassword = arrPassword.join("");
  console.log("Length of the password selected was " + charLen + ". Length of the generated password is " + generatedPassword.length)
  console.log("The Randomly Generated Password is " + generatedPassword);
  clearArrays(randomLower);
  clearArrays(randomUpper);
  clearArrays(randomNum);
  clearArrays(randomSpecial);
  return generatedPassword;


}
//Clears all the randomly generated arrays to make sure residual values do not create wrong password
function clearArrays(emptyArray) {
  emptyArray.length = 0;

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