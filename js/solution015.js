//Kata: The Feast of Many Beasts 
//Instructions: 
//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//Starter Code 

// function feast(beast, dish) {
//     //your function here
//     }

//Need to use index[0] and index[string.length-1] to get the first and last letters of both arguments passed in. 
//I'm going to try this one shorthand 

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length-1] ===  dish[dish.length-1]
    }

//Here we return true if true and false if false, although this works our variables are listed 3 times each. 

//Here is the clever variation 

function feast(beast,dish) {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1); 
}

//To me this is much cleaner with the slice method rather than writing out dish[dish.length - 1]