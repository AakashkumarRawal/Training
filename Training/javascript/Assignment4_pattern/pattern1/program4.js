n = 5;
let string2 = "";
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string2 += "*"

    }
    string2 += "\n"
}
console.log(string2);