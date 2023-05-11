//object
/*
let person = {
    firstName: "Vaidik",        //properties
    // "first name": "vaidik",   //you can declare like this but you can't use "person.first name". you have to use 'person["first name"]'.
    lastName: "Patel"
};
*/

let person = new Object();

person.firstName ="Vaidik";
person.lastName = "Patel";
/*
console.log(person);
console.log(person.firstName); 

person.firstName = "VD";   //we can change property like this.
console.log(person.firstName);
console.log(person);

console.log(person.age);
person.age = 22;
console.log(person);

delete person.lastName;
console.log(person);

console.log('height' in person);
*/

// for(let key in person){
//     console.log(key + ": " + person.key);  //gives undefined

// }

for(let key in person){
    console.log(key + ": " + person[key]);  //gives every property of person

}



// console.log(person['first name']);
//console.log(person.'first name'); //gives error
