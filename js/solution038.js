//Kata: Sum The Strings, 8kyu
// DESCRIPTION:
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

//Starter Code 

//function sumStr(a,b) {
  
// }

//Simply we need to turn these to strings into numbers, add them together, return a sum, turn the sum back into a string, and return the result.
//I wonder if I can add the strings together inside a Number() method (nope, it concnatenates the strings and returns the result as a number)

function sumStr(a,b) {
  return String(Number(a) + Number(b))
}

//This is indeed the top solution on codewars

//Variations 

function sumStrTwo(a,b) {
    return (+a + +b)+''  
  }

//Here is a variation using the unary operator. Both are turned into numbers and added to empty string thus converting them back to a string 