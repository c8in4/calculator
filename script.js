let num1 = null;
let num2 = null;
let operatorSign = null;
let result = null;

const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
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

const operatorButtons = [
    plusButton = document.querySelector("#plus"),
    minusButton = document.querySelector("#minus"),
    multiplyButton = document.querySelector("#multiply"),
    divideButton = document.querySelector("#divide")
];

equalsButton.addEventListener("click", () => {
    num2 = +display.textContent.slice(1);
    operate(operatorSign, num1, num2);
    console.log("first number: " + num1 + "\noperator: " + operatorSign +  "\nsecond number: " + num2)
})

numButtons.forEach(button => {
    button.addEventListener("click", (e) => concatChar(e.target.textContent));
});

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
    num1 = null;
    num2 = null;
    result = null;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }

    display.textContent = Math.floor(result * 1000) / 1000;
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