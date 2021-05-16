/*
TODO:
 - Create functions to generate random character (string) for each character type (uppercaseletter, lowercaseletter, number, special character)
 - Create function that creates array of random characters of a given length
 - Use event listener to get desired array length from page
 - Use event listener checkboxes to determine what types of characters password should include
*/

// functions for randomLowerCase, randomUpperCase, and randomSpecial will use the String.fromCharCode() method character set.
// https://www.w3schools.com/html/html_charset.asp


// Values to get by user input
const passElement = document.getElementById('pass')
const lengthElement = document.getElementById('length')
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numElement = document.getElementById('num')
const specialsElement = document.getElementById('specials')
const generatePassElement = document.getElementById('generatePass')
const copyToClipElement = document.getElementById('copyToClip')


// Random character generator functions
function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}

function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65)
}

function randomNumber() {
  return String(Math.floor(Math.random()*10))
}

function randomSpecial() {
  const specials = '!@#$%^&*()_+-=[]{};:\'",<.>/?\\'
  return specials[Math.floor(Math.random() * specials.length)]
}

const randomFunctions = {
  lowerCase: randomLowerCase,
  upperCase: randomUpperCase,
  number: randomNumber,
  special: randomSpecial
}


// Event Listeners
generatePassElement.addEventListener('click', () => {
  const length = parseInt(lengthElement.nodeValue);
  const hasLowerCase = lowercaseElement.checked;
  const hasUpperCase = uppercaseElement.checked;
  const hasNum = numElement.checked;
  const hasSpecials = specialsElement.checked;
  
})
