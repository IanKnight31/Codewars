//Kata: Expressions matter, 8kyu 
//Instructions 
//Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, () 
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
// Input >> Output Examples:
// expressionsMatter(1,2,3)  ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

// expressionsMatter(1,1,1)  ==>  return 3
// Explanation:
// After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

// expressionsMatter(9,1,1)  ==>  return 18
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18.



//I'm thinking that the pattern in this is that if all the numbers are the same or the sum of the numbers is greater than ten then multiplying them together will give the largest number, anything else sum the two smaller numbers and multiply by the larger number 

//I'm overthinking this, since the order of the numbers cannot change in our equation, there are only four possible configurations of operand placement 

//a + b + c 
//(a+b)*c
//a * (b+c)
//a * b * c

//So we just have to use Math.max to return the largest number of these four configurations. 

function expressionMatter(a, b, c) {
    return Math.max( a+b+c, (a+b)*c, a*(b+c), a*b*c)
  }

  

  function expressionMatter(a, b, c) {
    let d = a + b + c 
    let e = (a+b)*c
    let f = a * (b+c)
    let g = a * b * c
    return Math.max( d, e, f, g);
}

//Both of these solutions work and the top is the second most popular in the codewars solutions, I prefer the bottom solution with the variables because to me it is more readable. 