//Kata: Find numbers which are divisible by given number, 8kyu
//DESCRIPTION:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//stater code 

//function divisibleBy(numbers, divisor){

// }

//Ok gotta use modulus here, if we get 0 modulus we know that the number is divisable by the divisor, we can use this in conjunction with the array method arr.filter and return the numbers where n % divisor === 0 are true. 

function divisibleBy(numbers, divisor){
    return numbers.filter(n => n % divisor === 0)
}

//Indeed this is the top solution on codewars, lets look at some variations 

const divisibleByTwo = (numbers, divisor) => numbers.filter(number => !(number % divisor));

//here we have the classic codewars one liner, where we use the not operator that turns the the result 0 truthy and > 0 falsy 
