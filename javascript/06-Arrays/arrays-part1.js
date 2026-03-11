// Arrays Part 1

// 1. Create an array called fruits that contains: apple, banana, mango, orange. Print the whole array.

const fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);

// 2. Print the first element and the last element of the array.

console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
 //or
let [apple,,,orange] = fruits;
console.log(apple);
console.log(orange);


// 3. Change "banana" to "grapes" and print the updated array.

fruits [1] = "grapes";
console.log(fruits);

// 4. Create an array of numbers: [10, 20, 30, 40, 50] .Use a loop to print all numbers.

const myArray = [10, 20, 30, 40, 50];
for (let num = 0; num < myArray.length; num++){
    console.log(myArray[num]);
}

// Find the sum of all numbers in this array:[5, 10, 15, 20]

let sum = 0;
const numbers = [5, 10, 15, 20];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += numbers[i];
    console.log(element);
}

console.log(`The sum is: ${sum}`);