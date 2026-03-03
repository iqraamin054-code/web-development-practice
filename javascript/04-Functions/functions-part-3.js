// Complete Function Part 2: parameters, return values, and function reusability

/* Task 1 
Create a function expression (
A function is stored inside a variable
The function does not need a name
The variable name is used to call it
)
that takes a user’s name
 and returns a greeting message. */


const greetUser = function(userName){
    if (userName) {
        userName = userName.trim();
        if (userName) {
            return `Welcome ${userName} to the function world`;
        }
        return "You did not enter your name";
    }
    return "You did not enter your name";  
}

console.log(greetUser(prompt("Enter your name:"))); 


// Task 2 Create an arrow function that takes two numbers and returns their subtraction.

const sub = (num1, num2) => {

    if (!isNaN(num1) && !isNaN(num2) ) {
       return num1 - num2;
    }

    return "you did not enter a valid number";
}

let value1 = prompt("Enter first number:");
let value2 = prompt("Enter second number:");

if ((value1 === null  || value1.trim() === "")||(value2 === null  || value2.trim() === "")) {
        console.log("you did not enter anything");
    }else{
        let num1 = Number(value1);
        let num2 = Number(value2);
        console.log(sub(num1,num2));
    } 
    
    

// Task 3 Create an arrow function that takes one number and returns whether it is positive, negative, or zero.

const checkNumber = (num) => {
    
     if (!isNaN(num) ){ // true
        if(num > 0){
            return `${num} is positive`;
        }else if (num < 0) {
            return `${num} is nrgative`;
        }else{
            return `${num} is zero`;
        }
    }
    return "you did not enter a valid number"; 
        
    }


let value = prompt("Enter a number");
if (value === null || value.trim() === "") {
    console.log("You did not enter anything");
} else {
    let num = Number(value);
    console.log(checkNumber(num));
} 


// Task 4 Create a function expression that takes a string and returns its length.

const stringLength = function (string) {
    if (string) {
        string =  string.trim();
        if (string) {
            return string.length
        }
       return "You did not enter anything";
    }
    return "You did not enter anything";
}

console.log (stringLength(prompt("Enter a string:"))) 

// Task 5 Create an arrow function that takes a price and a discount percentage and return the final price.

const finalPrice = (price, discountPercentage) => {
    if (isNaN(price) || isNaN(discountPercentage)) {
        return "Invalid input";
    }

    if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
        return "Invalid price or discount range";
    }

    let discountAmount = (price * discountPercentage) / 100;
    let result = price - discountAmount;

    return `Final price after ${discountPercentage}% discount is ${result}`;
};

let priceRange = prompt("Enter the price");
let discount = prompt("Enter the discount percentage");
if((priceRange === null || priceRange.trim() === "")||(discount === null || discount.trim() === "")){
    console.log("You did not enter anything");
    }else{
        let price = Number(priceRange);
        let discountPercentage = Number(discount);
        console.log(finalPrice(price,discountPercentage));
    };



// Task 6 Create a function that demonstrates local scope by declaring a variable inside the function and using it in the return message.

const localScope = () => {
    let x = 10;
    let y = 50;
    let sum = x + y;

    return `Inside function: x = ${x}, y = ${y}, sum = ${sum}`;
}

console.log(localScope());




// Task 7 Create a function that call another arrow function and uses its returned value in a sentence.

const callFunction = () => {
    return greetUser(userName)
}

console.log (callFunction()); 