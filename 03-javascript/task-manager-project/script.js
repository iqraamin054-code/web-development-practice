// TASK MANAGER PROJECT Build a console-based task manager where a user can manage daily tasks.


const taskManager = {
    tasks: [],

    add_a_task: function(input){
        return this.tasks.push(input)
    },
    remove_a_task: function(input){
        return this.tasks.splice(input,1)     
    },
    show_all_task: function(){
        if (this.tasks.length === 0){
           console.log ("No tasks available");
        }else{
            let count = 1
            for (const items of this.tasks) {
                console.log(`${count}. ${items}`);
                count ++;
            }
        }
        }
    }


const userInput = (input) => {

if (isNaN(input)||(input < 1 || input > 3)){
    alert("You did not enter a valid number. Please try again");

}else{

    if (input === 1) {      
        let addingTask = prompt("enter task name"); 

        if(addingTask === null || addingTask.trim() === ""){
            alert("you did not enter a task");   

        }else {
            let message = confirm(`Do you want to add this task?`); 

            if (message === true) {  
                taskManager.add_a_task(addingTask);               
                alert("Task is succesfully added"); 
            }        
        }  
     
}else if (input === 2) {

        if (taskManager.tasks.length === 0){
            alert("There is no task in to do list.");
            
        }else{

            let counter = 1;               
            let taskList = "";
            for(let item of taskManager.tasks){ 
                taskList += `${counter}. ${item}\n`;
                counter ++ ;   
            }

            let value = prompt(`${taskList}\nEnter the number of the task you want to remove:`);

            if (value === null || value.trim() === "" ){
                alert("you did not enter anything");

            }else{
                let removingTask = Number(value);

                if (isNaN(removingTask)) {
                    alert("Error: Please enter a number, not text.");   

                }else if(!Number.isInteger(removingTask)) {
                    alert("Error: Please enter a whole number (no decimals).");                   
                    
                }else if (removingTask < 1 || removingTask > taskManager.tasks.length) {
                   alert("Error: That task number doesn't exist in your list.");                 
                    
                }
                 else{

                    let index = removingTask - 1; // as 1-0 = 0 as index nimber start from 0

                    let message = confirm("Do you really want to delete this task?");

                    if (message === true) {

                        taskManager.remove_a_task(index);

                        if (taskManager.tasks.length !== 0){
                            alert("task successfully removed");

                        }else {
                            alert("task successfully removed\nNo task remaining"); 
                        }

                    }else {
                        alert("deletion is cancelled");
                    }
                
                }
            }
        }
        } else {
             taskManager.show_all_task();
        }
    }
}


while (true){

let counter = 1;               
let taskList = "";
    for(let item of taskManager.tasks){ 
        taskList += `${counter}. ${item}\n`;
        counter ++ ; 
    }  

    let menuHeader = taskManager.tasks.length !== 0 
        ? `Current Tasks:\n${taskList}\n` 
        : "No tasks available.\n\n";

    let menuOptions = "Enter your choice:\n1. Add Task\n2. Remove Task\n3. Show Tasks";


let value = prompt(menuHeader + menuOptions);

if(value === null || value.trim() === ""){
    console.log("Exiting... Thanks for visiting!");
        break;

}else{
    let input = Number(value);
    userInput(input); 
      
    let userReq = confirm("Do you want to continue?");
        if(userReq === false)
            break;
} 
}

