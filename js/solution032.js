//Kata: Is it even?, 8kyu
//DESCRIPTION:
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//Starter Code 

// function testEven(n) {
//     //Your awesome code here!
// }

// Modulus!

function testEven(n) {
    return n % 2 === 0
}

//Indeed the most popular soulution on codewars 

//Could also use the not operator 

function testEven(n) {
    return !(n % 2)
}

//When the result is 0 (falsy) the operator turns it to true, when the result is 1 (truthy) the operator turns it to true. 