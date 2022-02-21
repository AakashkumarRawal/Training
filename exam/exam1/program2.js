numberArray = [0,1,2,3,4,5,6,7,8,9];
letterArray = ['a','b','c','d','e'];
 
for (var i=0 ; i <10 ; i++){
 
let a = [numberArray[(Math.floor(Math.random() * 10))],letterArray[(Math.floor(Math.random() * 5))]];
let b = [numberArray[(Math.floor(Math.random() * 10))],letterArray[(Math.floor(Math.random() * 5))]];
let c = b[(Math.floor(Math.random()*2))];
 
// console.log(a,b,c);
 
a.push(c);
 
// console.log(a.sort())
 
newarray=[];
 
while(a.length>0){
let index = Math.floor(Math.random()*a.length);
// console.log(index);
let value = a[index];
a.splice(index,1);
newarray.push(value);
}
console.log(newarray);
 
}

