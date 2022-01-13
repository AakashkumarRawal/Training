var wd = 80.00,
    bal = 120.00,
    newbal;
if (wd <= 200 && bal <= 200) {
    if (wd % 5 == 0) {
        newbal = (bal - wd) - 5;
        console.log("successful traction");
        console.log("new balance ", newbal);
    } else {
        console.log(wd, "not multiple of 5");
    }
} else {
    console.log("insuificent balace");
}