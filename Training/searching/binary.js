var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var n = 8;
var result = binary(numberArr, n, 0, numberArr.length - 1)
console.log("Index: " + result);
var arrSearch = [1, 2, 3, 4, 5, 6, 7, 8];
var search_num = 7;


for (let i = 0; i < arrSearch.length; i++) {
    if (arrSearch[i] == search_num) {

        console.log(search_num + " Found , Index: " + i);
    }
}

function binary(numberArr, n, start, end) {
    mid = Math.floor((start + end) / 2);

    if (numberArr[start] == n) {
        return start;
    } else if (numberArr[end] == n) {
        return end;
    } else if (numberArr[mid] == n) {
        return mid;
    } else if (numberArr[mid] > n) {
        return binary(numberArr, n, start, mid)
    } else if (numberArr[mid] < n) {
        return binary(numberArr, n, mid, end)
    } else {
        return "not found"
    }
}