// \ - - - /
// | \   / | 
// |   o   |
// | /   \ |
// / - - - \

n = 4;
var str2 = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (n % 2 != 0) {
            if ((i == Math.floor(n / 2)) && (j == Math.floor(n / 2))) {
                str2 += "0";
            } else if (i == j) {
                str2 += "\\";
            } else if (i + j == n - 1) {
                str2 += "/";
            } else if (i == 0 || i == n - 1) {
                str2 += "-";
            } else if (j == 0 || j == n - 1) {
                str2 += "|";
            } else {
                str2 += " ";
            }
        } else {
            if (((i == n / 2) || (i == n / 2 - 1)) && ((j == n / 2) || (j = n / 2 - 1))) {
                str2 += "0";
            } else if (i == j) {
                str2 += "\\";
            } else if (i + j == n - 1) {
                str2 += "/";
            } else if (i == 0 || i == n - 1) {
                str2 += "-";
            } else if (j == 0 || j == n - 1) {
                str2 += "|";
            } else {
                str2 += " ";
            }

        }
    }
    str2 += "\n"
}
console.log(str2);