//you can make objects inside object
//in JSON this kind of format is used
var user = {
    id: 101,
    email: "abc@gmail.com",
    personalInfo:{
        name: "Vaidik",
        address: {
            street: "abhvdfjh",
            city: "Ahmedabad",
            country: "India",
        }
    }
}
console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.country);