// DOM Part 3 – Events

// Task 1: Select an element and add a click event.When clicked, print a message in the console.


const h2 = document.querySelector("h2");

h2.addEventListener("click", (event) => {
    console.log("its working");
});




// Task 2: When a button is clicked, change the text content of a heading.

h2.addEventListener("click", (event) => {
    event.target.textContent = "Hello";
});




// Task 3: Add a click event to multiple elements and change their background color when clicked.

const view = document.querySelectorAll(".view");

view.forEach(v => {

    v.addEventListener("click", (event)=>{
      event.currentTarget.style.backgroundColor = "pink";
})
    
});



// Task 4: Add a double-click event to an element and change its text.

h2.addEventListener("dblclick", (event) => {
    event.target.textContent = "Bye";
});


// Task 5: Add a mouseover event to an element and change its color.

h2.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
});


// Task 6: Add a mouseout event to the same element and reset the color.

h2.addEventListener("mouseout", (event) => {
    event.target.style.color = "purple";
});


// Task 7: Add an event to an input field that logs whatever the user types.


const myInput = document.querySelector("#myTextInput");
myInput.addEventListener("input", (event)=>{
    console.log(event.target.value); //.value: HTML elements like <input> don't use textContent. Instead, they store whatever the user types in a property called value.
});


