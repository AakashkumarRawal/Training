//Write a program in C to write sqrt of first n numbers
function sqrt(i) {
    if (i <= n) {
        mul = Math.sqrt(i);
        console.log(mul);
        i += 1;
        sqrt(i);
    }

}
n = 10;
sqrt(1);