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