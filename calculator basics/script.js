let num1 = 8
let num2 = 32

document.getElementById("num-e1").textContent = num1
document.getElementById("num-e2").textContent = num2

const resultDisplay = document.getElementById("sum-el");

function add() {
    let sum = num1 + num2;
    resultDisplay.textContent = "Result: " + sum;
}
function subtract() {
    let sum = num1 - num2;
    resultDisplay.textContent = "Result: " + sum;
}
function multiply() {
    let sum = num1 * num2;
    resultDisplay.textContent = "Result: " + sum;
}
function divide() {
    let sum = num1 / num2;
    resultDisplay.textContent = "Result: " + sum;
}

function clearRes() {
    resultDisplay.textContent = "Result: ";
}