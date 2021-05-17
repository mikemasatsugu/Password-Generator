

// Random character generator functions

function randomLowerCase() {
  const legend = "abcdefghijklmnopqrstuvwxyz"
  return legend[Math.floor(Math.random() * legend.length)]
}

function randomUpperCase() {
  const legend = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return legend[Math.floor(Math.random() * legend.length)]
}

function randomNumber() {
  return String(Math.floor(Math.random()*10))
}

function randomSpecial() {
  const legend = '!@#$%^&*()_+-=[]{};:/",<.>/?'
  return legend[Math.floor(Math.random() * legend.length)]
}



// EVENT LISTENERS

//For displaying password length on page load
window.onload = () => {
  let x = document.getElementById("length").value;
  document.getElementById("length-val").innerText = x;
}

// For displaying password length on input change
document.addEventListener('input', function() {
  let x = document.getElementById("length").value;
  document.getElementById("length-val").innerText = x;
})

// For re-running password generator on input change
document.addEventListener('input', adaptivePasswordGenerator) 

// For re-running every time an option is checked/unchecked
document.getElementById('uppercase').addEventListener('click', adaptivePasswordGenerator)
document.getElementById('lowercase').addEventListener('click', adaptivePasswordGenerator)
document.getElementById('num').addEventListener('click', adaptivePasswordGenerator)
document.getElementById('specials').addEventListener('click', adaptivePasswordGenerator)


// For creating password on btn click
document.getElementById("generate-pass").addEventListener('click', adaptivePasswordGenerator)

// For copying password to clipboard on btn click
document.getElementById("clipboard-btn").addEventListener('click', copyPasswordToClipboard)


// FUNCTIONS


// Values to get by user input
let lengthElement = document.getElementById("length").value;
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numElement = document.getElementById('num');
const specialsElement = document.getElementById('specials');

// Main function that generates passwords based on user input parameters
function adaptivePasswordGenerator() {
  let passLength = document.getElementById("length").value;
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

  if (hasLowerCase === false && hasUpperCase === false && hasNum === false && hasSpecials === false) {return document.getElementById("generated-pass").innerHTML = "Please select at least one parameter below."}
  
  for (let i = 0 ; i < passLength - 1 + 1 ; i++) {
    let char = functions[Math.floor(Math.random()*functions.length)]
    passArray.push(char());
    
  } 
  // console.log(passArray.length)
  if (passArray.length === 0) {return document.getElementById("generated-pass").innerHTML = "No password to return: Length set to 0."}
  return document.getElementById("generated-pass").innerText = passArray.join('');
}


// To copy the generated password to the clipboard
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




// // TESTS

// function testPassLength() {
//   let count = 0;
//   let i = 0;
//   while (i < 100) {
//     if (adaptivePasswordGenerator().length === 30) {
//       count++
//     }
//     i++
//   } console.log(`Correct answers: ${count} / 100`)
// }

// testPassLength()