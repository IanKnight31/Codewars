//Kata: Removing Elements, 8kyu
//Instructions: 
//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//Starter Code 

//function removeEveryOther(arr){
  //your code here
// }

//Im going to use filter and modulus on the index to return a new array with only even indexes 

function removeEveryOther(arr){
    return arr.filter((e,i) => i % 2 === 0)
  }

//Indeed this is the most common solution on codewars 