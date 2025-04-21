// sets default current value before calculation
let currentValue = 0;

// calls display number as string
const displayText = document.querySelector('.display-text');

// sets default temporary value for display as integer (currentValue cannot rely on displayText.innerText)
let displayValue = 0;

const clear = document.querySelector('.clear');
const back = document.querySelector('.back');

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

function inputNumber(num) {
  let inputValue = parseInt(num.innerText);
  if (displayValue === 0) {
    displayValue = inputValue;
    displayText.innerText = inputValue;
    console.log('replaced!');
  } else {
    // append num to end of displayed text
    displayText.innerText += inputValue;
    // change number value of displayed text
    displayValue = parseInt(displayText.innerText);
    console.log('appended!');
  }
}


