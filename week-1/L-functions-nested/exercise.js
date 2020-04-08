var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
 
// the program

let numberofstudents = 15;
let numberofmentors = 8;
numberofpeople = 23;

// function of the students

function createpercentagestudents(){
    return numberOfstudents * 100 / numberofpeople;
}

function createmessage(){
    let percentageofstudents = createpercentagestudents();
    let message = " percentage students : " + percentageofstudents;
    return message;
}

// function of the mentors

function createpercentagementors(){
    return numberOfmentors * 100 / numberofpeople;
}

function creatementorsmessage(){
    let percentageofmentors = createpercentagestudents();
    let messagementors = " percentage mentors : " + percentageofmentors;
    return messagementors;
}