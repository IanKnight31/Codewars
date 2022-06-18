//Kata: Grasshopper - Debug sayHello, 8kyu
// DESCRIPTION:
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

//Starter Code 

// function sayHello(name) {
//     return 'Hello'
//   }

//The goal of our function is to say hello to each crew member, this function just returns a generic hello with no personalization. So we need to get it returning whatever name is passed in as an argument as well. I'm going to chose a template literal to do this. 

function sayHello(name) {
    return `Hello, ${name}`
  }

//The following is the most popular code wars solution in which the user chose to use concatenation instead of a template literal 

function sayHello (name) {
    return 'Hello, ' +  name;
  }

//Easy Peasy 