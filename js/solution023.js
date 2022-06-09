//Kata: Count odd numbers below n, 8kyu 
//Instructions:
// DESCRIPTION:
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

//Its going to put a number into the argument, so we'll simply loop through from 1 to the number, and add each odd to an array, then we'll return the length of that array - 1 (our starting number is not included) or we could use i < n to stop the loop short of n. 

//Starter Code 

// function oddCount(n){
//     // your code here
//   }

function oddCount(n){
    let odds = []
    for(i = 1; i <= n; i++){
        if(i % 2 !== 0){
            odds.push(i)
        }
    }
  return odds.length - 1
  
  }

  //Way over thought this one, while I think that this solution would work, JavaScript ran out of memory on my computer when running this function on large numbers 

  //The correct solution is to just divide the number 2 inside math.floor

  function oddCount(n){
      return Math.floor(n/2)
  }