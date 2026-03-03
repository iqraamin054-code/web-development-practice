// This file demonstrates conditional logic using:
// 1. if/else statements
// 2. ternary operators

//----------------------------------Job Eligibility Checker -----------------------

// 1. if/else statements

const attendeeName = "Iqra";
let attendeeAge = 22;
const educationLevel = "intermediate";
let City = "Karachi";

let eligibilityMessage;
let eligibilityStatus;
let message;


// Decide eligibility (boolean first)
if (educationLevel === "graduate" || (educationLevel === "intermediate" && attendeeAge >= 21) ) {
        eligibilityStatus = true;   
}else {
        eligibilityStatus = false;   
} 



// OR let eligibilityStatus = educationLevel === "graduate" || (educationLevel === "intermediate" && attendeeAge >= 21); 

// Create message from boolean
if (eligibilityStatus) {
    eligibilityMessage = "You are eligible for job";
}else {
    eligibilityMessage = "You are not eligible for job";    
}

// Bonus condition
if (eligibilityStatus && City === "Karachi") {
    message = "Priority interview location";    
}else{
    message = "Profile does not match the bonus condition.";
} 

console.log(`
    Hello ${attendeeName}
    Age: ${attendeeAge}
    Education: ${educationLevel}
    Eligibility: ${eligibilityMessage}
    City: ${City}
    ${message}
`);

    
 /* 
   // 2. ternary operators

const attendeeName = "Iqra";
let attendeeAge = 22;
const educationLevel = "intermediate";
let City = "Karachi";

let eligibilityStatus = educationLevel === "graduate" || (educationLevel === "intermediate" && attendeeAge >= 21);

let eligibilityMessage =  eligibilityStatus ? "You are eligible for job": "You are not eligible for job";

let message = eligibilityStatus && City === "Karachi"? "Priority interview location": "Profile does not match the bonus condition.";


console.log(`
    Hello ${attendeeName}
    Age: ${attendeeAge}
    Education: ${educationLevel}
    Eligibility: ${eligibilityMessage}
    City: ${City}
    ${message}
`);
  */