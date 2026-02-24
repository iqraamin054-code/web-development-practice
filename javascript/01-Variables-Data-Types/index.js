const fullName = "Iqra Amin";
let age = 22;
let city = "Karachi";
let isStudent = true

//----------------------------------- 

console.log(`Print name length: ${fullName.length}`);

console.log(`Print name in uppercase:${fullName.toUpperCase()}`);

console.log(`Print name in lowercase:${fullName.toLowerCase()}`);

console.log(`Check if name includes a specific letter: ${fullName.includes("i")}`);
console.log(`Check if name includes a specific letter: ${fullName.includes("meen")}`);
console.log(`Check if name includes a specific letter: ${fullName.includes(" ")}`);

const myName = "   Iqra   "
console.log(`Before removing extra space:${myName}`)
console.log(`Remove extra spaces:${myName.trim()}`);

console.log(`Extract first name:${fullName.slice(0,4)}`);

//-----------------------------------------

console.log(`age is = ${age}`);
console.log(`Add 5 years to age: ${age+5}`);
console.log(`Divide age by 2: ${age/2}`);

const myFloat = 42.556;
console.log(`Round a decimal number ${myFloat} = ${Math.round(myFloat)}`);

console.log(`Generate a random number (e.g. lucky number 1–10): ${Math.floor(Math.random()*10)+1}`);

//-------------------------------------------------

console.log(`type of name: ${typeof fullName}`);
console.log(`type of age: ${typeof age}`);
console.log(`type of isStudent: ${typeof isStudent}`);

//---------------------------------------------

console.log(`My name is ${myName.trim()},I am ${age} years old,and I live in ${city}`)

//Write a code that will return a random letter from your name

const myString = "Iqra";

console.log(myString.charAt(Math.floor(Math.random()*myString.length)) );

