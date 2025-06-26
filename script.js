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
            if (secondNum == 0) {
                alert('You can not divide by 0.')
                return
            }
            return divide(firstNum, secondNum)
    }
}

const calculatorButtons = document.querySelector('#calculatorButtons')
const buttonsArray = [
    'AC', 'DEL', '/',
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

const calculatorDisplay = document.querySelector('#calculatorDisplay')

calculatorButtons.addEventListener('click', event => {
    const buttonPressed = event.target.dataset.value

    if (/\d/.test(buttonPressed)) {
        numberInputHandler(buttonPressed)
    } else if (buttonPressed == 'AC') {
        resetCalculator()
    } else if (buttonPressed == 'DEL') {
        removeLastNumber()
    } else {

    }
})

function numberInputHandler(number) {
    concatDisplayContent(number)
}

function concatDisplayContent(content) {
    calculatorDisplay.innerText += content
}

function clearDisplay() {
    calculatorDisplay.innerText = ''
}

function resetCalculator() {
    clearDisplay()
    firstNum = 0
    secondNum = undefined
    operator = undefined
}

function removeLastNumber() {
    const displayContent = calculatorDisplay.innerText
    clearDisplay()
    concatDisplayContent(displayContent.split('').slice(0, -1).join(''))
}