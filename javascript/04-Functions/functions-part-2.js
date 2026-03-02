// JavaScript Functions – Part 2: Parameters, Return Values & Reusability

// 01-Create a function that takes two numbers and returns their multiplication.

function multiplication (num1, num2) {
    if(num2 === undefined){
        return num1 * num1;
    }
    return num1 * num2;
}


// 02-Create a function that takes a number and returns whether it is even or odd.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is even`;        
    }
    return `${num} is odd`;
}

// 03-Create a function that takes a name and a city and returns a sentence using both.

function message(userName,cityName) {
    return `user name ${userName} live in ${cityName} city.` 
    
}

// 04-Create a function that takes marks (0–100) and returns:Fail,Pass,Good,Excellent

function resultChecker(marks) {
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
    
// 05-Create a function that takes two numbers and returns the larger number.

function checkNumber (num1,num2) {
    if (num1 > num2) {
        return `${num1} is larger than ${num2}`;
    }else if (num1 < num2) {
        return `${num2} is larger than ${num1}`;
    } else {
        return `${num1} is equal to ${num2}`;

    }
    
}

// 06-Create a function that takes no arguments and returns a random motivational message.

function motivationalMessage() {
    return "On growth, it's okay to start again";
}

// 07-Create a function that calls another function and uses its returned value.

function callingFunction() {
    return multiplication(5,6);
}



console.log(multiplication(2,5));
console.log(checkEvenOdd(3));
console.log(message("Iqra", "Karachi"));
console.log(resultChecker(35));
console.log(checkNumber(10,100));
console.log(motivationalMessage());
console.log(callingFunction());




