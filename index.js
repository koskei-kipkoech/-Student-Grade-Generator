//code for Student Grade Generator
//Function to calculate and return grades based on input  
function calculateGrade(){
    let marks = prompt("input marks ")//prompt user for input 
    marks = parseInt(marks);// parse input to interger
    if (isNaN (marks)|| marks < 0 || marks > 100){//check if marks is not a number or outside valid range
        return "Invalid Input! Enter a number between between 0 to 100"
    }
    //determine and return grade based on marks range
    if (marks > 79 && marks <= 100){
        return "You have an A!"
    }
    else if (marks >= 60 && marks <= 79){
        return "You have a B!"
    }
    else if (marks>=49 && marks <=59 ){
        return "You have a C!!"
    }
    else if (marks >= 40 && marks <=49){
        return "You have a D!!!"
    }
    else if(marks >=0 && marks <=39) {
        return "You have an E"
    }
    //optional 
    // else{
    //     return " Invalid Input! Enter a number between between 0 to 100  "
    // }
    
}
calculateGrade()