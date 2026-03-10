
//Loops Part 2 – Conditions inside loops

//1. Print numbers from 1 to 20, but only print numbers that are divisible by 3.

for (let num = 1; num <= 20; num++) {
   if(num % 3 === 0){
    console.log(num);
   }   
}

/* 2. Print numbers from 1 to 15.
   If the number is even print:
   "X is even"
   Otherwise print:
   "X is odd" 
   */

for (let num = 1; num <= 15; num++) {
   let result = num % 2 === 0 ? `${num} is even`: `${num} is odd`;
    console.log(result);
   }   

//  Print numbers from 1 to 30. Skip numbers that are divisible by 5.

for (let num = 1; num <= 30; num++) {
   if(num % 5 === 0) continue;
       console.log(num);   
}

// Print numbers from 1 to 20. Stop the loop completely when the number becomes 13.

for (let num = 1; num <= 20; num++) {
    if (num === 13) break;
    console.log(num);
}

 // 5. Print the square of numbers from 1 to 10.
 
 for (let num = 1; num <= 10; num++) {  
    console.log(`${num} square is ${num*num}`);    
}