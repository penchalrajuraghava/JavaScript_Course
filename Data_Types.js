// Data Types

/*
 Primitive data types

 1.Number : Floating point of numbers 🫱 Used for decimals and integers  (let age = 23);

 2. String: Sequence of Characters 🫱 Used for text       (let firstName ="penchal raju")

 3. Boolean : Logical Type That can be only true or false 🫱 Used for taking decisions  (let fullAge =true)

 4. Undefined : Value taken by a variable that is not yet defined ('empty value')  let children;

 5. Null : Also meany empty value

 6. Symbol (ES2015) : Value that is unique and cannot be changed now [Not useful for now]

 7. BigInt (ES2020) : Large integers that the number type can hold
 
 !Note: javascript has dynamic typing we do not have to manually define the data type of value stored in a variable instead data types are determined automatically  [value has type NOT Variable]

*/

console.log(true);

let javaScriptIsFun = true;

console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun); // Boolean
console.log(typeof true); // Boolean
console.log(typeof 23); // Number
console.log(typeof "penchal"); // String

//console.log("penchal');  unexpected error token

console.log(typeof "penchal"); // String

javaScriptIsFun = "YES";

console.log(typeof javaScriptIsFun); // String

let year;

console.log(year); // undefined

console.log(typeof year); // undefined

year = 2001;

console.log(year); // 2001

console.log(typeof year); // number
