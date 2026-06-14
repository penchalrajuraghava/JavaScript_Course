// Strings are most important concept of programming

/*  
String is an sequence of characters where is used to text 
 
we can declare Strings in three different ways

by using double quotes "penchal"
by using single quotes 'penchal'

by using string template literals `penchal`
*/

// examples

const firstName = "PenchalRaju";
const Job = "Teacher";
const birthyear = 2001;
const year = 2037;

const Final_result =
  "I'm" + firstName + ",a" + (year - birthyear) + "year old" + Job + "!";

console.log(Final_result);

const result = ` I 'm ${firstName} ,a ${year - birthyear} -  year old ${Job}`;
console.log(result);

// Strings methods

let text = "Javascript";

// length

console.log(text.length); //10

// you want last letter of the letter

console.log(text[text.length - 1]);

// or

console.log(text.charAt(text.length - 1)); // this one also returns same

// to uppercase()

console.log(text.toUpperCase());

// to lowerCase()

console.log(text.toLowerCase());

console.log(text[0]);

// trim()

console.log(text.trim()); // to remove the spaces

console.log(text.includes("s")); // return true or false

console.log(text.indexOf("script")); // returns the index value

// replace

let word = "Hello world";

console.log(word.replace("world", "java"));

// slice()

let letter = "javascript";
console.log(letter.slice(0, 3));

// to update only first letter capital

let meaning = "sUNNY";

let firstLetter = meaning[0].toUpperCase();

let remainingLetter = meaning.slice(1).toLowerCase();

console.log(firstLetter + remainingLetter);

// you want particular letter use charat

console.log(meaning.charAt(0));

let first_Name = "sunny";

console.log(
  first_Name.slice(0, -1) + first_Name[first_Name.length - 1].toUpperCase(),
);
