// Declare a value for fibonacci series
const num = 100;

// Declare first and second value of fibonacci series
let x = 0
let y = 1

// Declare a fibonacci variable and assign its ist two value
let fn = x+y 
// Printing firist value of fibonacci series
console.log(x)
// for writing multiple line of code we use loops its upto you what kind of loop you want to use 
// Here we are checking the condition 
while(fn < num) {
    // Printing the value of fn when the while loop execute one time 
    console.log(fn);
    fn = x + y
    // here we swap two value 
    //  here x = 0 and we asssign it to Y The default value of Y is 1 but we assign that 1 to fn so here the value of y is 0 and the value of fn is 1 
    x = y
    y = fn
}
