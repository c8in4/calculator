let num1 = null;
let num2 = null;
let operatorSign = null;
let result = null;

const display = document.querySelector("#display");
const displayContent = display.textContent;
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

    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {

    });
});

clearButton.addEventListener("click", () => {

});


function getNum() {

}

function concatChar(char) {
    displayContent += char;
}

function clearDisplay() {
    displayContent = "";
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

    displayContent = Math.floor(result * 1000) / 1000;
}