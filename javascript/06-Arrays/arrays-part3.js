// Arrays Part 3 – Looping Through Arrays

// 1. Create an array of numbers:[3, 6, 9, 12, 15]. Use a for...of loop to print each number.

const numbers = [3, 6, 9, 12, 15];
for (let num of numbers) {
    console.log(num);    
}

/* 2. Create an array:
["Ali", "Sara", "Ahmed", "Zara"]

Use a for...of loop to print:
Hello Ali
Hello Sara
Hello Ahmed
Hello Zara */

const myArray = ["Ali", "Sara", "Ahmed", "Zara"];

for(let arr of myArray){
    console.log(`Hello ${arr}`);
}


// 3. Create an array of numbers:[2, 4, 6, 8, 10]. Use forEach() to print the square of each number.

const myNumbers = [2, 4, 6, 8, 10];

myNumbers.forEach((num) => console.log(num*num));


/* 4. Create an array:
["apple", "banana", "mango"]

Use forEach() to print:
0 apple
1 banana
2 mango

(index and value) */


const anArray = ["apple", "banana", "mango"];

// value current element,index the position of that element

anArray.forEach((value, index) => 
    console.log(`Index: ${index} and Value: ${value}`)
)



// 5. Create an array:[5, 10, 15, 20]. Use a loop to calculate the total sum and print it.


let sum = 0;
const num = [5, 10, 15, 20];
for(let arr of num){
    sum += arr;
    console.log(arr);
}
console.log(sum); 

