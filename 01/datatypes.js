"use strict";
// use strict is used to work according to new JS norms

//alert ("hello") used with html in console

console.log("yoo");
 
//bigint
//symbol is used for uniqueness

//object

console.log(typeof null); // type of null is object

// symbols
const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

//symbol is unique so it is used to store any value uniquely

//arrays

const pokemon = ["pikacju","charbandar","bulahurrr"]
console.log();
console.log("object below");

let obj = {
    name: "Shanks",
    age:22
};
//console.table(pokemon[0],pokemon[1])
// functions

console.log("functions below");
console.log();

let myFunction = function(){
    console.log("print ");
    
}
myFunction();