// // normal function statement
// function sayHi(){
//     console.log("Hello World");
// }
// sayHi();

function Hello(callback){
    callback();
}

// Functional Expression
let sayHello = function(){
    console.log("Hello Universe");
}
Hello(sayHello);
console.log("END");