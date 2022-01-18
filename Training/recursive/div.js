//Write a C program to find all the numbers which are divisible by 7 and 9.
console.log("divisible of 7 and 9");
div(1);

function div(i) {

    if (i <= 200) {
        if (i % 7 == 0 && i % 9 == 0) {
            console.log(i);
        }
        i += 1;
        div(i);
    }
}