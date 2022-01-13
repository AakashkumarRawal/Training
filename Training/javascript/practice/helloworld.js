console.log("hello world");

console.log(Date());

var x, y, z, a;
x = 5;
y = 6;
z = x + y;
console.log(z);
z = z * x;

x = x + 5;
console.log(x);
console.log("aakash" + "rawal");
console.log(typeof("jiedhfenfe"));
console.log(a);

const time = new Date().getHours();
let greeting;

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);

var value = 3
if (typeof value == "string") {
    console.log("True");
} else {
    console.log("False");
}



var car = { c_name: "bmw", model: "a1", color: "black", date };
console.log(car.c_name, car.model)

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

console.log(Math.PI);
console.log(Math.SQRT2);