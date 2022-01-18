function even(x) {
    if (x <= 10) {
        n = x * 2;
        console.log(n);
        x += 1;

        even(x)
    }
}
//console.log("even:");
even(1)

function odd(x) {
    if (x <= 10) {
        n = x * 2 - 1;
        console.log(n);
        x += 1;
        odd(x)
    }
}
//console.log("odd: ");
odd(1)