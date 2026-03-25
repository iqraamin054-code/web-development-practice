// Contact Manager Project

const contactManager = {
    contacts: [],

    addContact: function(userName,phoneNumber){

        return this.contacts.push({userName,phoneNumber});

    },

    viewContacts: function(){

        if(this.contacts.length === 0){
            alert("No contact available"); 

        }else{

            let counter = 1;
            let contactList = "";
            for(let info of this.contacts){

                contactList += `${counter}. ${info.userName}-${info.phoneNumber}\n`;
                
                counter ++;
            }

            alert(`Your contact list:\n${contactList}`);
        }
    },

    deleteContact: function(userName,phoneNumber){

        return this.contact.splice(userName,phoneNumber,2)
    },

    searchContact: function(userName){

    },

    exist: function(){

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

            if(!phoneNumber){
                return alert("You did not enter anything");
                               
            }

                if (isNaN(phoneNumber)) {

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
                            alert("Contacts are succesfully added")
                    }
                }

    if(input === 2){
            
        contactManager.viewContacts();
    }

}
        

    
    




while(true){

const value = prompt("Enter your choice:\n1. Add Contact\n2. View All Contacts\n3. Delete Contact\n4. Search Contact\n5. Exit");

if (value === null || value.trim() === ""){
    console.log("Exiting out of system");
    break;
}else{
    let input = Number(value);
    userInput(input);

    let userRequest = confirm("Do you want to continue?");
    if(userRequest === false){
        break;
    }
}

}