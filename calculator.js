function add(n1, n2) {
    return n1 + n2;
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

function operate(op, n1, n2) {
    switch (op) {
        case '+':
            add(n1, n2);
            break;
        case '-':
            subtract(n1, n2);
            break;
        case '*':
            multiply(n1, n2);
            break;
        case '/':
            divide(n1, n2);
            break;
    }
}

let n1;
let operator;
let n2;