// DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Event Listener
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
function generatePassword(lower, upper, number, symbol, length) {
    // 1. password var
    // 2. remove unchecked boxes
    // 3. loop over length
    // 4. call generator for each class
    // 5. add final password to the results box

let generatedPassword = '';
console.log("generatedPassword = " , generatedPassword);

console.log("LENGTH ", length);


const typesCount =  lower  + upper  + number + symbol;

 console.log('typesCount: ', typesCount);

const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
(
    item => Object.values(item)[0]
);

 console.log('typesArr: ', typesArr); 

if(typesCount === 0) {
    return '';
    }

console.log("generatedPassword = " , generatedPassword);


for(let i=0; i < length; i += typesCount) {
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        // console.log('funcName: ', funcName);
        console.log("random func = " , randomFunc[funcName]);

        generatedPassword += randomFunc[funcName]();
        });
    }


const finalPassword = generatedPassword.slice(0, length);

return finalPassword;

}

// Generator Functions to allow user to choose different options

function getRandomLower(){
    console.log("IN getRandomLower");

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]==,./<>';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


