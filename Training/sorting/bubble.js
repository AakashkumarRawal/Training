let numberArr = [8, 2, 5, 1, 6]

bubblesort_asc(numberArr)
bubblesort_desc(numberArr)

function bubblesort_asc(numberArr) {
    for (let i = 0; i <= numberArr.length; i++) {
        for (let j = 0; j <= (numberArr.length - i - 1); j++) {
            if (numberArr[j] > numberArr[j + 1]) {
                let temp = numberArr[j]
                numberArr[j] = numberArr[j + 1]
                numberArr[j + 1] = temp
                    //console.log(numberArr)
            }
            // console.log(numberArr)
        }

    }
    console.log("ascending : ", numberArr)
}

function bubblesort_desc(numberArr) {
    for (let i = 0; i <= numberArr.length; i++) {
        for (let j = 1; j <= (numberArr.length - i); j++) {
            if (numberArr[j] < numberArr[j + 1]) {
                let temp = numberArr[j]
                numberArr[j] = numberArr[j + 1]
                numberArr[j + 1] = temp
                    //   console.log(numberArr)
            }
            // console.log(numberArr)
        }

    }
    console.log("descending : ", numberArr)
}