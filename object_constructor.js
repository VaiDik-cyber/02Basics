// var student1 = {
//     firstName: "Vaidik",
//     lastName: "Patel",
//     age: 22,
//     class: 5
// }

//before ES6 there is no concept of class in js so then if you want to make any structure that is same for many object you just have to give value. for that object constructor is used.

//object constructor
function Student(first,last,age,cls){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.class = cls;
}

//prototype is class in js and all propeties of js is inherit from it.
Student.prototype.nationality="Indian";

//here you stored function inside variable so this variable is worked as a function.
Student.prototype.name= function(){
    return this.firstName + " " + this.lastName;
}

//assigning values to objects
var student1 = new Student("Vaidik","Patel",22,5);
var student2 = new Student("Perin","Patel",25,6);

student2.nationality = "korean"; //you can add property in particuler object

//but you can't change in object constructor directly like this,you have to use prototype class.

console.log(student1);
console.log(student2);
console.log(student1.name());
console.log(student2.nationality);