var a = 1,
    b = 0,
    c = 0,
    x1, x2, i, d, r;

d = (b * b) - 4 * a * c;

if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);

    console.log("sum: ", x1);
    console.log("sub: ", x2);
    console.log("d is positive");

} else if (d == 0) {
    x1 = -b / (2 * a);

    console.log("sum: ", x1);
    console.log("d is 0");
} else {
    r = -b / (2 * a);
    i = Math.sqrt(-d) / (2 * a);

    console.log("sum: ", i);

    console.log("d is negative");
}