n = 4;
var str2 = "";
for (let i = -n; i <= n; i++) {
    if (i == 0) {
        continue;
    }
    for (let j = -n; j <= n; j++) {
        if (j == 0) {
            continue;
        }
        if ((Math.abs(i) + Math.abs(j) <= (n + 1))) {
            str2 += "@";
        } else {
            str2 += "-";
        }
    }
    str2 += "\n"
}
console.log(str2);