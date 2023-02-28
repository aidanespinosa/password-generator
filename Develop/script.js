// Get references to the #generate element and the modal elements
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});

// Generate password based on selected criteria
function generatePassword() {
  var length = parseInt(
    prompt("How many characters do you want your password to be?")
  );
  var lowercase = confirm("Do you want to include lowercase letters?");
  var uppercase = confirm("Do you want to include uppercase letters?");
  var numbers = confirm("Do you want to include numbers?");
  var symbols = confirm("Do you want to include symbols?");

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var symbolChars = "!@#$%^&*()_-+=";

  var allChars = "";
  if (lowercase) {
    allChars += lowercaseChars;
  }
  if (uppercase) {
    allChars += uppercaseChars;
  }
  if (numbers) {
    allChars += numberChars;
  }
  if (symbols) {
    allChars += symbolChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}
