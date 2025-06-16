// Callback functions
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
    if (b === 0) {
        return "Lama qaybin karo eber!";
    }
    return a / b;
}

// Function weyn: calculate (a, b, callback)
function calculate(a, b, operationCallback) {
    const result = operationCallback(a, b);
    console.log(`Natiijada waa: ${result}`);
}

// Tijaabooyin (calling the function with different callbacks)
calculate(12, 4, add);        // Natiijada waa: 16
calculate(12, 4, subtract);   // Natiijada waa: 8
calculate(12, 4, multiply);   // Natiijada waa: 48
calculate(12, 4, divide);     // Natiijada waa: 3
