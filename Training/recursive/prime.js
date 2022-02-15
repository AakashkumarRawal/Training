//Write a C program to determine whether a given number is prime or not.
function prime(n, i) {
    if (i > Math.sqrt(n)) {
        return console.log("prime");

    }
    if (n % i == 0) {
        return console.log("not prime");

    }
    i += 1;
    prime(n, i)
}
prime(7, 2);