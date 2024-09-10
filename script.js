let num1 = null;
let num2 = null;
let operatorSign = null;
let result = null;

const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
clearButton.style.color = "red";
const equalsButton = document.querySelector("#equals");
equalsButton.style.background = "green";
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
operatorButtons.forEach(button => {
    button.style.color = "green";
});


equalsButton.addEventListener("click", () => {
    if (num1 && !num2) num2 = getNum();
    calculate();
    displayResult();
    resetValues();
})

numButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (display.textContent == operatorSign
            || +display.textContent == "0")
            clearDisplay();
        concatChar(e.target.textContent);
    });
});

// TO-FIX: clicking operators button twice assigns operator to num
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (num1 && !num2) {
            num2 = getNum();
            calculate();
            num1 = result;
            num2 = null;
        };
        if (!num1) num1 = getNum();
        getOperator(e);
        clearDisplay();
        display.textContent = operatorSign;
    });
});

clearButton.addEventListener("click", () => {
display.textContent = "0";
    resetValues();
});


function getNum() {
    return +display.textContent;
}

function getOperator(operator) {
    operatorSign = operator.target.textContent;
}

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

function calculate() {
    switch (operatorSign) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("You can not divide by 0!");
                return;
            };
            result = num1 / num2;
            break;
    }
}

function displayResult() {
    display.textContent = Math.floor(result * 1000) / 1000;
}
