var str = "Aakashkumar Rawal";

var str1 = str.slice(6, 11);
console.log(str1);

var str2 = str.slice(-11, -6);
console.log(str2);

var str3 = str.substring(5, 11);
console.log(str3);

var str4 = str.substring(11);
console.log(str4);

var str5 = str.substr(5, 6);
console.log(str5);

var str6 = str.replace("Aakash", "Akki");
console.log(str6);

var str7 = str.replace(/Aakash/i, "Akki"); // i is use for case sensitive
console.log(str7);

var str8 = str.charAt(0);
console.log(str8);

var str8 = str.charCodeAt(0);
console.log(str8);

console.log(str[6]);
console.log(str.lastIndexOf("kumar"));
console.log(str.indexOf("kumar", 6));

console.log(str.toLocaleUpperCase());