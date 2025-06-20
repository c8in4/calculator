let firstNum, secondNum, operator

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(num1, num2, op) {
    switch (op) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    }
}

const calculatorDisplay = document.querySelector('#calculatorDisplay')

const calculatorButtons = document.querySelector('#calculatorButtons')
const buttonsArray = [
    'C', '%', '/',
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

