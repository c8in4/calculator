let num1 = null;
let num2 = null;
let operatorSign = null;
let numbersToDisplay = "";

const display = document.querySelector("#display");

const clearButton = document.querySelector("#clear");

const numButtons = [
    zeroButton = document.querySelector("#zero"),
    oneButton = document.querySelector("#one"),
    twoButton = document.querySelector("#two"),
    threeButton = document.querySelector("#three"),
    fourButton = document.querySelector("#four"),
    fiveButton = document.querySelector("#five"),
    sixButton = document.querySelector("#six"),
    sevenButton = document.querySelector("#seven"),
    eightButton = document.querySelector("#eight"),
    nineButton = document.querySelector("#nine")
];

numButtons.forEach(button => {
    button.addEventListener("click", (e) => concatChar(e.target.textContent));
});

const operatorButtons = [
    plusButton = document.querySelector("#plus"),
    minusButton = document.querySelector("#minus"),
    multiplyButton = document.querySelector("#multiply"),
    divideButton = document.querySelector("#divide")
];

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (+display.textContent) {
            num1 = +display.textContent;
        }
        operatorSign = e.target.textContent;
        display.textContent = "";
        concatChar(e.target.textContent);
    });
});

clearButton.addEventListener("click", clearDisplay)

function concatChar(char) {
    display.textContent += char;
}


function clearDisplay() {
    display.textContent = "";
    operatorSign = null;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}