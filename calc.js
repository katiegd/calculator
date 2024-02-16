const inputNum = document.querySelector('#num').textContent;
let calcDisplay = document.querySelector('#calcDisplay').value;
let buttonNum = inputNum;

function updateDisplay(inputNum) {
    document.querySelector('#calcDisplay').value = `${inputNum}`;
}

function addition(num1, num2) {
    
}

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(array) {
    return array.reduce((previous, current) => previous + current, 0);
}

const multiply = function(array) {
    return array.reduce((previous, current) => previous * current);
};

const power = function(a, b) {
    return Math.pow(a, b);
};

const factorial = function(n) {
    if(n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
        product *= i;
    } return product;
};