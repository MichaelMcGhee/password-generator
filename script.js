// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var charBase = "";
  var length = prompt("How long do you want your password to be?");
  var confirmLower = confirm("Do you want to include lower-case letters?");
  var confirmUpper = confirm("Do you want to include Upper-case letters?");
  var confirmNumber = confirm("Do you want to include numbers?");
  var confirmSpecial = confirm("Do you want to include Special Characters?");
  if (length < 8 || length > 128) {
    alert("Must choose between 8 and 128 charaters in length!");
    return generatePassword();
  }

  if (confirmLower) {
    charBase = charBase + "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirmUpper) {
    charBase = charBase + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirmNumber) {
    charBase = charBase + "0123456789";
  }
  if (confirmSpecial) {
    charBase = charBase + "!@#$%^&*()_+";
  }
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    alert("Must choose at least one character choice Prompt!");
    return generatePassword();
  }

  var generatedPassword = "";

  for (let i = 0; i < length; i++) {
    generatedPassword += charBase.charAt(
      Math.floor(Math.random() * charBase.length)
    );
  }
  return generatedPassword;
}
