var n = 8; {
    console.log("Star Pyramid Patterns");
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

{
    console.log("inverted half Pyramid Pattern");
    let string2 = "";
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            string2 += "*";
        }

        string2 += "\n";
    }

    console.log(string2);

}

{
    console.log("inverted right half Pyramid");
    let string3 = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string3 += " ";

        }
        for (let k = 1; k <= n; k++) {
            string3 += "*";
        }
        string3 += "\n";

    }
    console.log(string3);
}