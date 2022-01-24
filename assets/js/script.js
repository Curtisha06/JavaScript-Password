// Challenge 3. JavaScript Challenge: Password Generator

//function to generate a random numeric value 
var generateBtn = document.querySelector("#generate");
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

// Write password to the #password input
  function randomPassword() {
  var password = '';
  var passwordText = document.querySelector("#password");
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (i=1;i<8;i++) {
   var c = Math.floor(Math.random()*chars.length + 128);
    password += chars.charAt(c)
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click");
document.getElementById(".btn").addEventListener("click",displayDate);
function displayDate () {
  var dt = new Date();
  document.getElementById('date-time').innerHTML= Date() ;
}






