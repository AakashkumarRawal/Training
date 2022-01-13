var category = [
    "movie",
    "news",
    "education",
    "sports ",
    "politics"
];
var age = [
    "teenager",
    "adult"
];

var finalArray = [];



for (let i = 0; i < 100; i++) {
    var new_age = Math.round(Math.random());
    var ans2 = age[new_age];

    var new_cat = Math.round(Math.random() * (4));
    var ans3 = category[new_cat];

    var ans4 = Math.round(Math.random() * (99));
    finalArray.push({
        age: ans2,
        category: ans3,
        visitor: ans4
    })


}
console.log(finalArray);