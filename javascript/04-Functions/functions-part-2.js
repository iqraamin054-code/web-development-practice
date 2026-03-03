// JavaScript Functions – Part 2: Parameters, Return Values & Reusability

// 01-Create a function that takes two numbers and returns their multiplication.

function multiplication (num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 * num2;
    }
    return "You did not enter a valid number";
}

let value1 = prompt("Enter number 1 for multiplication");
let value2 = prompt("Enter number 2 for multiplication");

if((value1 === null || value1.trim() === "") || 
(value2 === null || value2.trim() === "")) {
    console.log("you did not enter anything");
    }else{
        let num1 = Number(value1);
        let num2 = Number(value2);
        console.log(multiplication(num1,num2));
    }
    
 
 // 02-Create a function that takes a number and returns whether it is even or odd.

function checkEvenOdd(num) {
    if (!isNaN(num)) {
        if(num % 2 === 0){
            return `${num} is even number`;
        }else{
            return `${num} is odd number`;
        }
    }
    return  "You did not enter a valid number";
}

let value = prompt("Enter a number to check for even or odd");

if(value === null || value.trim() === ""){
    console.log("you did not enter anything");
}else{
    let num = Number(value);
    console.log(checkEvenOdd(num));
}


// 03-Create a function that takes a name and a city and returns a sentence using both.

 function Welcomemessage(userName,cityName) {
    if (userName && cityName){
        userName = userName.trim();
        cityName = cityName.trim();
        if (userName && cityName) {
            return `User ${userName} lives in ${cityName}.` ;
            }
            return "You did not enter valid values";
        }
        
    return "You did not enter values";    
 }

let userName = prompt("Enter your name");
let cityName = prompt("Enter your city name");

console.log(Welcomemessage(userName,cityName));
 


// 04-Create a function that takes marks (0–100) and returns:Fail,Pass,Good,Excellent

function resultChecker(marks) {
    if(!isNaN(marks)){
    if (marks < 0 || marks > 100) {
        return "Invalid marks. Please enter marks between 0 and 100.";
    } else if (marks <= 35) {
        return `Marks ${marks}: Fail`;
    } else if (marks <= 50) {
        return `Marks ${marks}: Pass`;
    } else if (marks <= 70) {
        return `Marks ${marks}: Good`;
    } else {
        return `Marks ${marks}: Excellent`;
    }
    }
    return "You did not enter a valid number";
}

let grades = prompt("Enter your marks");
if(grades === null || grades.trim() === ""){
        console.log("you did not enter anything");
}else{
    let marks = Number(grades);
    console.log(resultChecker(marks));
}
  


// 05-Create a function that takes two numbers and returns the larger number.

function checkNumber (num1,num2) {
    if(!isNaN(num1) && !isNaN(num2)){
        if(num1 > num2){
            return `${num1} is larger than ${num2}`;
        }else if (num1 < num2) {
            return `${num2} is larger than ${num1}`;            
        } else {
             return `${num1} is equal to ${num2}`;
        }
    }
    return "You did not enter a valid number";
}

let number1 = prompt('Enter the number 1 to check whether it is larger or not');
let number2 = prompt('Enter the number 2 to check whether it is larger or not');

if((number1 === null || number1.trim() === "")||
(number2 === null || number2.trim() === "")){
    console.log("you did not enter anything");
}else{
    let num1 = Number(number1);
    let num2 = Number(number2);
    console.log(checkNumber(num1,num2));
} 


// 06-Create a function that takes no arguments and returns a random motivational message.

function motivationalMessage() {
    return "In growth, it's okay to start again.";}

console.log(motivationalMessage());

 
// 07-Create a function that calls another function and uses its returned value.

function callingFunction(num1,num2) {
    return multiplication(num1,num2);
}

console.log(`calling a function within a function${callingFunction(3,5)}`);



 

 
 