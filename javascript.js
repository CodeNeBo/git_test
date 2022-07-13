console.log("Hi!")
// alert('Hello World!')
console.log(23 + 97)
let num = (4 + 6 + 9) / 77; 
const string = 'The revolution will not be televised.';
console.log(string);
const badString = string;
console.log(badString);
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

//button press
const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);