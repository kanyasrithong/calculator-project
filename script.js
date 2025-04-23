// Define global variables
let firstNum = 0;
let secondNum = 0;
let operator = '';

// Grab the elements from the DOM
const displayText = document.querySelector('.display-text');

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

// Add event listeners
zero.addEventListener('click', () => {
  inputNumber(zero);
})

one.addEventListener('click', function() {
  inputNumber(one);
});

two.addEventListener('click', function() {
  inputNumber(two);
});

three.addEventListener('click', function() {
  inputNumber(three);
});

four.addEventListener('click', function() {
  inputNumber(four);
});

five.addEventListener('click', function() {
  inputNumber(five);
});

six.addEventListener('click', function() {
  inputNumber(six);
});

seven.addEventListener('click', function() {
  inputNumber(seven);
});

eight.addEventListener('click', function() {
  inputNumber(eight);
});

nine.addEventListener('click', function() {
  inputNumber(nine);
});

plus.addEventListener('click', function() {
  operator = plus.innerText;
});

minus.addEventListener('click', function() {
  operator = minus.innerText;
});

multiply.addEventListener('click', function() {
  operator = multiply.innerText;
});

divide.addEventListener('click', function() {
  operator = divide.innerText;
});

equal.addEventListener('click', function() {
  // If you don't have an operation type or first number, the equal button should do nothing
  if (!operator || !firstNum) {
    return;
  }

  displayText.innerText = calculate();
  // Assign the first number to the result of operationPerformed
  // so that you can continue calculating with the result

  // Reset the operation type and second number
  // This is important because when you have the first number, on the next click, you can append numbers to the first one
  firstNum = displayText.innerText;
  secondNum = 0;
  operator = '';
});

clear.addEventListener('click', function() {
  displayText.innerText = 0;
  firstNum = 0;
  secondNum = 0;
})

// Function definitions
function inputNumber(input) {
  const inputNumber = input.innerText;

  // If you don't have an operation type, it means you are entering the first number
  // Otherwise, you're entering the second number
  if (!operator) {
    firstNum += inputNumber;
    displayText.innerText = parseInt(firstNum);
  } else {
    secondNum += inputNumber;
    displayText.innerText = parseInt(secondNum);
  }
}

function calculate() {
  let firstNumInt = parseInt(firstNum);
  let secondNumInt = parseInt(secondNum);
  let result;

  switch (operator) {
    case '+':
      result = firstNumInt + secondNumInt;
      break;
    case '-':
      result = firstNumInt - secondNumInt;
      break;
    case '×':
      result = firstNumInt * secondNumInt;
      break;
    case '÷':
      result = firstNumInt / secondNumInt;
      break;
  }

  return result;
}
