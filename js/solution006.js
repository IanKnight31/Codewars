//Kata: Find the first non-consecutive number, 8kyu
//Instructions:
//Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

//Starter Code 

// function firstNonConsecutive (arr) {

// }


//I have no idea where to start on this one, so I'm going to look at the mdn array methods 

//Ended up looking at the solution because I was stumped. I would have never figured it out without looking at the solution. The idea to use a loop never crossed my mind. 



function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length - 1; ++i){ //1*
        if(arr[i] + 1 !== arr[i + 1]) { //2*
            return arr[i + 1] //3*
        }
    }
    return null //4*
}

// 1* Some interesting things happening with this line. Here we stop short of the last element in the array. This is because we are comparing the current element to the next element in the array with the following if conditional. If we were to omit the -1 in our loops conditional expression, when the loop arrives at the last element, it doesn't have another element after to compare to. Note that the only cases -1 in the conditional expression affects are ones where the whole array is consecutive. This makes sense, the loop will keep running becuase it doesn't find a nonconsecutive, it gets to the last element and compares it to an element outside the bounds of the array which would be undefined. This makes our if statement on line 2* true so we return undefined in all cases where the array is consecutive. 
// 2* For the elements to be consecutive, the element (arr[i]) + 1 HAS to be equal to the next element arr[i + 1]. If you look carefully at these, arr[i] + i takes the element at index i and adds 1 to it where ass arr[i + 1] takes the element at index i+1. So we can look at it this way arr[i]+1 = current element + 1, and arr[i + 1] = the next element in the array. 
//3* If the conditional on line 2* evaluates to true, then we return the element at which the non-consecutive is at 
//4* If the array is consecutive, it completes without hitting the return on line 3* and makes it all the way to null which is what the instructions asked for.