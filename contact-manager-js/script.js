// Contact Manager Project


const showInfo = (contacts) => {

            let counter = 1;
            let contactList = "";
            for(let info of contacts){

                contactList += `${counter}. ${info.userName}-${info.phoneNumber}\n`;
                
                counter ++;
            }

           return contactList;

        }
        

const contactManager = {
    contacts: [],

    addContact: function(userName,phoneNumber){

        return this.contacts.push({userName,phoneNumber});

    },

    viewContacts: function(){

         if (this.contacts.length === 0){
            alert ("No contact available.");

        }else{

            let contactList = showInfo(this.contacts);
            alert(`Your Contacts:\n ${contactList}`);
        }    
    },

    deleteContact: function(input){

        return this.contacts.splice(input,1);
    },

    searchContact: function(userName){

    },

    exit: function(){

        
        
    }
}



const userInput = (input) => {

    if(isNaN(input) || input < 1 || input > 5){
        alert("Invalid Input");
        return;
    }

    if(input === 1){

        let userName = prompt("Enter your name:");
 
        // !username check for both null and empty string
        
        if(userName === null || userName.trim() === ""){

            return alert("You did not enter anything");

        }else if (!isNaN(userName)) {

            return alert("Error: Number cannot be used as name");
                      
        } 
            
        let phoneNumber = prompt("Enter your phoneNumber:");

        // !phoneNumber check for both null and empty string

            if(phoneNumber === null || phoneNumber.trim() === ""){
                return alert("You did not enter anything");
                               
            }else if (isNaN(phoneNumber)) {

                return alert("Error: letter cannot be used in phone number");
      
            }else if (phoneNumber.length !== 10) {

                 return alert("Error: phone number length must be 10");

                }

                let userPhoneNumber = Number(phoneNumber);

                if (!Number.isInteger(userPhoneNumber)) {
                 
                    return alert("Error: phone number must be in integer (not decimal)");

                }
                
                    let message = confirm("Do you want to add this name and phone number");
                
                    if (message){
                        contactManager.addContact(userName,userPhoneNumber);
                        alert("Contact added successfully");
                    }
                }

    if(input === 2){
            
        contactManager.viewContacts();
    }

    if(input === 3){

        if(contactManager.contacts.length === 0){

            alert("No contact available");
            return;

        }

       let contactList = showInfo(contactManager.contacts);
        let value = prompt(`${contactList}\nEnter the number of the task you want to remove:`);

        if(value === null || value.trim() === ""){

           return alert("You did not enter anything");

        }
          
        let removeContact = Number(value);

        if(isNaN(removeContact)){

            return alert("Invalid Input");

        }else if (!Number.isInteger(removeContact)) {

            return alert("Error: number must be in integer (not decimal)");
            
        } else if (removeContact < 1 || removeContact > contactManager.contacts.length) {

            alert("Error: That task number doesn't exist in your list."); 
            
        }else{

            let index = removeContact - 1;

             let message = confirm("Do you want to remove this contact");
                
                if (message){

                    contactManager.deleteContact(index);
                    return alert("Contacts are succesfully removed");

                }else{

                    alert("deletion is cancelled");

                }
            }
        }

        if (input === 4){

            if(contactManager.contacts.length === 0){

                alert("No contact available");
                return;

            }

            let searchInfo = prompt("Enter the name");

            if(searchInfo === null || searchInfo.trim() === ""){

                return alert("You did not enter anything");

            }else if (!isNaN(searchInfo)) {

                return alert("Invalid input: number cannot be used as name ");
                
            }else{

            let counter = 1;
            let contactList = "";
            for(let info of contactManager.contacts){

                if(searchInfo === info.userName){

                contactList += `${counter}. ${info.userName}-${info.phoneNumber}\n`;
                counter ++;

                }
            }
            
            return alert(contactList);
        } 
    }

    if(input === 5){

        contactManager.exit();
        return "Exit";

    }

}

        

while(true){

    let contactList = showInfo(contactManager.contacts);


    let updatedList = contactManager.contacts.length === 0? "No task available":`Your Tasks:\n ${contactList}`;

    let showOptions = `\nEnter your choice:\n1. Add Contact\n2. View All Contacts\n3. Delete Contact\n4. Search Contact\n5. Exit`

const value = prompt(updatedList + showOptions);

if (value === null || value.trim() === ""){
    console.log("Exiting out of system");
    break;
}else{
    let input = Number(value);

    let result = userInput(input);

    if (result === "Exit") {
        console.log("Exiting out of system");
        break;
    }

    let userRequest = confirm("Do you want to continue?");
    if(userRequest === false){
        break;
    }
}

} 