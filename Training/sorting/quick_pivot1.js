let arr = [5, 4, 8, 1, 2];
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
        //i = low;
    j = high;
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