// Objects Part 2

/* Task 1 Create an object called phone with these properties:
brand: "Samsung"
model: "S23"
storage: "256GB"
Print brand and model using bracket notation. */

const phone = {
    brand: "Samsung",
    model: "S23",
    storage: "256GB"
}

console.log(phone["brand"]); // static access
console.log(phone["model"]);


/* Create an object called user:
username: "devAli"
email: "ali@example.com"
country: "Pakistan"
Print the value from the object using the variable. */


const user = {
  username: "Iqra Amin",
    email: "iqraamin054@gmail.com",
    country: "Pakistan"  
}

const key= "username"; // dynamic access
const key2 = "email";
const key3 = "country";

console.log(user[key]);


/* Create an object called game:
title: "GTA VI"
platform: "PS5"
year: 2025
Check if platform exists in the object and print the result. */


const game = {
    title: "GTA VI",
    platform: "PS5",
    year: 2025 
}

console.log(game.hasOwnProperty("platform"));
// OR console.log("platform" in game);


/* Create an object called movie:
name: "Interstellar"
director: "Christopher Nolan"
Add a new property:
rating: 9
Then print the object. */

const movie = {
    name: "Interstellar",
    director: "Christopher Nolan"
}

movie["rating"] = 9;
console.log(movie);


/* Create an object called employee:
name: "Ahmed"
position: "Developer"
salary: 50000
Update the salary to 60000 using bracket notation and print the object. */

const employee = {
    name: "Ahmed",
    position: "Developer",
    salary: 50000
}

employee["salary"] = 60000;
console.log(employee);