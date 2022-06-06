//Kata: Switch it up!, 8kyu 
//Instructions:
//When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

//Starter Code 

// function switchItUp(number){
//     //Write your own Code!
//     }

//I'm going to try to use a swtich statement like it suggests, I'm going to get the syntax from the planet solution. 

function switchItUp(number){
    switch(number){
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2: 
            return 'Two';
        case 3: 
            return 'Three';
        case 4:
            return 'Four';
        case 5: 
            return 'Five';
        case 6: 
            return 'Six';
        case 7: 
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine'; 
        default: 
            return 'Unknown';
    }
}

//The solution works here without the break keyword becuase the return keyword acts as a break in the switch. 

//The most popular solution on codewars is as follows 

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

//Here, they cleverly used an array and an array index to return the word at nth index, basically this is the same as array[n] where array = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]