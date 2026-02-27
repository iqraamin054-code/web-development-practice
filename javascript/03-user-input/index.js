//USER INPUT

/* TYPES
 01- alert
02- confirm
03- prompt */



let userName = prompt("Enter your name");

if (userName) {
    userName = userName.trim();

    if (userName) {
        console.log(`Welcome ${userName}`);
    } else {
        console.log("You didn't enter your name");
    }

} else {
    console.log("You didn't enter your name");
}

// prompt always return string make sure to convert into number

let age = Number(prompt("Enter your age"));

if (!isNaN(age) && age > 0) {

    if (age < 18) {
        console.log("You are a minor");
    } else if (age >= 18 && age <= 59) {
        console.log("You are an adult");
    } else {
        console.log("You are a senior");
    }

} else {
    console.log("Please enter a valid age");
}

