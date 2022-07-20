//button press
const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);


// //1. Write a function called add7 that takes one number and returns that number + 7.
// function add7(number){
//   console.log(number + 7)
// }

// //2. Write a function called multiply that takes 2 numbers and returns their product.
// function multiply(number1, number2){
//   console.log (number1 * number2)
// }

// //3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. 
// //Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

// function capitalize(writeText){
//   let firstLetter = writeText.charAt(0).toUpperCase();
//   let TheRest = writeText.slice(1).toLowerCase();
//   let allThem = firstLetter + TheRest;
//    return allThem;
// };


// //4.Write a function called lastLetter that takes a string and returns the very last letter of that string:
// //    lastLetter("abcd") should return "d"
// function lastLetter(strng) {
//   // let strng = "Blah blah blah";
//   let newString = strng.slice(-1)
//   return newString;
// }
// console.log(lastLetter())

// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i=0; i<=answer; i++){
   if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  } else {console.log(i)}
}