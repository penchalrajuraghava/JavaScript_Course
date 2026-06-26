// positive number or not

let num = -10;

if (num >= 0) {
  console.log("Positive number");
} else {
  console.log("Negative number");
}

// even or odd

let number = 25;

if (number % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// Greatest of number

let a = 10;
let b = 20;

if (a > b) {
  console.log(a, "is bigger number");
} else {
  console.log(b, "is bigger number");
}

// voting eligibility

let age = 20;

if (age >= 18) {
  console.log("You are eligible for vote");
} else {
  console.log("Not eligible");
}

// largest of three numbers

let x = 55,
  y = 21,
  z = 37;

if (x > y && x > z) {
  console.log(x);
} else if (y > x && y > x) {
  console.log(y);
} else {
  console.log(z);
}

// leap Year

let year = 2024;

// Leap year conditions:
// Divisible by 400
// OR divisible by 4 but not by 100

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

// Number was divisible by 5 and 11

let num1 = 55;

if (num1 % 5 == 0 && num1 % 11 == 0) {
  console.log("Divisible");
} else {
  console.log("Not divisible");
}

// Alphabet or Not

let c = "A";

let ch = c.charCodeAt(0);

if ((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122)) {
  console.log("Alphabet");
} else {
  console.log("Not Alphabet");
}

let marks = 86;

// Calculate grade using else if ladder

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 35) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

let units = 180;

let bill;

if (units <= 100) {
  bill = units * 3;
} else if (units <= 150) {
  bill = units * 5;
} else if (units <= 200) {
  bill = units * 7;
} else {
  bill = units * 10;
}

console.log("Bill =", bill);

let month = 12;

if (month === 1 || month === 2 || month === 3) {
  console.log("Winter");
} else if (month >= 4 && month <= 5) {
  console.log("Summer");
} else if (month >= 6 && month <= 9) {
  console.log("Rainy");
} else if (month >= 10 && month <= 11) {
  console.log("Atum");
} else {
  console.log("InValid month");
}

let a = 60;
let b = 60;
let c = 60;

// The sum of angles in a triangle must be exactly 180

if (a + b + c === 180) {
  console.log("Valid Triangle");
} else {
  console.log("Invalid Triangle");
}
