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

})

numButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        concatChar(e.target.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
       if (!num1) num1 = +display.textContent;
       operatorSign = e.target.textContent;
    });
});

clearButton.addEventListener("click",() => {
    clearDisplay();
    resetValues();
});


function concatChar(char) {
    display.textContent += char;
}

function clearDisplay() {
    display.textContent = "";
}

function resetValues() {
    operatorSign = null;
    num1 = null;
    num2 = null;
    result = null;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                alert("You can not divide by 0!");
                return;
            };
            result = a / b;
            break;
    }

    display.textContent = Math.floor(result * 1000) / 1000;
}