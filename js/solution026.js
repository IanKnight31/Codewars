//Kata: My head is at the wrong end!, 8 kyu 
//Instructions: 
//You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

//Starter Code 

// function fixTheMeerkat(arr) {
//     //your code here 
//    }

//Originally I did this Kata with a loop and then was immediately made aware that there is an arr.reverse() method which simply reverses the array order and returns that. 

function fixTheMeerkat(arr) {
    arr.reverse();
   }

//Very simple and indeed the most popular solution on code wars. 
