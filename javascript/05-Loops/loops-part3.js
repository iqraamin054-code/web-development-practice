// Loops Part 3: Nested Loops.

// 1. Print a square pattern of stars (5 rows, 5 columns)


for (let row = 1; row <= 5; row++) {
    let result = ""; //Every time a new row starts, we create an empty string.

    for (let col = 1; col <= 5; col++) {
        result += "*";
    }

    console.log(result);
}

// 2. Print numbers in rows using nested loops

for (let row = 1; row <= 3; row++) {
    result = "";
    for (let col = 1; col <= 5; col++) {  
        result += col + " ";
    } 
    
    console.log(result);
   
}

// 3. Print a right triangle star pattern


for (let row = 1; row <= 5; row++) {
    let result = "";
    
    for (let col = 1; col <= row; col++) {
        result += "*";

    }
    console.log(result);
}
// opposite version
for (let row = 5; row >= 1; row--) {
    let result = "";

    for (let col = 1; col <= row; col++) {
        result += "*";
    }

    console.log(result);
}

// 4. Print the multiplication table from 1 to 5

for (let row = 1; row <= 5; row++) {

    for (let col = 1; col <= 10; col++) {  
        console.log(`${row} X ${col} = ${row * col}`);
    }    
}
   
// 5. Print coordinates using nested loops

for (let row = 1; row <= 3; row++) {

    for (let col = 1; col <= 3; col++) {  
        console.log(`(${row},${col})`);
    }    
}