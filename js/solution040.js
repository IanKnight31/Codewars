//Kata: Cat years, Dog years, 8kyu 
// //DESCRIPTION:

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//Starter Code 

// var humanYearsCatYearsDogYears = function(humanYears) {
//     // Your code here!
//     return [0,0,0];
//   }

//My brain is too small to comprehend other possible ways to do this, so I'm just going to make an ugly conditional but try to contain it in the same function, then we'll browser the simplier ways of doing this!


function humanYearsCatYearsDogYears(h){
    let c = 0
    let d = 0
    if(h === 1){
        c = 15
        d = 15
    }else if(h === 2){
        c = 24
        d = 24
    }else if(h > 2){
        c = (h-2)*4 + 24
        d = (h-2)*5 + 24
    }
    return [h,c,d]
}
console.log(hcd(10))

//well this works and it's similar to solutions on codewars, the top solution is essentially this but a little more succint. 

let humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }