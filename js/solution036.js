//Kata: What is between?, 8kyu 
//DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//SO this one is pretty east, what we're going to want to do is write a loop that starts at and includes a and ends at and includes b with each loop adding a number to an array. 

function between(a, b) {
    let between = []
    for(i = a; i <= b; i++){
        between.push(i)
    }
    return between
  }
  console.log(between(5,10))

//Indeed this is the top solution on code wars, first tryyyy