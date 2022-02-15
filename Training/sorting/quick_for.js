let arr = [1, 4, 2, 8, 7];
let n = arr.length;
console.log(n);
quickSort(arr, 0, n);
console.log(arr);

function quickSort(arr, low, high) {
    if (low < high) {

        let part = partition(arr, low, high)
        quickSort(arr, low, part);
        quickSort(arr, part + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[low]
    i = low;
    j = high;

    for (i = low; i < j; i++) {
        for (k = ; k < j; k++) {
            if (arr[i] < pivot) {
                i++
            }
        }
        for (k = j; k < i; k++) {
            if (arr[j] > pivot) {
                j--
            }
        }
        if (i < j) {
            swap(arr, i, j)
        }
    }

    swap(arr, low, j);
    return j;
}


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}