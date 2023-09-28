// Assignment Code

// Global Variables
var generateBtn = document.querySelector("#generate");

// Character Arrays
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChar =[' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\'',']','^','_','`','{','|','}','~'];

var userData = [];
var tempPW = [];

var lengthChoice = "";
var numbersChoice = "";
var uppercaseChoice = "";
var lowercaseChoice = "";

function RNG (num) {
  var index = Math.floor(Math.random() * num.length);
  var randomItem = num[index];
  console.log('Random Character: ', randomItem);
  return randomItem;
}

RNG(numbers[RNG(numbers)]);
RNG(lowerCase);
RNG(upperCase);
RNG(specialChar);
// method .concat() to combine arrays into one

function characterAmt(){
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
  numConfirm();
  return lengthChoice;
}

function numConfirm(){
  numbersChoice = confirm('would you like numbers to be included in your password?');
  if (numbersChoice === true){
    alert('Your password will include numbers.');
    userData = userData.concat(numbers);
    console.log(userData);
    uppercaseConfirm();
    return numbersChoice;
  }
  else{
    alert('Your password will not include numbers.');
    uppercaseConfirm();
    return numbersChoice;
  }
}

function uppercaseConfirm(){
  uppercaseChoice = confirm('would you like uppercase letters to be included in your password?');
  if (uppercaseChoice === true){
    alert('Your password will include uppercase letters.');
    userData = userData.concat(upperCase)
    lowercaseConfirm();
    return uppercaseChoice;
  }
  else{
    alert('Your password will not include uppercase letters.');
    lowercaseConfirm();
    return uppercaseChoice;
  }
}
function lowercaseConfirm(){
  lowercaseChoice = confirm('would you like lowercase letters to be included in your password?');
  if (lowercaseChoice === true){
    userData = userData.concat(lowerCase);
    alert('Your password will include lowercase letters.');
    specialCharConfirm();
    return lowercaseChoice;
  }
  else{
    alert('Your password will not include lowercase letters.');
    specialCharConfirm();
    return lowercaseChoice;
  }
}
function specialCharConfirm(){
  specialCharChoice = confirm('would you like special character to be included in your password?');
  if(specialCharChoice === true){
    userData = userData.concat(specialChar);
    alert('Your password will include special characters.')
    return specialCharChoice;
  }
  else{
    alert('Your password will not include special characters.');
    return specialCharChoice;
  }
}
}


  
  // function generatePassword() {
  //   var userSelected = []
  //   var finalPW = []
  //   for (var i = 0; i < pwLength; i++) {
  //     var newCharacter = RNG(userSelected)
  //     finalPW.push(newCharacter)
      
  //   }
  
  //   return finalPW.join('');

  function generatePassword(){

    characterAmt(lengthChoice);

    for (let i = 0; i < lengthChoice; i++) {
      tempPW.push(RNG(userData))
    }
    console.log(tempPW);
    return tempPW.join('');
  }

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(document)
