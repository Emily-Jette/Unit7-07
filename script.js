// Setting up variables
let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0
let negative = false

document.getElementById('enter').addEventListener('click', calculator)

function calculator () {
  // restting so multiplication is correct
  answer = 0
  negative = false
  // getting values from text box and convert to integer
  firstNum = document.getElementById('num1').value
  firstNum = parseInt(firstNum)
  secondNum = document.getElementById('num2').value
  secondNum = parseInt(secondNum)
  // makes negative numbers into positive 
  if (firstNum < 0) { 
    negative = !negative
    firstNum = Math.abs(firstNum)
  }
  if (secondNum < 0) {
    negative = !negative
    secondNum = Math.abs(secondNum)
  }
  // uses for loop to multiply
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  if(negative) {
    answer = 0 - answer
  }
  document.getElementById('product').innerHTML = answer
}
