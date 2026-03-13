// Arrays Part 4 – map(), filter(), reduce()

// 1. Create an array:[1, 2, 3, 4, 5]. Use map() to create a new array where each number is doubled.

const myArray = [1, 2, 3, 4, 5];

const double = myArray.map( num => num*2 );

console.log(double);


// 2. Create an array:[10, 15, 20, 25, 30]. Use filter() to create a new array that contains only numbers greater than 18.

const anArray = [10, 15, 20, 25, 30];

const result = anArray.filter(num => num > 18);

console.log(result);

// 3. Create an array:[5, 10, 15, 20]. Use reduce() to calculate the total sum.

const myNumbers = [5, 10, 15, 20];

const totalSum = myNumbers.reduce((sum,num) => sum + num,0);

console.log(`The total sum is: ${totalSum}.`);


// 4. Create an array:["apple", "banana", "mango"]. Use map() to convert all words to uppercase.

const newArray = ["apple", "banana", "mango"];

const uppercase = newArray.map( word => word.toUpperCase());

console.log(uppercase);


// 5. Create an array:[12, 7, 25, 18, 30]. Use filter() to get only numbers greater than 15.

const numbers = [12, 7, 25, 18, 30];

const newResult = numbers.filter(num => num > 15);

console.log(newResult);
