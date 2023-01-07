//Assignment Code

var generateBtn = document.querySelector("#generate");

var passwordLength;
var characters; //symbols
var numbers;
var upperLetters; //uppercase
var lowerLetters; //lowercase

var upperL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //upper
var lowerL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //lower
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCh = ['?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=']; //sym


function generatePassword() {

  var password = "";
  var passwordCharacter = "";

  //must return a string value that is the password
  //.prompt user to choose num btwn 8 and 128
  while (true) {
    passwordLength = parseInt(prompt('Choose between 8 and 128 for the length of your password'));
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    } else {
      alert('Please select a number between 8 and 128');
    }
  }


  //confirm user for upper, lowe, num, sepcial character (4 confirm promts)
  //4 vars to save T/F to included characters
  characters = confirm('Do you want it to include special characters?');
  numbers = confirm('Do you want it to include numbers?');
  upperLetters = confirm('Do you want it to include uppercase lettters?');
  lowerLetters = confirm('Do you want it to include lowercase letters?');


  if (characters) {
    passwordCharacter = specialCh;
  } else if (numbers) {
    passwordCharacter = num;
  } else if (upperLetters) {
    passwordCharacter = upperL;
  } else if (lowerLetters) {
    passwordCharacter = lowerL;
  } else if (characters && numbers) {
    passwordCharacter = specialCh += num;
  } else if (characters && upperLetters) {
    passwordCharacter = specialCh += upperL;
  } else if (characters && lowerLetters) {
    passwordCharacter = specialCh += lowerL;
  } else if (numbers && upperLetters) {
    passwordCharacter = num += upperL;
  } else if (numbers && lowerLetters) {
    passwordCharacter = num += lowerL;
  } else if (upperLetters && lowerLetters) {
    passwordCharacter = upperL += lowerL;
  } else if (characters && numbers && upperLetters) {
    passwordCharacter = specialCh += num += upperL;
  } else if (characters && numbers && lowerLetters) {
    passwordCharacter = specialCh += num += lowerL;
  } else if (characters && upperLetters && lowerLetters) {
    passwordCharacter = specialCh += upperL += lowerL;
  } else if (lowerLetters && numbers && upperLetters) {
    passwordCharacter = lowerL += num += upperL;
  } else if (characters && numbers && upperLetters && lowerLetters) {
    passwordCharacter = specialCh += num += upperL += lowerL;
  } else if (!characters && !numbers && !upperLetters && !lowerLetters) {
    alert('You need to select at least one criterie to generate your password!');
  }
  //validate that atleast one cat was chosen


  //if user says yes to include that cat choose random (Math.random) elements from the array
  //let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)]
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);



//for loop somewhere
//if statements