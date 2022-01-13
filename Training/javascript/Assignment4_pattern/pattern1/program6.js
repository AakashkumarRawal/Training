n = 5;
var str2 = "";
for (let i = 0; i < n; i++) {
    for (let j = -n; j < n; j++) {

        if ((Math.abs(i) - Math.abs(j) >= 0)) {
            str2 += Math.abs(i) - Math.abs(j) + 1;
        } else {
            str2 += " ";
        }
    }
    str2 += "\n"
}
console.log(str2);