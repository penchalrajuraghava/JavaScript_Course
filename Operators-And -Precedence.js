// An operator is an symbol which is used between two operands

/* 
1.Arithmetic operators
2.Logical Operators
3. Relational Operators
4. Increment Operators
5.Ternary operator

*/

// 1. Arithmetic operators
let a = 10;
let b = 20;

console.log(a + b); // 30 Used for addition and or any string name adding like firstname and lastname positive number
console.log(a - b); //10  Used for subtraction for withdraw amount bank dislike count negative number
console.log(a * b); // 200 Used for calculations discount or any multiply marks
console.log(2 ** 3); // used for hard calculations 2*2*2
console.log(a / b); // used for average marks average speed average percentage like
console.log(a % 10); // it will give always give output remainder

// Relational Operators

// > < >= <= =

/* 
> greater than that means  suppose if value greater than like 20 is bigger than 18 it gives true we use this mainly in logic like if ifelse and switch while loop do while loop

< less than same example 20 less than 18 yes it was false because  
*/

// it always give output as true or false

// equal  to (==)

console.log(10 == 10); // true
console.log(10 == "10"); // true here it converts string "10" -> 10
console.log(10 !== 10); // false

// strict equal (===)

console.log(10 === 10); // true

console.log(10 === "10"); // false because it checks datatype strict type thats number === string -> false

// Not equal (!=) -> check values not equal or not

console.log(10 != 5); // true

console.log(10 != 10); // false

console.log(10 != "10"); // false string "10" converts -> 10 plane text 10!=10 false

// Strict Not Equal To (!==) -> Check value and type

console.log(10 !== "10"); // true

// Greater than (>)
console.log(10 > 5); // true because 10 is bigger than 5

console.log(5 > 10); // false because 5 is not bigger than 10

// less than (<)

console.log(10 < 20); // true

console.log(5 < 2); // false

// greater than equal (>=)

console.log(10 >= 5); // true

console.log(10 >= 10); // true

console.log(10 > 90); // false

// less than equal to (<=)

console.log(5 <= 9); // true

console.log(5 <= 2); // false

console.log(5 <= 5); // true

// interview questions

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(false == 0); // true  false =0 so 0==0 is true

console.log(false === 0); // false false =boolean and 0 is number  different data types

// Logical Operators

let age = 20;

let salary = 80000;

console.log(age > 18 && salary > 20000); // true

console.log(age >= 21 && salary >= 20000); // false

// note in And operator both values must be true other wise it will give output as false

// using (||)

console.log(age >= 21 || salary >= 20000); // true

console.log(age >= 21 || salary >= 100000); // false

// note in this case at least any one value must be true

// examples

console.log((true && false) || true); // true // true && false -> false => false || true -> true

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(false || true); // true
console.log(true || true); // true

console.log(false || false); // false

console.log(false && "penchal"); // false

console.log(false || "hello"); // "hello" suppose true || "hello" it gives true because it already true

// (!)

console.log(!false); // true

console.log(!true); // false

// Increment and decrement operators

let count = 0;

count++;
console.log(count); // 1

let a1 = 10;

let b1 = a1++;

console.log(a1);
console.log(b1);

console.log(++count);
console.log(count);

let x = 5;

console.log(x--);
console.log(x);

console.log(--x);

/* 
x =5

x++ // 5

x // 6

++x // 6


a =10

a-- // 10
a // 9

--a 8

a=10
b=a++ 

a // 11
b //10

b=++a 

a // 11
b // 11

a =10
b=a--

a // 9
b // 10

b=--a

a // 9
b // 9
*/

//Assignment operator

let y = 10; // Assignment operator right side value assign to left side

console.log((y += 10)); // 20  ->  x =x+10
console.log((y -= 10)); // 10  -> y=y-10

console.log((y *= 10)); // 100  -> y=y*10

console.log((y /= 10)); // 10
console.log((y %= 10)); // 0

// operator precedence

console.log(43 + 20 - 10 + 22); // left to right

console.log(2 * 8 + 4 ** 5 - 2 * 4); // 4*4*4*4*4 = 1024 -> 2*8+1024-2*4 => left to right 16+1024 =1040 -> 1040 -8 => 1032
