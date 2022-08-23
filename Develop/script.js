// Assignment code here

var enter; 
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;
var toUpper = function(x){
  return x.toUpperCase();
};

character = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
number = [1,2,3,4,5,6,7,8,9,0];
alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
space = [];

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function() {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  if(!enter) {
    alert("This needs a value");
  } else if (enter <8 || enter >128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");
      
  } else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(number, alpha, alpha2);

  } else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);

  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);

  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);

  } else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
    choices = chracter.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);

  }  else if (confirmLowercase && confirmUppercase) {
    choices = 
  }
}


