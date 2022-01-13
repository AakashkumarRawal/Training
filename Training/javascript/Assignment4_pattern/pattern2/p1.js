// P1:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed)
// E.g. if n==5 
// # * * * #
// * # * # *
// * * # * *
// * # * # *
// # * * * #


var n = 5;
var string = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i + j == n - 1 || i == j) {
            string += "#"
        } else {
            string += "*"
        }
    }
    string += "\n"
}
console.log(string);