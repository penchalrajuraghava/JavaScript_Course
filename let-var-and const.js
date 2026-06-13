/* 
let var and const
*/

// these are used to create variables

var name = "penchal";

// let age = 10;

const country = "India";

// 1. var

var city = "Hyderabad";

console.log(city); // Hyderabad

// can be reassigned

var city = "mumbai";

console.log(city); // mumbai // reassigned allowed

// var works inside a function
// var is function scope

function test() {
  var x = 10;
  console.log(x);
}

test();

//console.log(x);  x is not defined because var is function scope

// problem with var

if (true) {
  var salary = 90000;
}

console.log(salary); // var ignores block scope

// 2. let

let age = 24;

// can re assign and let is block scoped

age = 30;

console.log(age); // 30 let reassigned allowed

// cannot redeclare

// let age = 90; // age is al ready declared

// Block scope

if (true) {
  let employeeSalary = 20000;
}

// console.log(employeeSalary); // employeeSalary is not defined

// because let is block scope employeeSalary is not accessible

// 3. const used for fixed value

const price = 859;

// can reassign allowed

// price = 90; not allowed typeerror

/* 
const country ="india"
const country ="USA"

cannot be redeclared

const country; must initiated

const country ="india" // correct way


if(true){

const salary =52000
}

console.log(salary) // error
*/

// Hoisting

/* 
 console.log(name) // undefined

 var name ="penchal raju" 


 let 

 console.log(age) // referenceerror
 let age =20


 Because of TDZ (Temporal dead zone)

 memory phase
 age = uninitialized

 tdz starts 
 console.log(age)

 tdz ends here
 let age =70;
*/

/* 
console.log(a)  undefined
var a =10

console.log(b) // uninitialized reference error
let b =90

console.log(c) // uninitialized reference error
const c =90
*/

/* 
rules for modern javascript

use const by default
need to change value
use let 
Avoid var in modern projects
*/
