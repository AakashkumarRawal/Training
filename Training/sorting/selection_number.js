var numberArr = [8, 2, 5, 1, 6, 3]
selection(numberArr)

function selection(numberArr) {
    for (let i = 0; i < numberArr.length; i++) {
        min = i
        for (let j = i + 1; j < numberArr.length; j++) {
            if (numberArr[j] < numberArr[min]) {
                min = j
                    //console.log(numberArr)
            }

        }
        let temp = numberArr[i]
        numberArr[i] = numberArr[min]
        numberArr[min] = temp
        console.log(numberArr)

    }
    console.log("selection ", numberArr)
}