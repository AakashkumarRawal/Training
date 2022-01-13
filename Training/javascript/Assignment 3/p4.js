var arr1 = [2, 4, 3, 6];
var arr2 = [5, 3, 7, 3];
var arrMul = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {

        arrMul[i] = arr1[i] * arr2[i];

    }
}
console.log(arrMul);