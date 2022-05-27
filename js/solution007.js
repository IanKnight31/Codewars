//Kata: Beginner Series #4 Cockroach 
//Instructions: 
//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//Starter Code 

// function cockroachSpeed(s) {
//     //Good Luck!
//   }

//Ok lets start by getting our variables figured out 
//1 h = 3600 s
//1 km = 100000 cm
//conversion factor 100000/3600 = 27.7777777777777778

//Example

// 1.08 km/h = x cm/s
//1.08 *100000cm/3600s = x cm/s 
//108,000/3600 = x 
//30 = x 

function cockroachSpeed(s) {
    return ~~(s*27.777777777777777777778);
  }

  //Simple, we just plug our variable and conversion factor into a shorthand Math.floor() (~~) and presto
  //