//Kata: Unfinished Loop - Bug Fixing #1, 8kyu
//Instructions: 
// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

//Starter Code Starter Code Starter Code Starter Code Starter Code Starter Code Starter Code Starter Code 

// function createArray(number){
//     var newArray = [];
    
//     for(var counter = 1; counter <= number;){
//       newArray.push(counter);
//     }
    
//     return newArray;
//   }

//So what Tommy has done here is create a loop that includes an initial expression (counter = 1) and a conditional expression. So what his loop is doing is starter at 1 and as long as 1 is less than the number passed in as an argument, we will add it to the new array. What Tommy has left out is the increment expression that tells the loop to count by. So the if the number is passed in is anything greater than 1 we will just add 1 to the new array infinitely! Our computers will crash and we will will get no new array! 


//The bug fix with updated ecma6 variables is as follows 

function createArray(number){
    let newArray = [];
    
    for(let i = 1; i <= number; i++){
      newArray.push(i);
    }
    
    return newArray;
  }

//This is indeed the most upvoted solution on Codewars! 