//Kata: Even or odd, 8kyu
//Instructions: 
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Starter code 

// function even_or_odd(number) {
  
// }

function even_or_odd(number){
    return number % 2 ? 'Odd' : 'Even'
}

//Here, I've set up a ternary expression in which number % 2 is false if 0 and true if anything else. So 'Odd' runs for true (> 0) and 'Even' returns for false (== 0).
//Indeed it passes the tests on codewars 