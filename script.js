// Assignment Code

// TODO
// Select the element by id of password and store it into a variable
// Ex: passwordEl > passwordElement
var passwordText = document.querySelector("#password");

var clickit;
var validateUpperCase;
var validateLowerCase;
var validateNumber;
var validateCharacter;

//Special, Numeric and Alphabetical Characters
largeletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
smalletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var userinput;

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  event.preventDefault()
  password = generatePassword();
  passwordText.placeholder = password;
  //console.log(textContent);
});

//Time to generate password+
function generatePassword() {
  clickit = parseInt(prompt("How long would you like your password? Please choose between 8 and 128"));

  // Validation 1 - Incorrect Input made by the User
  if (!clickit) {
    alert("Ensure you type in the length (a number) you would like for your password");
  }
  /// Validation 1a - User's choice went beyond the criteria
  else if (clickit < 8 || clickit > 128) {
    clickit = parseInt(prompt("Inorder to proceed, ensure you choose the length of your password. It must be between 8 and 128"));

  }

  // Other Password criteria user can choose from 
  else {

    validateUpperCase = confirm("Would you like your password to contain Uppercases?");
    validateLowerCase = confirm("Would you like your password to contain Lowercase?");
    validateNumber = confirm("Would you like your password to contain Numbers?");
    validateCharacter = confirm("Would you like your password to contain Characters?");
  };


  // Validation 2 - User did not make any criteria choice
  if (!validateUpperCase && !validateLowerCase && !validateNumber && !validateCharacter) {
    userinput = alert("You have to choose a Password Criteria");
  }

  //Validation 3 - User did accept all 4 Criteria
  else if (validateUpperCase && validateLowerCase && validateNumber && validateCharacter) {
    userinput = largeletters.concat(smalletters, numbers, special);

  }

  /// Validation 4 - Only one choice made 
  else if (validateUpperCase) {
    userinput = largeletters;
  }
  else if (validateLowerCase) {
    userinput = smalletters;
  }
  else if (validateNumber) {
    userinput = numbers;
  }
  else if (validateCharacter) {
    userinput = special;
  }


  // Validation 5 - Only two choices made by the User
  else if (validateUpperCase && validateLowerCase) {
    userinput = largeletters.concat(smalletters);
  }
  else if (validateCharacter && validateNumber) {
    userinput = special.concat(numbers);
  }
  else if (validateCharacter && validateLowerCase) {
    userinput = special.concat(smalletters);
  }
  else if (validateUpperCase && validateCharacter) {
    userinput = largeletters.concat(special);
  }
  else if (validateLowerCase && validateNumber) {
    userinput = smalletters.concat(numbers);
  }
  else if (validateUpperCase && validateNumber) {
    userinput = largeletters.concat(numbers);
  }


  // Validation 6 - Only three choices made by the User
  else if (validateNumber && validateUpperCase && validateLowerCase) {
    userinput = numbers.concat(largeletters, smalletters);
  }
  else if (validateNumber && validateUpperCase && validateCharacter) {
    userinput = numbers.concat(largeletters, special);
  }
  else if (validateNumber && validateLowerCase && validateCharacter) {
    userinput = numbers.concat(smalletters, special);
  }
  else if (validateCharacter && validateUpperCase && validateLowerCase) {
    userinput = special.concat(largeletters, smalletters);
  }



  //Random selection of password based on the criteria picked by the User
  var uniqueid = [];
  for (var i = 0; i < clickit; i++) {
    var userDecision = userinput[Math.floor(Math.random() * userinput.length)];
    uniqueid.push(userDecision);
  }
  var password = uniqueid.join("");
  PasswordEntry(password);
  return uniqueid;
}



// Section: Placing the password in the textarea
function PasswordEntry(password) {
  passwordText.value = password;
  //console.log (PasswordEntry);
}

