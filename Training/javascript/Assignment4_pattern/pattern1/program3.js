// P3: Write a program to draw a pattern given below from 0 - 9.
// E.g.if n == 5
// 11111
// 22222
// 33333
// 44444
// 55555


n = 10;
let string1 = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        string1 += i

    }
    string1 += "\n"
}
console.log(string1);