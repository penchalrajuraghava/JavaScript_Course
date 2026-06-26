// conditional statements like if and if else and else if

/* 
conditional statements are used to make decisions while writing a code 

examples: if he got more marks he si topper, if she fails not promoted to another section
if it was raining wear umbrella if hot get inside if i need amount from my bank my balance is more than amount then withdraw or insufficient funds
if green go if there is no water in bottle fill water  in the bottle if fully charged unplug if charge was 20% ask to charge the phone if password has 8 letters then it will be strong password 
*/

// some examples

// some automatically type coercion because suppose if(12) => 12 converted to boolean because anything number expect 0 is true

if (12) {
  //  here 12 converts into boolean 0 -> false 1-> true
  console.log("Hi");
} else {
  console.log("not");
}

// we can omit the curly braces you know er are printing only one logic

if (12) console.log("Hello"); // we know that 12 is true

if (false) {
  // true means when ever it was true first condition will execute then skip the else block
  // if condition false then it will enter the else block you can write any logic you call functions in conditions numbers everything
  console.log("print the condition");
} else {
  console.log("Not to print i don't have valid reasons");
}

// else  if

let imperium = false;

let isVip = true;

if (imperium) {
  console.log("enjoy the premium content on hotstar");
} else if (isVip) {
  console.log("Enjoy the Vip content more to buy premium");
} else {
  console.log("Pls subscribe to watch the movies");
}

/* 
let imperium = false;

let isVip = true;

if (imperium) { here it false so condition 1 will not execute
  console.log("enjoy the premium content on hotstar"); xxxxx
} else if (isVip) { true it will enter and inside the block and start execute inside this block 
  console.log("Enjoy the Vip content more to buy premium");
} else { not enter here because already condition 2 is true  if both are false then only it will execute else
  console.log("Pls subscribe to watch the movies");
}
*/

let isUserPremium = false;
let isUserVip = true;
let isUserSports = true;
let Userdiscovery = true;
let userAccorn = true;
if (isUserVip) {
  console.log("hello");
} else if (isUserSports) {
  console.log("HI sports");
} else if (isUserPremium) {
  console.log("premium");
} else {
  console.log("bye");
}

console.log("end");

// nested if else

if (isUserPremium) {
  if (Userdiscovery) {
    console.log("Enjoy the content both premium and discovery");
  } else {
    console.log("enjoy only premium");
  }
} else {
  console.log("pls subscribe to watch the content");
}

console.log("--------------------------------------------------");

if (isUserPremium) {
  if (isUserVip) {
    if (userAccorn) {
      console.log("Enjoy all three premium content");
    } else {
      console.log("Enjoy ony premium and vip");
    }
  }
} else if (userAccorn) {
  console.log("enjoy both premium and accorn");
}
