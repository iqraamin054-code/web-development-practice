// This file demonstrates conditional logic using:
// 1. if/else statements
// 2. ternary operators

//------------------------Scholarship Qualification Checker---------------------

// 1. if/else statements

let studentName = "Iqra"
let studentGPA = 3.6;
let familyIncome = 40000;
let extracurricularActivities = false;
let city = "Karachi";

let qualification;
let qualificationStatus;
let scholarshipType;
let interviewStatus;

//Qualification decision
if (studentGPA >= 3.5 || (studentGPA >= 3.0 && extracurricularActivities )) {
    qualificationStatus = true;   
}else {
      qualificationStatus = false;     
}


// Create message from boolean
if (qualificationStatus) {
    qualification = `${studentName}, Congratulations! you are qualified for scholarship`;   
}else{
    qualification = `${studentName}, Sorry, you are not qualified for scholarship`;  
} 

// Scholarship level

 if (qualificationStatus && familyIncome < 30000) {
    scholarshipType = "Full Scholarship";
} else if (qualificationStatus && (familyIncome >= 30000 &&familyIncome <= 60000)) {
    scholarshipType = "Partial Scholarship";
} else if (qualificationStatus && familyIncome > 60000) {
    scholarshipType = "Merit Certificate Only";
} else {
    scholarshipType =  "No scholarship awarded.";
} 


//Bonus Condition
if (qualificationStatus && city === "Karachi") {
    interviewStatus = "Eligible for local university scholarship interview";   
}else{
    interviewStatus = "Not eligible for local university scholarship interview";
}
 
console.log(`
    Hello ${studentName}
    Student GPA: ${studentGPA}
    Family Income: ${familyIncome}
    Qualification Status: ${qualification}
    Scholarship Result: ${scholarshipType}
    City: ${city}
    Interview Status: ${interviewStatus}
    `);


/* 

    // 2. ternary operators

let studentName = "Iqra";
let studentGPA = 3.6;
let familyIncome = 40000;
let extracurricularActivities = false;
let city = "Karachi";

let qualificationStatus =  studentGPA >= 3.5 || (studentGPA >= 3.0 && extracurricularActivities); //The condition itself already evaluates to true or false

let qualification =  qualificationStatus ? `${studentName}, Congratulations! you are qualified for scholarship` : `${studentName}, Sorry, you are not qualified for scholarship`;

let scholarshipType = qualificationStatus
    ? (familyIncome < 30000 ? "Full Scholarship"
        : familyIncome <= 60000 ? "Partial Scholarship"
        : "Merit Certificate Only")
    : "No scholarship awarded.";

let interviewStatus = qualificationStatus && city === "Karachi" ? "Eligible for local university scholarship interview" : "Not eligible for local university scholarship interview";
    

console.log(`
    Hello ${studentName}
    Student GPA: ${studentGPA}
    Family Income: ${familyIncome}
    Qualification Status: ${qualification}
    Scholarship Result: ${scholarshipType}
    City: ${city}
    Interview Status: ${interviewStatus}
    `);

 */