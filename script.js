// Function to generate a password, password length
function generatePassword() {
  var length = prompt("Choose a password length between 8 and 128 characters.");
  while (length < 8 || length > 128 || isNaN(length)){
     length = prompt("Invalid input. Please input a number between 8 and 128.");
  }
  // Prompt for char types
  var hasLower = confirm("Do you want to include lowercase letters?");
  var hasUpper = confirm("Do you want to include uppercase letters?");
  var hasNumber = confirm("Do you want to include numbers?");
  var hasSpecial = confirm("Do you want to include special characters?");
 
  // Select at least one char type
  if (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
     alert("You must select at least one character type.");
     return generatePassword(); // Recursively calls the function until a valid input is given
  }
  // Defining the char sets
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?/{}`|";
 
  var allChars= "";
  if (hasLower) allChars += lowerChars;
  if (hasUpper) allChars += upperChars;
  if (hasNumber) allChars += numberChars;
  if (hasSpecial) allChars += specialChars;
 
  // Generate the password time!
  var password = "";
  for (var i = 0; i < length; i++) {
     var randomIndex = Math.floor(Math.random() * allChars.length);
     password += allChars[randomIndex];
  }
 
  return password;
 }
 
 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 
 // Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 