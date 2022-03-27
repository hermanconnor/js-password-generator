const result = document.getElementById('result');
const copyBtn = document.getElementById('copy');
const generateBtn = document.getElementById('generate');

// GENERATE RANDOM NUMBER
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Get Random Lowercase
const getRandomLower = () => {
  const num = generateRandomNumber(97, 122);
  return String.fromCharCode(num);
};

// Get Random Uppercase
const getRandomUpper = () => {
  return getRandomLower().toUpperCase();
};

// Get Random Number
const getRandomNumber = () => {
  const randNum = generateRandomNumber(48, 57);
  return String.fromCharCode(randNum);
};

// Get Random Symbols
const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[generateRandomNumber(0, 19)];
};

// Get Password Length Value
const getPasswordLength = () => {
  const lengthEl = document.getElementById('length');
  const length = +lengthEl.value;

  return length;
};

// Get Checkbox Values
const getCheckboxValues = () => {
  const uppercase = document.getElementById('uppercase');
  const lowercase = document.getElementById('lowercase');
  const numbers = document.getElementById('numbers');
  const symbols = document.getElementById('symbols');

  const hasUpper = uppercase.checked;
  const hasLower = lowercase.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;

  const checkedValues = [];

  if (hasUpper) {
    checkedValues.push('uppercase');
  }

  if (hasLower) {
    checkedValues.push('lowercase');
  }

  if (hasNumbers) {
    checkedValues.push('numbers');
  }

  if (hasSymbols) {
    checkedValues.push('symbols');
  }

  return checkedValues;
};

// Generate Random String Of Characters
const getRandomString = (arr, rc = '') => {
  const pwdLength = getPasswordLength();
  let randomString = rc;

  arr.forEach((item) => {
    if (item === 'uppercase') {
      const char = getRandomUpper();
      randomString += char;
    } else if (item === 'lowercase') {
      const char = getRandomLower();
      randomString += char;
    } else if (item === 'numbers') {
      const char = getRandomNumber();
      randomString += char;
    } else {
      const char = getRandomSymbol();
      randomString += char;
    }
  });

  if (randomString.length < pwdLength) {
    return getRandomString(arr, randomString);
  } else {
    return randomString;
  }
};

// GENERATE PASSWORD
const generatePassword = () => {
  const checkBoxValues = getCheckboxValues();
  const pwd = getRandomString(checkBoxValues);
  result.innerText = pwd;
};

// ADD EVENT LISTENERS
generateBtn.addEventListener('click', generatePassword);
