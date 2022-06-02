//Kata: Basic Variable Assignment, 8kyu
//Instructions:
//This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

//Starter Code 

//var a == "code";
// var b == "wa.rs";
// var name == a + b;

//Easy! Each variable is trying be assigned with a double equal sign which is comparison not assignment 

var a = "code";
var b = "wa.rs";
var name = a + b;

//Indeed this was the correct solution, although nowadays we would probably use the let or const keyword instead of var 

