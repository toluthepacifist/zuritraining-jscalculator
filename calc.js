const operator = prompt('Enter operator to perform (+,-,*,/):');
var number1 = prompt("Enter your first number:");
var number2 = prompt("Enter your second number: " +number1 +operator);
let result;

if (operator == "+"){
    result = number1 + number2;
}
else if (operator == "-"){
    result = number1 - number2;
}
else if (operator == "*"){
    result = number1 * number2;
}
else if (operator == "/"){
    result = number1 / number2
}

alert("The result is: " +result)