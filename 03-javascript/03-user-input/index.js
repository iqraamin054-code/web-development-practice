//USER INPUT

/* TYPES
 01- alert
02- confirm
03- prompt */


 // USER INPUT
let userName = prompt("Enter your name");

if (userName) {
    userName = userName.trim();

    if (userName) {
        console.log(`Welcome ${userName}\nHope you have an amazing day!`);
    } else {
        console.log("You didn't enter your name");
    }

} else {
    console.log("You didn't enter your name");
} 

// AGE INPUT
// prompt always return string make sure to convert into number


let input = prompt("Enter your age");

if (input === null || input.trim() === "") {
    console.log("You did not enter anything");
} else {
    let age = Number(input);

    if (!isNaN(age) && age > 0) {

        if (age < 18) {
            console.log("You are a young achiever");
        } else if (age <= 59) {
            console.log("You are an ambitious adult");
        } else {
            console.log("You are a wise legend");
        }

        let studentStatus = confirm("Are you a student?\nOK = Yes\nCancel = No");

        if (studentStatus && age >= 18 && age <= 59) {
            console.log("You receive a student benefit 🎓");
        } else {
            console.log("Thank you for your response");
        }

    } else {
        console.log("Please enter a valid age");
    }
} 


