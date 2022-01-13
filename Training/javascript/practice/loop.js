// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// // var txt = " ";
// // for (var i = 0; i < cars.length; i++) {
// //     console.log(cars[i]);
// // }

// cars.forEach(myfunction);

// function myfunction(v, i, a) {
//     console.log(v, i, a);

// }
// console.log("============")
// cars.forEach((v, i, a) => {
//     console.log(v, i, a);

// });
// console.log("============");

// for (let i = 0; i < cars.length; i++) {
//     const value = cars[i];
//     //console.log(cars[i] + " " + i + " " + cars);
//     console.log(cars[i], i, cars);
// }
var a = [
    [1, 5, 3],
    [56, 43, 65],
    [7, 8, 3, ]
];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(a[i][j]);
    }
    console.log("=====");
}