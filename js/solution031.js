//Kata: Difference of Volumes of Cuboid, 8kyu
//DESCRIPTION:
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


//Starter Code

// function findDifference(a, b) {
//     //loading...
//   }

//Ok, I'm going to reduce the arrays to find the volumes of the cuboids then I'm going to write a conditional to find which is bigger and return the difference, since there is only two a ternary would probably be pretty readable. After I will browse the solutions to find the clever 1 liners. 

//On second thought, the Math.abs method should work great for returning the differnce

function findDifference(a, b) {
    Math.abs(a.reduce((a,b) => a*b) - b.reduce((a,b) = a*b))
}

const findDif = (a,b) => Math.abs(a.reduce((a,b) => a*b) - b.reduce((a,b) => a*b)) //here it is in 1 line 

//My first solultion is the most common but here is one that i thought was really clever! 

function find_difference([a,b,c], [d,e,f]) {
    return Math.abs(a*b*c-d*e*f)
  }

const find_Diff = ([a,b,c], [d,e,f]) => Math.abs(a*b*c-d*e*f) 

//We know that we are going to get two arrays as input with only 3 members each, so this is really simple and elegant! 

