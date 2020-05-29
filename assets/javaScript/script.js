// variable storing generate button element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generates password based on input criteria
function generatePassword() 
{
  var passwordLength = inputPasswordLength();
  var charPossibleTypes = inputAndPreparePassCharTypes();
  var password = "", charType;
  var coveredCharTypes = [];
  for (var i = 0; i < passwordLength; i++) 
  {
    //randomly enforcing at least one character from choosen character sets
    while (true) 
    {
      charType = charPossibleTypes[Math.floor(Math.random() * charPossibleTypes.length)];
      if (coveredCharTypes.indexOf(charType) == -1) 
      {
        coveredCharTypes.push(charType);
        break;
      }
      else if(coveredCharTypes.length == charPossibleTypes.length)
      {
        break;
      }
    }
    switch (charType) {
      case "U":
        password += getRandomUpperCaseChar();
        break;
      case "L":
        password += getRandomLowerCaseChar();
        break;
      case "N":
        password += getRandomNumChar();
        break;
      case "S":
        password += getRandomSpecialChar();
    }
  }
  return password;
}

function generateRandomCharType()
{
  
}

// returns a random uppercase character
function getRandomUpperCaseChar() {
  //pick a random upper case character code
  var randomUpperCaseCode = 65 + Math.floor(Math.random() * 26);
  return String.fromCharCode(randomUpperCaseCode);
}

//returns a random lowercase character
function getRandomLowerCaseChar() {
  // pick a random small case character code
  var randomLowerCaseCode = 97 + Math.floor(Math.random() * 26);
  return String.fromCharCode(randomLowerCaseCode);
}

//returns a random digit
function getRandomNumChar() {
  // pick a random integer value between 0 and 9
  var randomNumChar = Math.floor(Math.random() * 10);
  console.log(randomNumChar);
  return randomNumChar;
}

// returns a random special character
function getRandomSpecialChar() {
  var specialCharArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  // pick a random special character
  var randomSpecialChar = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
  console.log(randomSpecialChar);
  return randomSpecialChar;
}

// validate, takes input about character types which need to be considered for password and returns an array of allowed character types
function inputAndPreparePassCharTypes() {
  while (true) {
    var charPossibleTypes = [];
    var includeUpperCase = confirm("Do you want to include uppercase characters?");
    var includeLowerCase = confirm("Do You want to include lowercase characters?");
    var includeNumeric = confirm("Do you want to include numeric characters?");
    var includeSpecial = confirm("Do you want to incldue sepecial characters?");
    if (includeUpperCase || includeLowerCase || includeNumeric || includeSpecial) {
      break;
    }
    else {
      alert("Please choose atleast one type of character to include in password. So, let us try again.")
    }

  }
  if (includeUpperCase) {
    charPossibleTypes.push("U");
  }
  if (includeLowerCase) {
    charPossibleTypes.push("L");
  }
  if (includeNumeric) {
    charPossibleTypes.push("N");
  }
  if (includeSpecial) {
    charPossibleTypes.push("S");
  }
  return charPossibleTypes;
}

//validates and takes length of password to be generated as input from user.
function inputPasswordLength() {
  var passwordLength;
  while (true) {
    passwordLength = prompt("Enter the length of the password (supported range: 8 - 128)");
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
    else {
      alert("Please enter the length between 8 to 128 only. So, Let us try again.");
    }
  }
  return passwordLength;
}