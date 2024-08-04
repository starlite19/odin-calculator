function add(n1, n2) {
    return parseInt(n1) + parseInt(n2);
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
            console.log('add');
            return add(n1, n2);
        case '-':
            console.log('subtract');
            return subtract(n1, n2);
        case '*':
            console.log('multiply');
            return multiply(n1, n2);
        case '/':
            console.log('divide');
            return divide(n1, n2);
        default:
            return 'ERROR';
    }
}

let n1;
let operator;
let n2;
const displayValue = document.querySelector("#num-display");
let replace = true;

function populateDisplay(val) {
    val = Number(val);
    if (!Number.isInteger(val)) {
        val = val.toPrecision(12);
    }
    if (replace) {
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
    result = operate(n1, operator, n2);
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
}

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((b) => b.addEventListener('click', pressNumber));

const operatorButtons = document.querySelectorAll(".op");
operatorButtons.forEach((b) => b.addEventListener('click', pressOperator));

const equalsKey = document.querySelector("#equal");
equalsKey.addEventListener('click', pressEqual);

const clearKey = document.querySelector("#clear");
clearKey.addEventListener('click', clear);