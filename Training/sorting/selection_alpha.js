var Arr = ["E", "z", "b", "e", "Z"]

function smallValue(val1, val2) {
    val1 = val1.charCodeAt()
    val2 = val2.charCodeAt()

    if (val1 > 97) {
        norm1 = val1 - 97
    } else {
        norm1 = val1 - 65
    }
    if (val2 > 97) {
        norm2 = val2 - 97
    } else {
        norm2 = val2 - 65
    }
    console.log(val1, val2, norm1, norm2);
    if (norm1 == norm2 && val2 < val1) {
        return true
    } else if (norm1 < norm2) {
        return true
    }
    return false

}
for (let i = 0; i < Arr.length; i++) {

    let min_index = i

    for (let j = i + 1; j < Arr.length; j++) {
        if (smallValue(Arr[j], Arr[min_index])) {
            min_index = j
        }

    }
    console.log("old ", Arr)
    let temp = Arr[min_index]
    Arr[min_index] = Arr[i]
    Arr[i] = temp
    console.log("old ", Arr)
}
console.log("selection ", Arr)