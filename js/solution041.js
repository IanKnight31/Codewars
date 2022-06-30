//Kata: All Star Code Challenge #18, 8kyu
//DESCRIPTION:
//This Kata is intended as a small challenge for my students

//All Star Code Challenge #18

//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

//If no occurrences can be found, a count of 0 should be returned.

//("Hello", "o")  ==>  1
//("Hello", "l")  ==>  2
//("", "z")       ==>  0

//Starter Code 

// function strCount(str, letter){  
//     //code here
//   }

//Ok so right away I'm thinking str.search method
//ok so unbeknownst to me, the str.search method returns the number of instances that the search term is found in the calling string.  
//ok nevermind it returns the first index that the search term is found at 
//ok I'm not smart enough to figure the regex out with the search, so I'm probably going to go the loop and conditional route 

// function strCount(str, letter){  
//     return str.search(/${letter}/g)
//   }

// console.log(strCount('hello','l'))

function strCount(str, letter){  
  let arr = []
  for(i = 0; i < str.length; i++){
    if(str[i] === letter){
      arr.push(str[i])
    }
  }
  return arr.length
}

//WOW this worked although this particular solution is nowhere to be found in the codewars solutions. 


console.log(strCount('helllllo','l'))  
