// FUNCTIONS

// 01-Create a function that prints a welcome message in the console.

function welcomeMessage() {
    return "Welcome to the functions exploration world";
    
}

// 02-Create a function that prints a welcome message in the console.

function greetUser(userName) {
    
    return `Welcome ${userName}\nHope you are doing well`;                  
}

// 03-Create a function that takes two numbers and prints their sum.

function sum(num1,num2){
    if(num2 == undefined){
        return num1 + num1;
    }
    return num1 + num2;
}

// 04-Create a function that takes two numbers and prints whether the first number is greater than, less than, or equal to the second number.

function compareNumbers(num1,num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`;    
    }else if (num1 < num2) {
        return `${num1} is less than ${num2}`;    
    } else {
        return `${num1} is equal to ${num2}`; 
    }       
}

// 05-Create a function that takes an age and prints whether the person is a minor or an adult.

function checkAge(userAge) {
    if (userAge < 18 ) {
        return `You are a minor`;    
    } 
     return `You are an adult`;
}


// 06-Create a function that takes a city name and prints a message saying the user belongs to that city.

function cityMessage(cityName) {
    return `You belong to the city ${cityName}`;
    
}

// 07-Create a function that takes no parameters and prints today’s motivation message.

function motivationMessage() {
    return "Stay focused, One day all your hard work will pay off";   
}



// Function Call


console.log(welcomeMessage());
console.log(greetUser("Iqra"));
console.log(sum(4,5));
console.log(compareNumbers(4,5));
console.log(checkAge(14));
console.log(cityMessage("Karachi"));
console.log(motivationMessage());


