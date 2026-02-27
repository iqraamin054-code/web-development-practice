// This file demonstrates conditional logic using:
// 1. if/else statements
// 2. ternary operators

//----------------------------------Student Status Checker-----------------------------

/* const fullName = "Iqra Amin";
let age = 22;
let cityName = "Karachi";
let isStudent = true;

let ageCategory;
let studentStatus;
let cityStatus;
let reply;

// Age category
if (age < 18) {
    ageCategory = "You are a minor";     
} else if (age >= 18 && age <= 60) {
    ageCategory = "You are an adult";   
} else {
    ageCategory = "You are a senior";   
}


// Student discount check
if (isStudent && age <= 25){
    studentStatus = "You qualify for a student discount";
}else{
    studentStatus = "You do not qualify for a student discount";
}

// City check
if (cityName === "Karachi" ||cityName === "Lahore" ) {
    cityStatus = "You live in a major city";       
}else{
    cityStatus = "You live outside major cities";
}

// Bonus condition
if (age >= 18 && isStudent && cityName === "Karachi") {
    reply = "You are a young student in Karachi!";   
}else {
    reply = "Profile does not match the bonus condition.";
}
 */

// 2. ternary operators

const fullName = "Iqra Amin";
let age = 22;
let cityName = "Karachi";
let isStudent = true;

let ageCategory = age < 18 ? "You are a minor": age >= 18 && age <= 60? "You are an adult": "You are a senior";

let studentStatus = isStudent && age <= 25 ? "You qualify for a student discount":"No student discount available";

let cityStatus = cityName === "Karachi" || cityName === "Lahore"? "You live in a major city": "You live outside major cities";

let reply =  age >= 18 && isStudent && cityName === "Karachi"? "You are a young student in Karachi!": "Profile does not match the bonus condition.";

console.log(
    `Hello ${fullName}
    Age: ${age}
    Category: ${ageCategory}
    City: ${cityName}
    ${cityStatus}
    ${studentStatus}
    ${reply}
    `);
 

