//Kata; L1: Set alarm 8kyu
//Instructions: 
//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

//Starter Code 

// function setAlarm(employed, vacation){
//   }

//Gonna go with some ternary action on this one. If vacation is true, false will return. If vacation is true, employed will be evaluted, if it is true, true will return, if it is false, false returns. this covers all cases 

function setAlarm(employed, vacation){
    return vacation ? false : employed ? true : false 
  }

//Variations

const setAlarmB = (employed, vacation) => employed && !vacation;

//I thought this variation was worth a look. It is much more clever than my solution. here Its saying if employed is true and vaction is not true, return true, otherwise return false.

