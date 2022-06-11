//Kata: Keep up the hoop, 8kyu 
//Instructions: 
//DESCRIPTION:
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
// FUNDAMENTALS

//Starter Code 

// function hoopCount (n) {
//     //your code goes here    
//  }

//Going to use a simply ternary statement here 

function hoopCount (n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
 }

//This is indeed the most popular solution codewars, it is a perfect challenge to practice ternary operators since its only an if and an else. 