var n = 5;
var string = "";
for (let i = 0; i < 1; i++) {
    for (let j = -n; j <= 0; j++) {
        if (i == 0 && j == 0) {
            string += "0\n";
        } else {
            string += " ";
        }
    }
}
for (let l = 0; l < n - 1; l++) {
    for (let i = 0; i < n; i++) {
        for (let j = -n; j <= n; j++) {
            if (i + j == -1) {
                string += "/";
            } else if (j - i == 1) {
                string += "\\";
            } else if ((Math.abs(i) - Math.abs(j)) < n && (Math.abs(i) - Math.abs(j) >= 0)) {
                string += "-";
            } else {
                string += " ";
            }
        }
        string += "\n";

    }

}
for (let i = 0; i <= n; i++) {
    for (let j = -n; j <= n; j++) {
        if (j == 0 || (i == n && j >= -n)) {
            string += "=";
        } else if (Math.abs(j) == 2) {
            string += "|";
        } else {
            string += " ";
        }
    }
    string += "\n";
}

console.log(string);