// Objects Part 3  Looping objects

/* Task 1 Create an object called car with these properties:
brand: "Toyota"
model: "Corolla"
year: 2022
Print all keys of the object */


const car = {
  brand: "Toyota",
    model: "Corolla",
    year: 2022    
}

console.log(Object.keys(car));


/* Task 2 Create an object called laptop with these properties:
brand: "Dell"
ram: "16GB"
storage: "512GB"
Print all values of the object */

const laptop = {
  brand: "Dell",
    ram: "16GB",
    storage: "512GB"  
}

console.log(Object.values(laptop));


/* Task 3 Create an object called book with these properties:
title: "Atomic Habits"
author: "James Clear"
pages: 320
Print both keys and values */

const book = {
   title: "Atomic Habits",
    author: "James Clear",
    pages: 320 
}

console.log(Object.entries(book));


/* Task 4 Create an object called student:
name: "Sara"
age: 20
course: "Computer Science"
Use a for...in loop to print all properties.  */

const student = {
    name: "Iqra",
    age: 20,
    course: "Software Enginnering"
}

for(let items in student){
    console.log(`keys: ${items} and values: ${student[items]}`);
}


/* Task 5 Create an object called product:
name: "Keyboard"
price: 50
Delete the price property and print the object. */

const product = {
    name: "Keyboard",
    price: 50
}

delete product.price;
console.log(product);