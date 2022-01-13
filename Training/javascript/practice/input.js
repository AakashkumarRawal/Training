// Importing the module
const readline = require("readline-sync");

// Enter the number
let num = Number(readline.question());
let number = [];
for (let i = 0; i < num; ++i) {
    number.push(Number(readline.question()));
}
console.log(number);