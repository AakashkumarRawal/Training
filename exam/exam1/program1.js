var n = 2,
    z = 25,
    i = 7,
    j = 6,
    k = 3,
    theta = 8;
var part2;
var e = Math.E;
var absVal = Math.abs(z);
var part1 = Math.pow(absVal, 1 / n);

var p2_power = i * ((theta + (2 * k * Math.PI)) / n);
part2 = Math.pow(e, p2_power);
var ans = part1 * part2;
console.log("Answer: ", ans);