// PROJECT == MINI CALCULATOR USING FUNCTION AND CALLBACK PATTERN

const calculator = (num1, num2, operation) => {
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input";
    }
    return operation(num1, num2); 

}

  const add = (num1,num2) => {
     return num1 + num2;
}
const subtract = (num1,num2) => {
     return num1 - num2;
}
const multiply = (num1,num2) => {
     return num1 * num2;
}
const divide = (num1,num2) => {
    if(num2 === 0){
        return "cannot divide by zero";
    }
    return num1 / num2;
} 

    
let value1 = prompt("Enter a number to perform calculation");
let value2 = prompt("Enter a second  number to perform calculation");
let operator = prompt("Enter operation (+, -, *, /):");

if((value1 === null || value1.trim() === "") ||
   (value2 === null || value2.trim() === "") ||
   (operator === null || operator.trim() === "")){
        console.log("You did not enter anything");
   }else{
    let num1 = Number(value1);
    let num2 = Number(value2);
    let selectOperation;

    if (operator === "+") {
        selectOperation = add;   
    }else if (operator === "-") {
        selectOperation = subtract;         
    } else if (operator === "*") {
        selectOperation = multiply;         
    }else if (operator === "/") {
        selectOperation = divide;         
    }
     if (!selectOperation) {
      console.log("Invalid operator");
   } else {
      console.log(calculator(num1, num2, selectOperation));
   }
}
    
