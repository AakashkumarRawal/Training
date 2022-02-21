let arr = [1, 4, "a", 2, , "A", "Z", 8, 7, ];

function norm(val1, val2) {
    if (typeof val1 == 'string') {
        val1 = val1.charCodeAt();
        if (val1 > 95) {
            norm1 = val1 - 97
        } else {
            norm1 = val1 - 65
        }
    } else {
        norm1 = val1
    }
    if (typeof val2 == 'string') {
        val2 = val2.charCodeAt();
        if (val2 > 95) {
            norm2 = val2 - 97
        } else {
            norm2 = val2 - 65
        }
    } else {
        norm2 = val2
    }

    if (norm1 == norm2 && typeof val2 != 'string') {
        return true
    } else if (norm1 == norm2 && val1 < val2 && typeof val1 != 'string') {
        return false
    } else if (norm1 == norm2 && val1 < val2) {
        return true
    } else if (norm1 > norm2) {
        return true
    }
    return false
}

function partition(arr, low, high) {
    var pivot = arr[low]
    j = high + 1;
    for (i = low; i < j; i++) {
        do {
            i++;

        } while (arr[i] < pivot)

        do {
            j--;
        } while (arr[j] > pivot)
        if (i < j) {
            swap(arr, i, j)

        }

    }

    swap(arr, low, j);
    console.log("step", arr);
    return j;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}