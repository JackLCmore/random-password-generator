// Assignment Code

// Global Variables
var generateBtn = document.querySelector("#generate");

// Character Arrays
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChar =[' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\'',']','^','_','`','{','|','}','~'];
var lengthChoice = ""
var numbersChoice = ""
var uppercaseChoice = ""
var lowercaseChoice = ""

function RNG (num) {
  var index = Math.floor(Math.random() * num.length)
  var randomItem = num[index]
  console.log('Random Character: ', randomItem)
  return randomItem;
}
RNG(numbers[RNG(numbers)]);
RNG(lowerCase);
RNG(upperCase);
RNG(specialChar);
// method .concat() to combine arrays into one
// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  lengthChoice = prompt('how long would you like your password to be? (between 8-128 characters)');
  if (lengthChoice <= 8){
    alert('please try a different value');
    writePassword;
    return;
  }
  else if (lengthChoice >=128){
    alert('please try a different value');
    writePassword;
    return;
  }
  else{
    alert('You have chosen ' + lengthChoice + ' characters.');
    return lengthChoice;
  };
  
  numbersChoice = confirm('would you like numbers to be included in your password?');
  if (numbersChoice === true){
    alert('Your password will include numbers.');
    return numbersChoice;
  }
  else{
    alert('Your password will not include numbers.');
    return numbersChoice;
  }

  uppercaseChoice = confirm('would you like uppercase letters to be included in your password?');
  if (uppercaseChoice === true){
    alert('Your password will include uppercase letters.');
    return uppercaseChoice;
  }
  else{
    alert('Your password will not include uppercase letters.');
    return uppercaseChoice;
  }
  lowercaseChoice = confirm('would you like lowercase letters to be included in your password?');
  if (lowercaseChoice === true){
    alert('Your password will include lowercase letters.');
    return lowercaseChoice;
  }
  else{
    alert('Your password will not include lowercase letters.');
    return lowercaseChoice;
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

