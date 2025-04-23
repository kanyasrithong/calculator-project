// Define global variables
let firstNum = 0;
let secondNum = 0;
let operator = '';

// Grab the elements from the DOM
const displayText = document.querySelector('.display-text');

const clear = document.querySelector('.clear');
const back = document.querySelector('.back');
const equal = document.querySelector('.equal');

// Add event listeners for number buttons
const numButtons = document.querySelectorAll('button.number');
numButtons.forEach(numButton => {
  numButton.addEventListener('click', () => {
    inputNumber(numButton);
  });
});

// Add event listeners for operation buttons
const opButtons = document.querySelectorAll('button.op');
opButtons.forEach(opButton => {
  opButton.addEventListener('click', () => {
    operator = opButton.innerText;
    console.log(opButton.innerText);
  })
})

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
