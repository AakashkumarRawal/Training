// P2: Write a program to draw a pattern given below from 0-9.
// E.g. if n==5
// 12345
// 12345
// 12345
// 12345
// 12345

n = 10;
let strings = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        strings += j

    }
    strings += "\n"
}
console.log(strings);