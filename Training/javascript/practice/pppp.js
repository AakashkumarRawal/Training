var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letterArray = ['a', 'b', 'c', 'd', 'e'];
var alphaNumeric = [];

for (let i = 0; i < 10; i++) {
    var a = [numberArray[parseInt(Math.random() * 10)], letterArray[parseInt(Math.random() * 5)]];
    var b = [numberArray[parseInt(Math.random() * 10)], letterArray[parseInt(Math.random() * 5)]];
    var c = b[parseInt(Math.random() * 2)];
    a.push(c);

    while (a.length > 0) {
        var index = Math.floor(Math.random() * a.length);
        value = a[index];
        a.splice(index, 1);
        alphaNumeric.push(value);
    }
}
console.log(alphaNumeric);