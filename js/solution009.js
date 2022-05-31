//Kata: Double Char, 8kyu
//Instructions: 
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//Starter Code 

// function doubleChar(str) {
//     // Your code here
//   }
  
//I'm already thinking about a loop in which I start with an empty string and add each letter from the input string twice. 

function doubleChar(str) {
    let newStr = ""
    for(i = 0; i < str.length; i++){
    newStr += str[i] + str[i]
    }
    return newStr
}


//First tryyyyyyyy

// Variations 

const doubleCharTwo = (str) => str.split("").map(c => c + c).join("");

//Here is the split and map approach in which we split the string into an array, then map an new array with double characters at each index, then we join thme back together. 

function doubleCharThree(str) {
    return str.replace(/(.)/g, "$1$1")
  }

//Here is the regex (regular expression) solution. We're grabbing the character with (.) and replacing with two of the same characters $1$1