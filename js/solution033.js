//Kata: I love you, a little , a lot, passionately ... not at all, 8kyu 
//DESCRIPTION:
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

//Starter Code 

// function howMuchILoveYou(nbPetals) {
//     // your code
// }

//Switch case 

function howMuchILoveYou(nbPetals) {
    switch((nbPetals - 1) % 6){
        case 0:
        return 'I love you'
        case 1: 
        return 'a little'
        case 2: 
        return 'a lot'
        case 3: 
        return 'passionately'
        case 4: 
        return 'madly'
        case 5: 
        return 'not at all'
    }
}

//I built the switch case correctly, but I had to look at the solutions to know what to put into the switch parameter
//I'm going to have to consule the discord to know why this works!
