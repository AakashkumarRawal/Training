//Write a C program to determine whether a given number is prime or not.
function prime(n, i) {
    if (i > Math.sqrt(n)) {
        return "prime"

    }
    if (n % i == 0) {
        return "not prime"
    }
    i += 1;
    prime(n, i)
}
console.log(prime(16, 2));