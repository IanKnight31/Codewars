//Kata: Thinkful-Logic Drills: Traffic Light, 8kyu
//Instructions:
//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.

//Starter Code 

// function updateLight(current) {
  
//     //your code here!
  
//   }

//green => yellow 
//yellow => red 
//red = green 

function updateLight(current) {
    if(current === 'green'){
        return 'yellow'
    }else if(current === 'yellow'){
        return 'red'
    }else if(current === 'red'){
        return 'green'
    }
}

//Indeed our simple if conditional works, although it is a bit ugly 

//Another way to do this would be with nested ternaries 

function updateLightTwo(current){
    return current == 'yellow' ? 'red' : current == 'green' ? 'yellow' : 'green';
}

//I'm not a huge fan of this solution because any input would turn the the light green. 