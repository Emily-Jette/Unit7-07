// Setting up variables
let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0

document.getElementById('enter').addEventListener('click', calculator)

function calculator () {
  // restting so multiplication is correct
  answer = 0
  // getting values from text box and convert to integer
  firstNum = document.getElementById('num1').value
  firstNum = parseInt(firstNum)
  secondNum = document.getElementById('num2').value
  secondNum = parseInt(secondNum)
  // uses for loop to multiply
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  document.getElementById('product').innerHTML = answer
}
