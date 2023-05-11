/*
let x = 4.2 ,y=4.7;
console.log(Math.ceil(x));
console.log(Math.ceil(y));  //gives upper integer value

console.log(Math.floor(x));
console.log(Math.floor(y)); //gives lower integer value

console.log(Math.round(x));
console.log(Math.round(y)); // after 0.5 gives upper and before gives lower

console.log(Math.trunc(x));
console.log(Math.trunc(y));  // just remove point from number

console.log(Math.pow(2,5)); //gives power 

console.log(Math.sqrt(100));  //gives square root

console.log(Math.min(23,4,56,7,8));  //gives min

console.log(Math.max(23,4,56,7,89));  //gives max
*/


//Math.random()
//let x = console.log(Math.random());  //it will give random number btwn 0-1

// let y = console.log(Math.floor(Math.random()*10)+1); //1-10

//if i want number between min and max then there is a formula

function getRandom(min,max){
    let y = console.log(Math.floor(Math.random() * (max-min+1)) + min);
}
getRandom(15,20);