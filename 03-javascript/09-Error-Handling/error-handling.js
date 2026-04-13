/*  try lets you run code that might fail, and catch allows you to handle errors gracefully instead of letting the program crash. 

- try block: Contains code that may throw an error.
- catch block: Executes if an error occurs inside the try block.
- finally block (optional): Runs regardless of whether an error occurred, often used for cleanup tasks.

*/


/*  Task 1 — Basic Error Program
Create a small program where you try to use something incorrectly (like accessing something that doesn’t exist or doing an invalid operation).
Handle that error so the program does not crash and instead shows a message.
 */



try{
    Subtract();
}catch(e){
    console.log("System Message: We encountered a reference error, but the program is still running.");
  console.log("Error details:", e.message);
}


/* Task 2 — JSON Error Program

Create a program that pretends to receive data (a string), but the data is not valid JSON.
Try to convert it into an object and handle the failure gracefully.
 */

const receivedData = '{name:"Iqra",age:22,"field":"Software engineering"}';

try{

    const user = JSON.parse(receivedData);
    console.log(user.name)

}catch (error) {

  console.log("Data Error: The received string is not valid JSON. Please check the data source.");

}


/* Task 3 — Division Program

Create a function that performs division for two numbers.
Make sure the program handles cases where the operation should not be allowed and informs the user properly.
 */

function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    
    let result = a / b;
    console.log(`Result: ${result}`);
    return result;

  } catch (error) {
    console.log("Operation Error:", error.message);
    return null; 
  }
}

safeDivide(10, 2); // Result: 5
safeDivide(10, 0); // Operation Error: Cannot divide by zero.


/* Task 4 — Program with finally

Create a program where:

something runs
error may or may not happen
but a final message always runs at the end */

const Data = '{name:"Iqra",age:22,"field":"Software engineering"}';

try{

    const user = JSON.parse(Data);
    console.log(user.name)

}catch (error) {

  console.log("Data Error: The received string is not valid JSON. Please check the data source.");

}finally{
    console.log("Program ended");
}


/* Task 5 — Custom Error Program

Create a function that checks some condition (for example: invalid input, empty value, wrong type).
If the condition is wrong, manually generate an error and handle it.  */

function verifyAge(age) {
  try {
    // Now this check will work because we converted the input to a number
    if (isNaN(age)) {
      throw new Error("Input must be a valid number.");
    }
    if (age < 18) {
      throw new Error("Access Denied: You must be at least 18 years old.");
    }
    
    console.log("Access Granted. Welcome!");
  } catch (error) {
    console.log("Validation Result:", error.message);
  }
}

let userInput = prompt("Enter your age");

try {
    if (userInput === null || userInput.trim() === "") {
        throw new Error("Invalid Input: Field cannot be empty.");
    }

    let age = Number(userInput);
    
    verifyAge(age);
} catch (e) {
    console.log("Outer Catch:", e.message);
}