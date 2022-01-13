function fn(n1, n2) {
    var ans;
    if (n1 % n2 == 0 || n2 % n1 == 0) {
        ans = console.log("True");
    } else {
        ans = console.log("False")
    }
    return ans;
}

console.log(fn(15, 10));