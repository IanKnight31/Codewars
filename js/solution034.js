//Kata: Correct the mistakes of the character recognition software, 8kyu
//DESCRIPTION:
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//Starter Code 

//function correct(string){
	// your code here
// }

//Gonna hit wit a replace all! 

// function correct(string){
// 	return string.split('')
// }

function correct(string){
    newArr = string.split('').map(function(e){
        if(e === '0'){
            return 'O'
        }else if(e === '1'){
            return 'I'
        }else if(e === '5'){
            return 'S'
        }else{
            return e
        }
    })
    return newArr.join('')
}
    



//Welp all my attempts at a replace all failed. I ended up constructing this ugly map with a conditonal, it seems to work! Time to look at the 1 liners in the solutions!

//I briefly thought about chaining three replace functions together before I started exploring the maps and loop ideas but for whatever reason I didn't try it, the top solution on code wars is 

correct2 = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

//here theyve used the replace function with a regex modifier global and just chained three of them together. 

//another interesting solution is 

const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
  };
  
  const correct3 = string => (
    string.replace(/[501]/g, character => corrections[character])
  );

//This is crazy here
//Here they've constructed an object with literal notation that contains key vlue pairs
//then theyve passed in a function to the replace method which is interesting in and of itself 
//The function appears to work together with the regex whereas it searches the string for 5 or 0 or 1, grabs it and passes it into the character parameter and returns the corresponding value from our object

//   function char(character){
//     return corrections[character]
//   }

// console.log(corrections[5])


// function correct4(str){
//     return str.replace(/[501]/g, 'S', 'O', 'I')
// }

// console.log(correct4('L0ND0N'))
