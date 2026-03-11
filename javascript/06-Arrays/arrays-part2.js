// arrays-part2.js

// 1. Create an empty array called colors. Add these colors using push():red,blue,green. Print the array.

const myArray = [];
myArray.push("red");
myArray.push("blue");
myArray.push("green");
console.log(myArray);

// 2. Remove the last element from the colors array. Print the array again.

myArray.pop();
console.log(myArray);

// 3. Add a new color "yellow" at the beginning of the array.Print the array.

myArray.unshift("yellow");
console.log(myArray);

// 4. Remove the first element from the array.Print the array again.

myArray.shift();
console.log(myArray);

// 5. Create an array: ["apple", "banana", "mango", "orange"].Check if "mango" exists in the array using includes(). Print the result.

const anArray = ["apple", "banana", "mango", "orange"];

console.log(anArray.includes("mango"));


// 6. Using the same array, find the index of "orange". Print the index.
// If the value is not present, indexOf() returns -1.

let position = anArray.indexOf("orange")
console.log(position); 