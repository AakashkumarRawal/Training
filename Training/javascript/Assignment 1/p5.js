function f1(n1 = 0, n2 = 0) {
    var ans = 0;

    if (n1 < n2) {
        ans = console.log(n1 + " is minimum element");
    } else {
        ans = console.log(n2 + " is minimum element")
    }
    return ans;
}

console.log(f1(55, 6));