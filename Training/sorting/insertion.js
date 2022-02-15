var arr = [3, 1, 9, 5, 2]
var len = arr.length
insertion(arr)

function insertion(arr) {
    for (i = 0; i < len; i++) {
        let temp = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > temp) {

            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
        console.log("old ", arr);
    }
    console.log("insertion ", arr);
}