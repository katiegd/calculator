// Selecting buttons and divs for manipulation
const numberButton = document.querySelectorAll(".number");
const operationButton = document.querySelectorAll(".operation");
const allClearButton = document.querySelector(".all-clear");
const prevOperandTextElement = document.querySelector(".prev-operand");
const currOperandTextElement = document.querySelector(".curr-operand");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equals");
const tipButton = document.querySelector(".tip");

// Setting default values for prevOperand, currOperand, and the operator
let prevOperand = '';
let currOperand = '';
let operator = '';

// Event listeners for buttons
numberButton.forEach(button => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

allClearButton.addEventListener('click', () => {
    clearDisplay();
});

equalsButton.addEventListener('click', () => {
    runCalculation(operator);
})

operationButton.forEach(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.textContent;
        handleOperator(operator);
    });
});

deleteButton.addEventListener('click', () => {
    deleteNumber();
})

tipButton.addEventListener('click', () => {
    justTheTip(prevOperand);
});

// Functions
// Handles the number passed in from the button and appends to the current operator display
function handleNumber(number) {
    if(currOperand.length <= 10) {
    currOperand += number;
    currOperandTextElement.textContent = currOperand;
    }
    if(number === "." && currOperand.includes(".")) return;
};

// Handles the operator passed in from the button and appends to the previous operator display
function handleOperator(operator) {
    prevOperandTextElement.textContent = currOperand + " " + operator;
    currOperandTextElement.textContent = '';
    prevOperand = currOperand;
    currOperand = '';
};

// Clears the display to zero
function clearDisplay() {
    prevOperand = '';
    currOperand = '';
    operator = '';
    currOperandTextElement.textContent = '0';
    prevOperandTextElement.textContent = '';
};

// Runs the calculations!
function runCalculation(operator) {
    prevOperand = Number(prevOperand);
    currOperand = Number(currOperand);
    if(operator === '+') {
        result = prevOperand + currOperand;
    } else if(operator === '-') {
        result = prevOperand - currOperand;
    } else if(operator === '*') {
        result = prevOperand * currOperand;
    } else if(operator === '÷') {
        result = prevOperand / currOperand;
    }
        prevOperandTextElement.textContent = prevOperand + " " + operator + " " + currOperand;
        currOperandTextElement.textContent = roundNumber(result);
    currOperand = result;
};

// Round number calculation to prevent massive decimals
function roundNumber(num) {
    return Math.round(num * 10000000) / 10000000;
}

function roundTip(num) {
    return Math.round(num * 100) / 100;
}

// Delete number function
function deleteNumber() {
    currOperand = currOperand.toString().slice(0, -1);
    currOperandTextElement.textContent = currOperand;
}

// Tipping 20% function
function justTheTip() {
    prevOperand = Number(currOperand);
    result = prevOperand * 1.2;
    prevOperandTextElement.textContent = currOperand + " + " + roundTip((currOperand) * 0.2);
    currOperandTextElement.textContent = roundTip(result);
}