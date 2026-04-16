// DOM Part 2 – Changing content & styles


// Task 1: Select the heading and change its text content.

const heading = document.querySelector("#view1 h1");

heading.textContent = "Hello World! ";


// Task 2: Select one element and change its background color.

const heading1 = document.querySelector("section h1");
heading1.style.backgroundColor = "gold";

// Task 3: Select multiple elements and change their text color using a loop.

const views = document.querySelectorAll(".view");
for(let i = 0; i < views.length; i++ ){
    views[i].style.color = "purple";
}


// Task 4: Select an element and change its innerHTML by adding some HTML inside it.

const view2 = document.querySelector("#view2");
view2.innerHTML = "<h2>Inner HTML</h2> <p>This change the entire content</p>";


// Task 5: Select an element and add a new class to it.


const view1 = document.querySelector("#view1");
view1.classList.add("view3");


// Task 6: Select an element and remove an existing class from it.

view1.classList.remove("view3");
 
 
// Task 7: Toggle a class on an element (add if not present, remove if present).

view1.classList.toggle("view3");
 






