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
            for (const items of this.tasks) {
                console.log(items);
            }
        }
        }
    }


while (true){

const userInput = (input) => {

if (isNaN(input)||(input < 1 || input > 3)){
    console.log("You did not enter a valid number");
}else{
    if (input === 1) {
       
        let addingTask = prompt("enter task name");      
        if(addingTask === null || addingTask.trim() === ""){
            console.log("you did not enter a task");   

        } else if (!isNaN(addingTask)) {
            console.log("number not allowed as task");   
            
        }else {
            let message = confirm(`Do you want to add: \"taskname\" ${addingTask} ?`);  
            if (message === true) {  
                taskManager.add_a_task(addingTask);               
                console.log("Task is succesfully added"); 
            } else{
                console.log("Task was not added."); 
            }              
    }  
     
}
    }
}
   

let value = prompt("Enter you choice:\n 1 → Add Task\n 2 → Remove Task\n 3 → Show Tasks ");
if(value === null || value.trim() === ""){
    console.log("You did not choose any option");
}else{
    let input = Number(value);
    userInput(input);
} 


let userReq = confirm("Do you want to continue?");
    if(userReq === false)
        break;
}



