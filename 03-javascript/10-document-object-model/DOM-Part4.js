// DOM Part 4 – Create / Remove Elements + Mini Project

// Task 1: Create a new <div> element using JavaScript and append it to the page.

const view = document.querySelector("#view1")
const newDiv = document.createElement("div");
view.append(newDiv);


// Task 2: Create a new <p> element, add some text to it, and append it inside an existing section.


    const newPara = document.createElement("p");
    newPara.textContent = "This is my new paragraph!";
    view.append(newPara);


// Task 3: Create multiple elements dynamically using a loop and display them on the page.

for(let i = 1; i <= 5; i++){
    const btn = document.createElement("button");
    btn.textContent = `Button ${i}`;
    view.append(btn);
}



// Task 4: Select an element and remove it from the DOM.

const view2 = document.querySelector("#view2");
view2.remove();

// Task 5: Replace an existing element with a new one.

const newElement = document.createElement("h1");
newElement.textContent = "This is the new heading!";

const oldElement = document.querySelector("#view1 h1");
oldElement.replaceWith(newElement);


/* Mini Project: Create a simple UI where:
    . There is an input field
    . There is a button
    When the button is clicked:
    1. Take the input value
    2. Create a new element
    3. Display it on the page */


    const myInput = document.querySelector("#myTextInput");
    const addBtn = document.querySelector("#button");
    

    addBtn.addEventListener("click", (event) => {

        event.preventDefault();
        let userInput = myInput.value.trim();

        if(userInput === ""){
            alert("You did not enter anything");
            return;
        }
        const newElement = document.createElement("p");
        newElement.textContent = userInput;
        view.append(newElement);

        myInput.value = "";

    });
