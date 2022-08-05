
// create prompts for password criteria
// length of the password can only be 8-128 characters
// asked to include lowercase, uppercase, numeric and/or special characters
// password is generated that matches select criteria
// display in an alert or written on the page


var passwordLength = 8;
var solutionArray = [];

var specialArray = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '/', '<', '>', '(', ')', '[', ']'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");



function questionPrompts() {

  characterLength = (prompt("How many characters do you want your password to be? (8-128 characters)"))

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number between 8 and 128. Please enter password length again.");
    return;
  }
  var lowerCasePrompt = confirm("Would you like lowercase letters in your password? More character options will make your password more secure.")
  console.log(lowerCasePrompt)
  var upperCasePrompt = confirm("Would you like uppercase letters in your password?")
  var numbersPrompt = confirm("Would you like numbers in your password?")
  var specialCharPrompt = confirm("Would you like special characters in your password?")
  
  if (lowerCasePrompt === true) {
    solutionArray = solutionArray.concat(lowerCaseArray);
    console.log(solutionArray)
  }

  if (upperCasePrompt === true) {
    solutionArray =solutionArray.concat(upperCaseArray);
  }

  if (numbersPrompt === true) {
    solutionArray = solutionArray.concat(numberArray);

  }
  if (specialCharPrompt === true) {
    solutionArray = solutionArray.concat(specialArray);
  }

  var randomPassword = "";
  for (let i = 0; i < characterLength; i++) {
    var randomNumber = Math.floor(Math.random() * solutionArray.length)
    console.log(randomNumber)
    var randomCharacter = solutionArray[randomNumber]
    
    console.log(randomCharacter)
    randomPassword = randomCharacter + randomPassword;
  }
  console.log(solutionArray)
  console.log(randomPassword);
  return randomPassword;



}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = questionPrompts();
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
