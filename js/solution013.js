//Kata: Twice as old, 8kyu
//Instructions:
//Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//Starter Code

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     // your code here
//   }

//First we need to multiply the sons age by two. 
//Then we need to write a conditional where if the fathers age is greater than twice the sons age we return the difference and if the fathers age is less than we return the difference
//I like a ternary operator in this instance because there aren't many statements 

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return dadYearsOld > sonYearsOld*2 ? dadYearsOld - sonYearsOld*2 : sonYearsOld*2 - dadYearsOld;
  }

//My initial solution is ternary, It's a little redundant but it gets the job done. 

//The most popular solution code wars uses the Math.abs function to return a positive number, smart! 

function twiceAsOldTwo(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld); 
  }

//Clever! Here we get back positive numbers even when two times the sons age is greater than the age of the father!