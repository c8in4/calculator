let firstNum = 0
let secondNum, operator

function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }

function operate() {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum)
        case '-':
            return subtract(firstNum, secondNum)
        case '*':
            return multiply(firstNum, secondNum)
        case '/':
            return divide(firstNum, secondNum)
    }
}

const calculatorDisplay = document.querySelector('#calculatorDisplay')

const calculatorButtons = document.querySelector('#calculatorButtons')
const buttonsArray = [
    'C', 'DEL', '/',
    7, 8, 9, '*',
    4, 5, 6, '-',
    1, 2, 3, '+',
    0, '.', '='
]

buttonsArray.forEach(createButton)

function createButton(text) {
    const button = document.createElement('button')
    button.innerText = text
    button.dataset.value = text
    calculatorButtons.appendChild(button)
}

