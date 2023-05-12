//hoist--> means to pull or to lift 
//hoisting in js--> In js all declaration of current scope will be hoist at scope's top, that is called hoisting.
//this is only true for declaration not for initialisation.


hello(); //in other languages this will ocuure as a error. 

function hello(){
    console.log(y);
    var y = 5;
    console.log("Hello world");
}

console.log(x);

var x=7; //in var x= 7; only var x; will be hoist not 7 with it.


//also it is for "var" only not for "let" & "const". 
/*
console.log(z); //this will give error that z is not initialised.
console.log(y); //this will give error that y is not initialised.

let z=8;
const y=7;
*/

//console.log(t);   //this will give error t is not defined
t=4;
console.log(t);


//strict mode 
// "use strict"
// console.log(r);     //now this will give error that r is not defined bcz of strict mode
// r=4;

