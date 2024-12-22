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

function generatePassword(){
    let passwordlength;
    let includeUpperCase;
    let includelowerCase;
    let includeNumber;
    let includeSpecialCharacter;

passwordlength = parseInt(prompt('Choose a password between 8 and 128 characters'))

includeUpperCase = confirm("upper")
includelowerCase = confirm("lower")
includeNumber = confirm("numbers")
includeSpecialCharacter = confirm("special")

while(isNaN(passwordlength) || passwordlength< 8 || passwordlength >128) {
    alert('I have to add these little ones form 8 to 128');
   return"";
    //parseInt(pormpt('choice 8 to 128'))

}
if (!includeUpperCase && !includelowerCase && !includeNumber && !includeSpecialCharacter)

{
alert('Something must be written')
return"";
}
let availableChar ="";
if(includeUpperCase) {
    availableChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (includelowerCase) {
    availableChar += "abcdefghijklmnopqrstuvwxyz";
}
if (includeNumber) {
    availableChar += "123456789";
}
if (includeSpecialCharacter) {
    availableChar += "!@#$%^&";
}

let password ="";
for (let i =0 ; i < passwordlength; i++) {
    let randomIndex = Math.floor(Math.random() * availableChar.length);
    password += availableChar.charAt (randomIndex);
}
return password;
}