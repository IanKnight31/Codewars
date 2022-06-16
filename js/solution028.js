//Kata: Grasshopper - Check for Factor, 8kyu 
//Instructions: 
//DESCRIPTION:
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

//Starter Code 

// function checkForFactor (base, factor) {
//     // code here
//   }

//The tests are going to give a number base and return true or false if factor is a factor of it. All we need to do is use modulus and ding ding ding we have a winner. 

function checkForFactor (base, factor) {
    return base % factor === 0 
  }

//Indeed this is the number 1 soultuion on codewars. 

const checkForFactor = (base, factor) => !(base % factor);

//Here is a clever solution where !(0) = true and !(>0) = false 