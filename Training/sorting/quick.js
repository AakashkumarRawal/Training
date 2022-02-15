let arr = [1, 4, 2, 8, 7];
let n = arr.length;
console.log(n);
quickSort(arr, 0, n - 1);

function quickSort(arr, low, high) {
    if (low < high) {
        // console.log(high);
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {

    let pivot = arr[high];

    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(arr);