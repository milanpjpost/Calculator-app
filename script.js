const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            // Append numbers or decimal point
            currentInput += value;
            display.value = currentInput;
        } else if (value === 'C') {
            // Clear display
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            // Perform calculation
            if (previousInput && currentInput && operator) {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                display.value = currentInput;
                previousInput = '';
                operator = '';
            }
        } else {
            // Save operator and previous input
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    });
});
