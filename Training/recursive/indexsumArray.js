var number_Array = [1, 2, 3, 4, 5, 6, 7, 8];
var len = number_Array.length - 1;
sum = 0;
var start, end;
sumArray(3, 5, 0)

function sumArray(start, end, i) {

    if (i >= start && i <= end) {
        sum += number_Array[i]
        i += 1;
        sumArray(i)
    }
}
console.log("sum of array: " + sum);