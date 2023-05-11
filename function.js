//pre-defined function
//user-defined function

/*
function add(){
    if(arguments.length==0)
    {
        console.log("No arguments passed. ");
    }
    else{
        let sum=0;
        for(let i=0;i<arguments.length;i++){
            sum=sum+arguments[i];
        }
        console.log(sum);
    }
}
let addition = add;
addition(5,7);        //you can also call by variable.
add(5,7);
add(5,7,8,9);
*/

/*
setTimeout(function () {           //setTimeout is for set timing.
    console.log("Hello!");
}, 3000);
*/


// Immediately invoked function

(function greet(){
    let msg = "hello third party";
    console.log(msg);
}
)();
