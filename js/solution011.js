//Kata: Parse nice int from char problem, 8kyu
//Instructions: 
//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//Starter Code 

// function getAge(inputString){
//     // return the girl's correct age as an integer. Happy coding :) 
//     }

//My first thoughts here are to split the string into an array and filter for numbers somehow, I'm not familiar with the parse concept right now, so I wonder if I can split the string into just the number 

//Can't split the string into just numbers

function getAge(s){
   return parseInt(s);
    }

//I searched the MDN for the parseInt() function, when the input string is "I'm 9 years old", NaN is returned but when the input string starts with a numeric like in the directions "9 years old", 9 is returned. So it appears that parseInt() will only evaluate the first index in the string. I don't believe this method is best practices for that reason as this some odd behavior and not very useful. However this is the top solution on code wars 

//You could also tell the parseInt() which index to parse for example 

function getAgeTwo(s){
    return parseInt(s[3]);
}

//this will return the number at index 3 if it is indeed a number but NaN if it is not. In this case you'd have to know which index the number was at. 