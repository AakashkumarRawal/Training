var cal, n1, n2, ans = 0;
n1 = 20;
n2 = 5;
cal = "-"
    //cal = "+"
    //cal = "*"
    //cal = "/"
if (cal == "+") {
    ans = n1 + n2;
    console.log("Add:" + ans);
} else if (cal == "-") {
    ans = n1 - n2;
    console.log("sub:" + ans);
} else if (cal == "*") {
    ans = n1 * n2;
    console.log("Mul:" + ans);
} else if (cal == "/") {
    ans = n1 / n2;
    console.log("Div:" + ans);
} else {
    console.log("enter only number");
}