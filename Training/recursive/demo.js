function add(index) {
    if (index > 3) {
        console.log("==========" + index);
        return index;
    }
    console.log("==========" + index);
    console.log("B");
    add(index + 1);
    console.log("A");
    console.log("==========" + index);
}
add(0)