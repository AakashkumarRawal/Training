var n = 7;
var string = "";
for (let i = -(n + 1); i <= n + 1; i++) {
    for (let j = -(n + 1); j <= n + 1; j++) {
        if ((Math.abs(j) == n + 1) || (i == 0 && j == 0)) {
            string += "O"
        } else if (Math.abs(i) == n + 1) {
            string += "0"
        } else if ((Math.sign(i) == Math.sign(j)) && (Math.abs(i) - Math.abs(j) >= 0)) {
            string += Math.abs(j);
        } else if ((Math.sign(i) != Math.sign(j) && (Math.abs(j) - Math.abs(i) >= 0)) && i != 0) {
            string += n - Math.abs(j) + 1;
        } else {
            string += " "
        }
    }
    string += "\n"
}
console.log(string);