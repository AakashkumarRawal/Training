var number_Array = [1, 2, 3, 4, 5, 6, 7, 9];
var len = number_Array.length - 1;
printArray(0)

function printArray(i) {

    if (i <= len) {
        console.log(number_Array[i]);
        i += 1;
        printArray(i)
    }
}