/*
TODO:
 - Create functions to generate random character (string) for each character type (uppercaseletter, lowercaseletter, number, special character)
 - Create function that creates array of random characters of a given length
 - Use event listener to get desired array length from page
 - Use event listener checkboxes to determine what types of characters password should include
*/


// Values to get by user input
let lengthElement = document.getElementById("length").value;
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numElement = document.getElementById('num');
const specialsElement = document.getElementById('specials');
const generatePassElement = document.getElementById('generatePass');
const copyToClipElement = document.getElementById('copyToClip');




// Random character generator functions
function randomLowerCase() {
  const legend = "abcdefghijklmnopqrstuvwxyz"
  return legend[Math.floor(Math.random() * legend.length)]
}
// console.log(randomLowerCase())

function randomUpperCase() {
  const legend = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return legend[Math.floor(Math.random() * legend.length)]
}
// console.log(randomUpperCase())

function randomNumber() {
  return String(Math.floor(Math.random()*10))
}

function randomSpecial() {
  const legend = '!@#$%^&*()_+-=[]{};:\'",<.>/?\\'
  return legend[Math.floor(Math.random() * legend.length)]
}


// EVENT LISTENERS

// For displaying password length 
document.addEventListener('mousemove', function() {
  let x = document.getElementById("length").value;
  document.getElementById("length-val").innerHTML = x;
})



// For creating password on btn click
document.getElementById("generate-pass").addEventListener('click', adaptivePasswordGenerator)

// For copying password to clipboard on btn click
document.getElementById("clipboard-btn").addEventListener('click', copyPasswordToClipboard)


// FUNCTIONS

function adaptivePasswordGenerator() {
  let passLength = parseInt(document.getElementById("length").value);
  const hasLowerCase = lowercaseElement.checked;
  const hasUpperCase = uppercaseElement.checked;
  const hasNum = numElement.checked;
  const hasSpecials = specialsElement.checked;
  
  const functions = [];
  const passArray = [];
  if (hasLowerCase === true) {functions.push(randomLowerCase)}
  if (hasUpperCase === true) {functions.push(randomUpperCase)}
  if (hasNum === true) {functions.push(randomNumber)}
  if (hasSpecials === true) {functions.push(randomSpecial)}
  
  for (let i = 0 ; i < passLength - 1 + 1 ; i++) {
    let char = functions[Math.floor(Math.random()*functions.length)]
    passArray.push(char());

  } return document.getElementById("generated-pass").innerHTML = passArray.join('');
}



function copyPasswordToClipboard() {
  const textToCopy = document.getElementById('generated-pass').innerText;

  let myTemporaryInputElement = document.createElement("input");
    myTemporaryInputElement.type = "text";
    myTemporaryInputElement.value = textToCopy;

  document.body.appendChild(myTemporaryInputElement)

  myTemporaryInputElement.select();
  document.execCommand("Copy");

  document.body.removeChild(myTemporaryInputElement);
  alert("Password has been copied to clipboard.")
}