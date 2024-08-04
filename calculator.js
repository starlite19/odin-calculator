function add(n1, n2) {
    return Number(n1) + Number(n2);
}

function subtract(n1, n2) {
    return n1 - n2;
}   

function multiply(n1, n2) {
    return n1 * n2;
}   

function divide(n1, n2) {
    return n1 / n2;
}

function operate(n1, op, n2) {
    switch (op) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            return 'ERROR';
    }
}

let n1;
let operator;
let n2;
const displayValue = document.querySelector("#num-display");
const decimalKey = document.querySelector("#decimal");
let replace = true;

function populateDisplay(val) {
    if (replace) {
        val = Number(val);
        if (!Number.isInteger(val)) {
            val = val.toPrecision(12);
            decimalKey.disabled = true;
        } else {
            decimalKey.disabled = false;
        }

        if (val == 'NaN' || val == 'Infinity') {
            val = 'ERROR';
        }
        displayValue.textContent = val;
        replace = false;
    } else {
        displayValue.textContent += val;
    }
    
}

function pressNumber(e) {
    populateDisplay(e.target.textContent);
}

function pressOperator(e) {
    if (n1) {
        n2 = displayValue.textContent;
        const result = operate(n1, operator, n2);
        replace = true;
        populateDisplay(result);
        n1 = result;
    } else {
        n1 = displayValue.textContent;
    }
    operator = e.target.textContent;
    replace = true;
}

function pressEqual() {
    let result;
    n2 = displayValue.textContent;
    if (n1 && operator && n2) {
        result = operate(n1, operator, n2);
    } else {
        result = 'ERROR';
    }

    n1 = undefined;
    n2 = undefined;
    replace = true;
    populateDisplay(result);
    replace = true;
    
}

function clear() {
    displayValue.textContent = 0;
    replace = true;
    n1 = undefined;
    operator = undefined;
    n2 = undefined;
    decimalKey.disabled = false;
}

function changeSign() {
    val = Number(displayValue.textContent);
    val *= -1;
    displayValue.textContent = val;
}

function toPercent() {
    displayValue.textContent = Number(displayValue.textContent) / 100;
}

function addDecimal() {
    replace = false;
    populateDisplay('.');
    decimalKey.disabled = true;
}

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((b) => b.addEventListener('click', pressNumber));

const operatorButtons = document.querySelectorAll(".op");
operatorButtons.forEach((b) => b.addEventListener('click', pressOperator));

const equalsKey = document.querySelector("#equal");
equalsKey.addEventListener('click', pressEqual);

const clearKey = document.querySelector("#clear");
clearKey.addEventListener('click', clear);

const switchSignKey = document.querySelector("#sign");
switchSignKey.addEventListener('click', changeSign);

const percentKey = document.querySelector("#percent");
percentKey.addEventListener('click', toPercent);

decimalKey.addEventListener('click', addDecimal);
