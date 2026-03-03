// This file demonstrates conditional logic using:
// 1. if/else statements
// 2. ternary operators

//---------------STUDENT ADMISSION & SCHOLARSHIP DECISION SYSTEM-----------

// 1. if/else statements

const studentName = "Iqra";
let studentGPA = 3.9;
let educationLevel = "intermediate";
let extracurricularActivities = false;
let familyIncome = 40000;
let cityName = "Karachi";


let eligibilityStatus;
let qualificationStatus;
let scholarshipType;
let interviewType;


// STEP 1: ADMISSION ELIGIBILITY

let admissionStatus = educationLevel === "graduate" || (educationLevel === "intermediate" && studentGPA >= 3.0);

if (admissionStatus) {
    eligibilityStatus = `Congratulations! ${studentName}, you are  eligible for admission`;    
}else{
    eligibilityStatus = "Sorry, you are not eligible for admission";    
}

//STEP 2: SCHOLARSHIP QUALIFICATION

let scholarshipStatus = studentGPA >= 3.5 || (studentGPA >= 3.0 && extracurricularActivities) ;

if (scholarshipStatus) {
    qualificationStatus = `Congratulations! ${studentName}, you also qualify for scholarship consideration`;  
}else{
    qualificationStatus = "Sorry, you do not qualify for scholarship";
}


//STEP 3: SCHOLARSHIP TYPE

if (scholarshipStatus) {
    if (familyIncome < 30000) {
        scholarshipType = "Award Full Scholarship" ;       
    }else if (familyIncome >= 30000 && familyIncome <= 60000) {
        scholarshipType = "Award Partial Scholarship";       
    } else {
        scholarshipType = "Award Merit Certificate only";       
    }   
}else{
    scholarshipType = "No scholarship awarded";
}

//STEP 4: INTERVIEW ELIGIBILITY

if (admissionStatus && scholarshipStatus && cityName ==="Karachi") {
    interviewType = `Congratulations! ${studentName}, you are  eligible for interview`;    
}else{
    interviewType =  "Sorry, you are not eligible for interview";    
}


//STEP 5: FINAL OUTPUT MESSAGE

console.log(`
    Hello ${studentName}
    Admission status: ${eligibilityStatus}
    Scholarship status: ${qualificationStatus}
    Scholarship type: ${scholarshipType}
    Interview eligibility result: ${interviewType}
    `);
 

/* 
    // 2. ternary operators

    const studentName = "Iqra";
    let studentGPA = 3.9;
    let educationLevel = "intermediate";
    let extracurricularActivities = false;
    let familyIncome = 40000;
    let cityName = "Karachi"; 

    let admissionStatus = educationLevel === "graduate" || (educationLevel === "intermediate" && studentGPA >= 3.0);

    let eligibilityStatus = admissionStatus? `Congratulations! ${studentName}, you are  eligible for admission`: "Sorry, you are not eligible for admission";    

    let scholarshipStatus = studentGPA >= 3.5 || (studentGPA >= 3.0 && extracurricularActivities) ;

    let qualificationStatus = scholarshipStatus? `Congratulations! ${studentName}, you also qualify for scholarship consideration`: "Sorry, you do not qualify for scholarship";

    let scholarshipType = scholarshipStatus? 
        (familyIncome < 30000? "Award Full Scholarship":
        familyIncome >= 30000 && familyIncome <= 60000? 
        "Award Partial Scholarship": "Award Merit Certificate only")
        : "No scholarship awarded";

    let interviewType = admissionStatus && scholarshipStatus && cityName === "Karachi"?
    `Congratulations! ${studentName}, you are  eligible for interview`:  "Sorry, you are not eligible for interview";    

    console.log(`
    Hello ${studentName}
    Admission status: ${eligibilityStatus}
    Scholarship status: ${qualificationStatus}
    Scholarship type: ${scholarshipType}
    Interview eligibility result: ${interviewType}
    `);

 */