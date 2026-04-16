// DOM Part 1 – Selecting elements

// Task 1: Select an element by id and print it to the console.

const view1 = document.getElementById("view1")
console.log(view1);


// Task 2: Select elements by class name and print them to the console.

const views = document.getElementsByClassName("view");
console.log(views);


// Task 3: Select elements by tag name and print them to the console.

const divs = document.getElementsByTagName("div")
console.log(divs);


// Task 4: Use querySelector to select the first matching element and print it. 

const view2 = document.querySelector("#view2")
console.log(view2);


// Task 5: Use querySelectorAll to select multiple elements and print them 

const sameViews = document.querySelectorAll(".view")
console.log(sameViews);
