//Kata: Student's Final Grade, 8kyu
//Instructions: 
// DESCRIPTION:
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10. x > 90, y > 10
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5. x > 75, y >= 5
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2. x > 50, y >=2
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0

//Starter Code 

// function finalGrade (exam, projects) {
//     return // final grade
//   }

// x > 90, y > 10, return 100
// x > 75, y >= 5, return 90
// x > 50, y >=2, return 75 
//return 0 in all other cases 

//I think I want to try a switch case just for practice 

// function finalGrade(e,p) {
//     switch(e,p){
//         case e > 90 && p > 10:
//             return 100;
//         case e > 75 && p >= 5: 
//             return 90;
//         case e > 50 && p >= 2:
//             return 75;
//         default: 
//             return 0; 
//     }
// }

// function finalGrade(e,p) {
//     switch(e,p){
//         case 90, 10:
//             return 100;
//         case 75, 5: 
//             return 90;
//         case 50, 2:
//             return 75;
//         default: 
//             return 0; 
//     }
// }

// console.log(finalGrade(100,12))

//It seems as though we can't put greater than or less than logic or and or or logic into the switch cases, the cases have to be exact values. 

function finalGrade(e,p) {
     if(e > 90 || p > 10){
        return 100;
     }else if(e > 75 && p >= 5){
        return 90;
     }else if( e > 50 && p >= 2){
        return 75;
     }else{
        return 0
     }
}

//A slight variation of this is the most popular solution on code wars it is as follows: 

function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 & projects >= 5) return 90;
    if(exam > 50 & projects >= 2) return 75;
    return 0;
  }

//I think the syntax is slightly more readable here. 

//I also found the switch case that i was trying to build initially. 


finalGrade = (exam, projects) => {
    switch (true) {
         case exam > 90 || projects > 10:
         return 100;
         case exam > 75 && projects >= 5:
         return 90;
         case exam > 50 && projects >= 2:
         return 75
         case exam <= 55 || projects <= 2:
         return 0;    
    }
}

//It seems that the values inside of the switch parens has to equal the case statement. Earlier I just needed to change switch(e,p) => swtich(true) and my switch case would have worked! So close