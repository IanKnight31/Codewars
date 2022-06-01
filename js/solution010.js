//Kata: Grasshopper - Messi goals function, 8kyu
//Instructions:
//Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:
//5, 10, 2  -->  17

//Starter Co

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     // code goes here
//   }

//As simple as it gets, just add the three variables together and return it. 

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//We could make it shorter like the following 

const goalsTwo = (a,b,c) => a + b + c;

//Here we have a fat arrow and much simpler variable names, but these are too arbritrary. 

const goalsThree = (...a) => a.reduce((s, v) => s + v, 0);

//Here is another solution but a much more complicated one to read. Here (...a) is the spread operator where all arguments passed into the function are turned into an array and then the array is rdeduced (summed). Again, the variable names are arbitrary and the function is bit overkill for this case. 

