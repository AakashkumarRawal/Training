var category = [
	"movie",
	"news",
	"education",
	"sports",
	"politics"
 ]
 var age = [
	"teenager",
	"adult"
 ]
 
 farray=[];
 var tm=0,am=0,tn=0,an=0,te=0,ae=0,tsx=0,asx=0,tp=0,ap=0,tt=0,ta=0;
 for(i=0;i<100;i++){
 
	let a = Math.floor((Math.random() * 100));
	let b = category[Math.floor((Math.random() * category.length))];
	let c = age[Math.floor((Math.random() * age.length))];
 
	var obj = {age: c, category:b, Visitors:a }
  
	if(obj.age == "teenager" && obj.category == "movie" ){
    	tm= tm+ obj.Visitors;	
	}
 
	if(obj.age == "adult" && obj.category == "movie" ){
    	am= am+ obj.Visitors;	
	}
 
	if(obj.age == "teenager" && obj.category == "news" ){
    	tn= tn+ obj.Visitors;	
	}
 
	if(obj.age == "adult" && obj.category == "news" ){
    	an= an+ obj.Visitors;	
	}
  
  
	if(obj.age == "teenager" && obj.category == "education" ){
    	te= te+ obj.Visitors;	
	}
 
	if(obj.age == "adult" && obj.category == "education" ){
    	ae= ae+ obj.Visitors;	
	}
  
	if(obj.age == "teenager" && obj.category == "sports" ){
    	tsx= tsx+ obj.Visitors;	
	}
 
	// console.log(tsx);
 
	if(obj.age == "adult" && obj.category == "sports" ){
    	asx= asx+ obj.Visitors;	
	}
 
	if(obj.age == "teenager" && obj.category == "politics" ){
    	tp= tp+ obj.Visitors;	
	}
 
	if(obj.age == "adult" && obj.category == "politics" ){
    	ap= ap+ obj.Visitors;	
	}
 
	if(obj.age == "teenager"){
    	tt= tt + obj.Visitors;
	}
 
  
	if(obj.age == "adult"){
    	ta= ta + obj.Visitors;
	}
  
}
 
let totalv = tt + ta;
 
let totaltp = ((tt*100)/(totalv));
let totalap = ((ta*100)/(totalv));
 
let totaltmp = ((tm*totaltp)/(tt));
let totalamp = ((am*totalap)/(ta));
// console.log("tp: " + totaltmp);
// console.log(totalamp);
 
let totaltnp = ((tn*totaltp)/(tt));
let totalanp = ((an*totalap)/(ta));
// console.log("tp: " + totaltnp);
// console.log(totalanp);
 
let totaltep = ((te*totaltp)/(tt));
let totalaep = ((ae*totalap)/(ta));
// console.log("tp :" + totaltep);
// console.log(totalaep);
 
let totaltsp = ((tsx*totaltp)/(tt));
let totalasp = ((asx*totalap)/(ta));
// console.log("tp: " + totaltsp);
// console.log(totalasp);
 
 
let totaltpp = ((tp*totaltp)/(tt));
let totalapp = ((ap*totalap)/(ta));
// console.log("tp: " + totaltpp);
// console.log(totalapp);
 
console.log("movie: "+ Math.round(totaltmp)+"%"+" "+Math.round(totalamp)+"%")
console.log("news: "+ Math.round(totaltnp)+"%"+" "+Math.round(totalanp)+"%")
console.log("education: "+ Math.round(totaltep)+"%"+" "+Math.round(totalaep)+"%")
console.log("sport: "+ Math.round(totaltsp)+"%"+" "+Math.round(totalasp)+"%")
console.log("politics: "+ Math.round(totaltpp)+"%"+" "+Math.round(totalapp)+"%")
