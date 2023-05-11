let book = ["math","physics","chem","computer"];

let book1 = new Array("math","physics","chem","computer");

let asset = [1,3,4.5,"math"];
/*
console.log(book);
console.log(book1);
console.log(asset);
*/

/*
book1[2] = "Guj";
console.log(book1);
*/

// console.log(book.length);

/*
book.push("Sanskrit"); //add element at end
console.log(book);

book.unshift("Urdu");  //add element at first
console.log(book);

book.pop();
console.log(book);
book.pop();            //remove from Back
console.log(book);
book.shift();          //remove from front
console.log(book);

console.log(book1);
book1.splice(1,2);     //remove 2 element from index 1
console.log(book1);
*/

/*
book = [];
console.log(book);      //array will empty

book1.length = 0;
console.log(book1);      //array will empty
*/

/*
let boooook = "math";
console.log(Array.isArray(boooook));  // check element is array or not
*/

/*
let text = "This is new Array";
// let wordArray = text.split("s");   // split array where 's' occure
let wordArray = text.split(" ");
console.log(wordArray);
*/

/*
let wordArray = book.join("-");       //join array element by '-'
console.log(wordArray);
*/

/*
let newBook = book.concat(book1,asset);  //add multiple array in one
console.log(newBook);
*/

/*
let bookWithPages = [
    ["math",300],
    ["physics",400],
    ["bio",600]
]
console.log(bookWithPages[1]);
console.log(bookWithPages[1][0]);
*/

book.forEach(myfu);

function myfu(value){
    console.log(value);
}