let person = {
    firstName: "Vaidik",
    lastName: "Patel",
    age: 22,

    // getName: function(){
    //     return this.firstName.toUpperCase();
    // }

    //you want to give manipulated data or changed data then getter is used
    get getName(){  //getter method used for get data
        return this.firstName.toLowerCase();
    },
    
    //you want to set data like remove abusive words from comment
    set setName(n){ //setter method used for set data
         this.firstName= n.toUpperCase();
    } 
}
console.log(person.getName);
person.setName="vd";
console.log(person);

