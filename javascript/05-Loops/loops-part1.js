
// Loops – Part 1 (for loop Basics)


// Task 1 Write a program that prints numbers from 1 to 10 using a for loop.

for (let num = 1; num <= 10 ; num++) {
    console.log(num);   
}

// Task 2 Write a program that prints even numbers from 2 to 20 using a for loop.

for (let num = 2; num <= 20 ; num += 2) {
    console.log(num);   
}

//Task 3 Write a program that prints numbers from 10 down to 1 using a for loop.

for (let num = 10; num >= 1 ; num -- ) {
    console.log(num);   
} 
 
//Task 4 Write a program that calculates the sum of numbers from 1 to 100 using a loop.

let sum = 0; // accumulator variable
for (let num = 1; num <= 100 ; num ++) { 
        sum = sum + num;    
} 
console.log(`sum is: ${sum}`);  

 
//Task 5 Write a program that prints the multiplication table of 5.

for (let num = 1; num <= 10 ; num++) {
console.log(`5 x ${num} = ${5 * num}`);
}