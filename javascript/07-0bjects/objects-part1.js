// Objects Part 1


/* Create an object called person with these properties:
name: "Ali"
age: 25
city: "Lahore"
Print the name and city using console.log. */


const person = {
    name: "Ali",
    age: 25,
    city: "Lahore"
}

console.log(person.name);
console.log(person.city);


/* 2. Create an object called car:
brand: "Toyota"
model: "Corolla"
year: 2020
Print:This car is a Toyota Corolla from 2020. */


const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020  
}

console.log(`This car is a ${car.brand} ${car.model} from ${car.year}.`);



/* 3. Create an object called student:
name: "Sara"
age: 22
grade: "A"
Update the grade to "A+" and print the object. */


const student = {
    name: "Sara",
    age: 22,
    grade: "A"
}

student.grade = "A+";
console.log(student);



/* 4. Create an object called book:
title: "JavaScript Basics"
author: "John Doe"
pages: 200
Add a new property called price with value 15.
Then print the object.*/


const book = {
    title: "JavaScript Basics",
    author: "John Doe",
    pages: 200  
}

book.price = 15;
console.log(book);



/* 5. Create an object called laptop:
brand: "Dell"
ram: "16GB"
storage: "512GB"
Print all three values separately using console.log. */


const laptop = {
    brand: "Dell",
    ram: "16GB",
    storage: "512GB"
}


console.log(laptop.brand);
console.log(laptop.ram);
console.log(laptop.storage); 

