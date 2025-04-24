// Define global variables
let firstNum = 0;
let secondNum = [];
let operator = [];

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
    console.log(`operator: ${operator}`);
    console.log(`firstNum: ${firstNum}`);
    console.log(`secondNum: ${secondNum}`);
  });
});

// Add event listeners for operation buttons
const opButtons = document.querySelectorAll('button.op');
opButtons.forEach(opButton => {
  opButton.addEventListener('click', () => {
    console.log(`operator.length: ${operator.length}`);
    console.log(`secondNum.length: ${secondNum.length}`);
    // Ensures number of operators cannot exceed one more than number of second numbers
    if (operator.length > secondNum.length) {
      return;
    }
    displayText.innerText = 0;
    // Adds new operator to operator list
    operator.push(opButton.innerText);
    console.log(`operator: ${operator}`);
  })
})

equal.addEventListener('click', function() {
  // If you don't have an operation type or first number, the equal button should do nothing
  if (operator.length === 0 || !firstNum) {
    return;
  }
  displayText.innerText = calculate();
  // Assign the first number to the result of calculate
  // so that you can continue calculating with the result

  // Reset the operation type and second number
  // This is important because when you have the first number, on the next click, you can append numbers to the first one
  firstNum = displayText.innerText;
  secondNum = [];
  operator = [];
});

clear.addEventListener('click', function() {
  displayText.innerText = 0;
  firstNum = 0;
  secondNum = [];
  operator = [];
})

// Function definitions
function inputNumber(input) {
  const inputNumber = input.innerText;
  // If you don't have any operations, it means you are entering the first number
  // If number of operations exceeds second numbers, add new second number to list
  // Otherwise, you're entering the second number
  if (operator.length === 0) {
    firstNum += inputNumber;
    displayText.innerText = parseInt(firstNum);
  } else if (operator.length > secondNum.length) {
    secondNum.push(inputNumber);
    displayText.innerText = parseInt(inputNumber);
  } else {
    secondNum[secondNum.length - 1] += inputNumber;
    displayText.innerText = parseInt(secondNum[secondNum.length - 1]);
  }
}

function calculate() {
  let firstNumInt = parseInt(firstNum);
  let result;
  // Performs all operations one by one
  for (let i = 0; i < secondNum.length; i++) {
    // Go to i number in second number list
    let secondNumInt = parseInt(secondNum[i]);
    // Identifies i operator in operator list
    // Performs operator with "i" operation and "i" second number
    // Assigns result to first number for future calculation
    if (operator[i] === '+') {
      result = firstNumInt + secondNumInt;
      firstNumInt = result;
    } else if (operator[i] === '-') {
      result = firstNumInt - secondNumInt;
      firstNumInt = result;
    } else if (operator[i] === '×') {
      result = firstNumInt * secondNumInt;
      firstNumInt = result;
    } else if (operator[i] === '÷') {
      result = firstNumInt / secondNumInt;
      firstNumInt = result;
    } else {
      return;
    }
  }
  console.log(`Result: ${result}`);
  return result;
}



