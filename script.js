let firstNum, secondNum, operator

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
        removeLastChar()
    } else if (buttonPressed == '.') {
        decimalPointhandler()
    }
    else if (buttonPressed == '=') {
        equalsInputHandler()
    } else if (/[\-\+\*\/]/.test(buttonPressed)) {
        operatorInputHandler(buttonPressed)
    } else {
        console.log('who knows what happened')
    }
})

function equalsInputHandler() {
    const currentDisplayContent = calculatorDisplay.innerText
    secondNum = parseFloat(currentDisplayContent)
    firstNum = operate()
    if (firstNum || firstNum == '0') replaceDisplayContent(firstNum)
    operator = undefined
}

function decimalPointhandler() {
    if (/[\-\+\*\/]/.test(calculatorDisplay.innerText)) return
    if (!calculatorDisplay.innerText.includes('.')) {
        appendDisplayContent('.')
    }
}

function operatorInputHandler(operatorPressed) {
    const currentDisplayContent = calculatorDisplay.innerText
    if (!currentDisplayContent) return
    if (!operator) {
        firstNum = parseFloat(currentDisplayContent)
        operator = operatorPressed
    } else if (/[\-\+\*\/]/.test(currentDisplayContent)) {
        operator = operatorPressed
    } else {
        secondNum = parseFloat(currentDisplayContent)
        firstNum = operate()
        operator = operatorPressed
    }
    replaceDisplayContent(operatorPressed)
}

function numberInputHandler(number) {
    if (/^[0\-\+\*\/]{1}$/.test(calculatorDisplay.innerText)) {
        clearDisplay()
    }
    appendDisplayContent(number)
}

function appendDisplayContent(content) {
    calculatorDisplay.innerText += content
}

function replaceDisplayContent(content) {
    calculatorDisplay.innerText = content
}

function clearDisplay() {
    calculatorDisplay.innerText = ''
}

function resetCalculator() {
    clearDisplay()
    firstNum = secondNum = operator = undefined
}

function removeLastChar() {
    const currentDisplayContent = calculatorDisplay.innerText
    if (/[\-\+\*\/]/.test(currentDisplayContent)) return
    clearDisplay()
    appendDisplayContent(currentDisplayContent.split('').slice(0, -1).join(''))
}