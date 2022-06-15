//Kata: Is the string upper case?, 8kyu 
//Instructions: 
//DESCRIPTION:
// // Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//Starter Code 

// String.prototype.isUpperCase = function() {
//     // your code here
//   }

function isUpperCase(str){
    return str.prototype.isUpperCase();
}

//This was my first guess, but apparently isUpperCase is not a function 
//I misread the directions in MAKE A METHOD 

String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

//This is the solution where we use the this keyword for whatever is passed into the function and setting it equal to the method .toUpperCase() so only true will return if every letter is capitalized 
