// sets default current value before calculation
let currentValue = 0;

// calls display number as string
const displayText = document.querySelector('.display-text');

// store display value as integer
let displayValue = 0;

// store operation performed between currentValue and operantValue
let operationType = '';

const clear = document.querySelector('.clear');
const back = document.querySelector('.back');

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equal');

zero.addEventListener('click', () => {
  inputNumber(zero);
  console.log(currentValue);
})


one.addEventListener('click', function() {
  inputNumber(one);
  console.log(currentValue);
});

two.addEventListener('click', function() {
  inputNumber(two);
  console.log(currentValue);
});

three.addEventListener('click', function() {
  inputNumber(three);
  console.log(currentValue);
});

four.addEventListener('click', function() {
  inputNumber(four);
  console.log(currentValue);
});

five.addEventListener('click', function() {
  inputNumber(five);
  console.log(currentValue);
});

six.addEventListener('click', function() {
  inputNumber(six);
  console.log(currentValue);
});

seven.addEventListener('click', function() {
  inputNumber(seven);
  console.log(currentValue);
});

eight.addEventListener('click', function() {
  inputNumber(eight);
  console.log(currentValue);
});

nine.addEventListener('click', function() {
  inputNumber(nine);
  console.log(currentValue);
});


plus.addEventListener('click', function() {
  // set operation type
  operationType = plus.innerText;
  operationPerformed(operationType);
  console.log(`displayValue: ${displayValue}`);
  console.log(`currentValue: ${currentValue}`);
  console.log(`operationType: ${operationType}`);
});

multiply.addEventListener('click', function() {
  // set operation type
  operationType = multiply.innerText;
  operationPerformed(operationType);
  console.log(`displayValue: ${displayValue}`);
  console.log(`currentValue: ${currentValue}`);
  console.log(`operationType: ${operationType}`);
});

equal.addEventListener('click', function() {
  displayText.innerText = operationPerformed(operationType);
  // reset operationType to prevent repeat calculation on multiple clicks
  operationType = '';
  console.log(`displayValue: ${displayValue}`);
  console.log(`currentValue: ${currentValue}`);
  console.log(`operationType: ${operationType}`);
});

clear.addEventListener('click', function() {
  displayText.innerText = 0;
  currentValue = 0;
})

function inputNumber(num) {
  // set inputValue to button number
  let inputValue = parseInt(num.innerText);
  if (displayText.innerText === '0') {
    displayValue = inputValue;
    displayText.innerText = displayValue;
    console.log('replaced!');
    console.log(`displayValue: ${displayValue}`);
    console.log(`currentValue: ${currentValue}`);
    console.log(`operationType: ${operationType}`);
  } else {
    // append num to end of displayed text
    displayText.innerText += inputValue;
    // change number value of displayed text
    displayValue = parseInt(displayText.innerText);
    console.log('appended!');
    console.log(`displayValue: ${displayValue}`);
    console.log(`currentValue: ${currentValue}`);
    console.log(`operationType: ${operationType}`);
  }
}

// detects operation type + uses it after equal sign is clicked
function operationPerformed(operation) {
  if (currentValue === 0){
    currentValue = displayValue;
    displayText.innerText = 0;
  } else {
    switch (operation) {
      case '+':
        currentValue += displayValue;
        console.log(`kanya: ${currentValue}`);
        displayText.innerText = 0;
        console.log(`plus`);
        break;
      case '-':
        currentValue -= displayValue;
        displayText.innerText = 0;
        break;
      case '×':
        currentValue *= displayValue;
        displayText.innerText = 0;
        break;
      case '÷':
        currentValue /= displayValue;
        displayText.innerText = 0;
        break;
    }
  }
  return currentValue;
}

