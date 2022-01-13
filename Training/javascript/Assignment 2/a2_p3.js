var a = 5,
    b = 12,
    c = 1;
var b_2 = Math.pow(b, 2);
var _4ac = 4 * a * c;
var sq_sub = b_2 - _4ac;
var sq = Math.sqrt(sq_sub);
var _2a = 2 * a;
var add = (-b + sq) / _2a;
var sub = (-b - sq) / _2a;

//console.log(b_2, _4ac, sq, sq_sub);
console.log("sum: ", add);
console.log("sub: ", sub);