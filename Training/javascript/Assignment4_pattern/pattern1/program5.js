var n = 7;
var str = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if ((n - 1) <= (i + j)) {
            str += "*";
        } else {
            str += " ";
        }

    }
    str += "\n"
}
console.log(str);