// DOM Elements checkmarks
// this is where the user choose which items they want to 
// include in password and sets the number of characters in password

//TODO -- CHANGE VAR NAMES
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

// Lets have global variables that are the basis for the
// final password
  
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");


// Event Listener
// Where I actually obtain the user data 
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

// Generate Password Function 
// I know have all the user input data - let's create the password!
function generatePassword(lower, upper, number, symbol, length) {
  
    var allChars = [];
    var resultPass = "";

    if(length <8 || length > 128){
        alert("It is recommended to have a password between 8 and 128 characters long! Please try again.");
        return resultPass;
    }


        // Create all Chars possibilities
    if (lower == 1) {

            Array.prototype.push.apply(allChars, abcLowerArr);
    }

    if (upper == 1) {

        Array.prototype.push.apply(allChars, abcUpperArr);
    }

    if (number == 1) {

        Array.prototype.push.apply(allChars, numArr);
    }

    if (symbol == 1) {
        Array.prototype.push.apply(allChars, symArr);
    }


    for(var i=0; i<length; i++)  {
        
            var random = Math.floor(Math.random()*allChars.length);
            // alert("random num = " + random);
            resultPass += allChars[random];
            // alert("resultpass = " + resultPass);
    }

    return resultPass;


}
