let x = new Date(2022,11,25,12,45,34,7);    //you can manually store (year,month,day,hour,minute,second,mili-second)
let y = new Date();       //you can also store current time and date 

let z = new Date("October 16,2021 11:30:34"); //also store like this

console.log(x);
console.log(y);
console.log(z);

console.log(x.getTime());    //gives mili-second from 1970 to x
console.log(y.getFullYear()); // gives year
console.log(z.getMonth());   // gives month
console.log(x.getHours());   //gives hour
console.log(x.getMinutes());   //gives minute
console.log(x.getMilliseconds());  //gives mili-second

// z.setFullYear(2022);   //for changing year
// console.log(z);

console.log(x);
x.setDate(x.getDate()+ 50);
console.log(x);