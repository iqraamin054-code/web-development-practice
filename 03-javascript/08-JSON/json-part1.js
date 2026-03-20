// JSON: Javascript Object Notation

/* 
JSON is used to send and receive dta.
JSON is a text format that is completely language independent.
Means it is used to send and receive data in many languages not just in javascript.
*/



// Create a JavaScript object with at least 3 properties. Convert it into JSON format and print it.


const myObject = {
    name: "Iqra",
    field: "Software engineering",
    age: 22,
}

let sendJSON = JSON.stringify(myObject);
console.log(sendJSON);



// Create a JSON string manually. Convert it into a JavaScript object and print the object.


let jsonString = '{"name":"Iqra","age":22,"field":"Software engineering"}';
let receiveJSON = JSON.parse(jsonString);
console.log(receiveJSON);

// Create an object that contains an array inside it. Convert it to JSON and print it.

const anObject = {
    hobbies:["web development","content writing", "graphic designing","data analytics"]
}

sendJSON = JSON.stringify(anObject);
console.log(sendJSON);



// Convert the JSON back into a JavaScript object and access one value. 

receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);

console.log(receiveJSON.hobbies[0]);



// Create an object, convert it to JSON, then convert it back to object, and print both versions.   

const game = {
    title: "GTA VI",
    platform: "PS5",
    year: 2025 
}

sendJSON = JSON.stringify(game)
console.log(sendJSON);

receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
