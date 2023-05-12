let person = {
    firstName: "Vaidik",        
    lastName: "Patel",
    // sayHello: function (){
    //     console.log("Hello! ");
    // }
    sayHello(){     //after ES6 this introduced
        console.log("Hello! I'm "+ this.firstName + ". I have "+ car.brand+ " " + car.model+".");   //you can use another object properties also.
    }
};

/*
person.sayHello = function (){
    console.log("Hello! ");
}
*/

/*
function greet(){
    console.log("Hello! ");
}
person.sayHello = greet;  //here greet is not function
*/

let car = {
    brand:"Tata",
    model:"safari",
}

person.sayHello();

function a () {
    console.log(arguments.length);
}
a(3,5,6);
// In JavaScript, the arguments object is an array-like object that contains all the arguments passed to a function. It allows you to access the arguments dynamically, regardless of the number of arguments specified in the function's definition.

// However, the arguments object has some limitations. It does not have access to array methods like map, filter, or reduce, and you cannot apply array methods directly to it. Additionally, it does not support some of the functionalities provided by the rest parameter syntax.

// The rest parameter syntax, represented by the ellipsis (...), allows you to represent an indefinite number of arguments as an actual array. It was introduced in ES6 as a more convenient and flexible alternative to the arguments object.

// Here are some advantages of using the rest parameter syntax over the arguments object:

// Array functionality: With the rest parameter, you can use array methods directly on the arguments. For example, you can easily apply map, filter, or reduce operations without converting the arguments object into an array.

// Clarity and readability: The rest parameter explicitly indicates that a function accepts multiple arguments, making the code more readable and self-explanatory compared to using the arguments object.

// Arrow function compatibility: Arrow functions do not have their own arguments object. Instead, they inherit the arguments object from the enclosing scope. However, arrow functions do support the rest parameter syntax, making it easier to work with arguments in arrow functions.

// Default parameter values: Rest parameters can be combined with default parameter values, allowing you to define optional arguments with default values. This is not possible with the arguments object.

// Overall, the rest parameter syntax provides a more intuitive and modern way to handle variable numbers of arguments in JavaScript, offering improved functionality and code readability compared to using the arguments object.





