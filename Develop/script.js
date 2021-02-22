// Assignment Code
var generateBtn = document.querySelector("#generate");

//these variables store user input selection
var numSelect;
var lowerCaseSelect;
var upperCaseSelect;
var specialCharSelect;

//Hard Coded globals
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/"];
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
  'z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
  'Z'];

//generatePassword function
function generatePassword() {

  //changes userinput from string to integer
  var passwordLength = parseInt(
    prompt('Please enter the desired length for your password: (Note: Enter a number between 8-128)')
  );

  //checks to see if the user entered an integer - if not, throws alert
  if (Number.isNaN(passwordLength) || "" || null) {
    alert('You have entered a character that is NOT a number. Please enter a number 8-128');
  }

  //checks to see if user input is between 8 and 128
  else if (passwordLength < 8 || passwordLength > 128) {
    alert('The number you have entered is not between 8-128. Please re-enter your desired password length.');
  }
  // if passes main checks then goes through confimation boxes
  else {
    numSelect = confirm('Would you like to include numbers?');
    specialCharSelect = confirm('Would you like to include special characters? (E.G. - !@#$ )');
    lowerCaseSelect = confirm('Would you like to include lowercase letters?');
    upperCaseSelect = confirm('Would you like to include uppercase letters?');

    //checks to see if at least ONE selection was made
    if (!numSelect && !lowerCaseSelect && !upperCaseSelect && !specialCharSelect) {
      alert('In order to generate a password, at least ONE selection must be true');
    }
  }

  // returns all user selections in one object literal
  return selections = {
    passwordLength: passwordLength,
    numSelect: numSelect,
    specialCharSelect: specialCharSelect,
    lowerCaseSelect: lowerCaseSelect,
    upperCaseSelect: upperCaseSelect
  };
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordArr = [];

  if (password.numSelect) {
    for (i = 0; i < numbers.length; i++) {
      passwordArr.push(numbers[i]);
    }
  }

  if (password.specialCharSelect) {
    for (i = 0; i < special.length; i++) {
      passwordArr.push(special[i]);
    }
  }

  if (password.lowerCaseSelect) {
    for (i = 0; i < lowerChar.length; i++) {
      passwordArr.push(lowerChar[i]);
    }
  }
  if (password.upperCaseSelect) {
    for (i = 0; i < upperChar.length; i++) {
      passwordArr.push(upperChar[i]);
    }
  }

  var generatedPass = [];

//chooses characters at random i.e MAGICHAT and puts them characters in generatedPass
  for (let i = 0; i < password.passwordLength; i++) {
    var magicHat = Math.floor(Math.random() * Math.floor(passwordArr.length));
    generatedPass.push(passwordArr[magicHat]);
  }


  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPass.join('');

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

