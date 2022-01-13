// P2:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
// E.g. if n==5
//     @
//    @@
//   @@@
//  @@@@
// @@@@@
//      @@@@@
//      @@@@
//      @@@
//      @@
//      @


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
        //  if ((Math.abs(i) + Math.abs(j) <= (n + 1)) && (i < 0 && j < 0 || (i > 0 && j > 0))) {
        if (Math.sign(i) == Math.sign(j) && Math.abs(i) + Math.abs(j) <= (n + 1)) {
            str2 += "@";
        } else {
            str2 += "-";
        }
    }
    str2 += "\n"
}
console.log(str2);