// let myStr ="I am a \"double quoted\" string inside \"double quotes\""
// console.log(myStr)

// const romanHash = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   const s = "MCMLXXXIX";
//   // s = 1989
//   function romanToInt(s) {
//     let accumulator = 0;
//   for (let i = 0; i < s.length; i++) {
//       if (s[i] === "I" && s[i + 1] === "V") {
//         accumulator += 4;
//         i++;
//       } else if (s[i] === "I" && s[i + 1] === "X") {
//         accumulator += 9;
//         i++;
//       } else if (s[i] === "X" && s[i + 1] === "L") {
//         accumulator += 40;
//         i++;
//       } else if (s[i] === "X" && s[i + 1] === "C") {
//         accumulator += 90;
//         i++;
//       } else if (s[i] === "C" && s[i + 1] === "D") {
//         accumulator += 400;
//         i++;
//       } else if (s[i] === "C" && s[i + 1] === "M") {
//         accumulator += 900;
//         i++;
//       } else {
//         accumulator += romanHash[s[i]];
//       }
//     }
// }
//     return accumulator;



console.log("Hello world");

// let a = Number(prompt("Enter a number"))
// let b= Number(prompt("Enter a number "))
// let c = a+b

// console.log(c)

// Square root of a number

// let a = Number(prompt("Enter a number"))

// let b=Math.sqrt(a)

// console.log(b);


// Find the area of the triangle

// General formula (base * height)/2

// let base = prompt("please enter the base value")
// let height = prompt("please enter  the height value ")
// let area = (base * height)/2
// console.log(`base is ${base} and height is ${height} and the aera of triangle is ${area}`);

// To find the area of a regular triangle the formula is (a+b+c)/2


// let a = 10
// let b = 10
// let c = 10

// let s = (a+b+c)/2

// let area = s*(s-a) * (s-b) * (s-c)

// let areaOfTriangle = Math.sqrt(area)

// console.log(areaOfTriangle)

// swapping two number

// Swapping using tempoary variable 

// let a = prompt("Enter the value of a ")
// let b = prompt("Ente the value of b")

// console.log(`the value of a is ${a} and the value of b is ${b} `)

// let temp = a

// a = b

// b = temp

// console.log(`after swapping the value of a is ${a} and the value of b is ${b} `)

// Swapping without temporary variable 

// let a = 5 
// let b = 6

// a = a+b 
// b = a-b
// a = a-b 

// console.log(`the value of a is ${a} and the value of b is ${b} `)



// Convert kilometer to miles


const convert = () => {
    let kms = document.getElementById('data').value
    const factor = 0.621371;
    let miles = kms * factor
    let res = document.getElementById('res').innerHTML = `${Math.floor(miles)} miles`
}
