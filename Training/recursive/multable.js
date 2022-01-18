//Write a program in C to display the multiplication table of a given integer .
function multable(i) {
    if (i <= 10) {
        mul = n * i;
        console.log(mul);
        i += 1;
        multable(i);
    }

}
n = 2;
multable(1);