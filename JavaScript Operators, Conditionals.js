// JavaScript Operators, Conditionals, and User Interaction

// ----------------------------
// COMMENTS
// ----------------------------

// Single-line comment: This is a single-line comment
/*
Multi-line comment: This explains that the code below prints
"Hello World" on the console.
*/

// ----------------------------
// ARITHMETIC OPERATORS
// ----------------------------

let a = 5;
let b = 2;

console.log("Addition:", a + b); // 7
console.log("Subtraction:", a - b); // 3
console.log("Multiplication:", a * b); // 10
console.log("Division:", a / b); // 2.5
console.log("Modulus:", a % b); // 1
console.log("Exponentiation:", a ** b); // 25

// ----------------------------
// UNARY OPERATORS
// ----------------------------

let x = 5;
console.log("Pre-increment:", ++x); // 6
x = 5;
console.log("Post-increment:", x++); // 5
console.log("After Post-increment:", x); // 6

x = 5;
console.log("Pre-decrement:", --x); // 4
x = 5;
console.log("Post-decrement:", x--); // 5
console.log("After Post-decrement:", x); // 4

// ----------------------------
// ASSIGNMENT OPERATORS
// ----------------------------

let y = 5;
y += 4; // y = y + 4
console.log("+= operator:", y); // 9

y = 5;
y -= 4;
console.log("-= operator:", y); // 1

y = 5;
y *= 4;
console.log("*= operator:", y); // 20

y = 5;
y /= 4;
console.log("/= operator:", y); // 1.25

y = 5;
y %= 4;
console.log("%= operator:", y); // 1

y = 5;
y **= 4;
console.log("**= operator:", y); // 625

// ----------------------------
// COMPARISON OPERATORS
// ----------------------------

console.log("== operator:", 5 == "5"); // true
console.log("=== operator:", 5 === "5"); // false
console.log("!= operator:", 5 != 2); // true
console.log("!== operator:", 5 !== "5"); // true
console.log("> operator:", 5 > 3); // true
console.log("< operator:", 5 < 3); // false
console.log(">= operator:", 5 >= 5); // true
console.log("<= operator:", 5 <= 5); // true

// ----------------------------
// LOGICAL OPERATORS
// ----------------------------

a = 6;
b = 5;

console.log("Logical AND:", (a > b) && (a === 6)); // true
console.log("Logical OR:", (a < b) || (a === 6)); // true
console.log("Logical NOT:", !(a < b)); // true

// ----------------------------
// CONDITIONAL STATEMENTS
// ----------------------------

// IF statement
let age = 25;
if (age >= 18) {
  console.log("You can vote");
}

// IF-ELSE statement
let mode = "light";
let color;
if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log("Color:", color);

// ODD-EVEN CHECK
let num = 7;
if (num % 2 === 0) {
  console.log(num + " is Even");
} else {
  console.log(num + " is Odd");
}

// ELSE IF statement
age = 45;
if (age < 18) {
  console.log("Junior");
} else if (age > 60) {
  console.log("Senior");
} else {
  console.log("Middle");
}

// GRADING SYSTEM
let score = 75;
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log("Your grade was: " + grade);

// TERNARY OPERATOR
age = 25;
let result = (age >= 18) ? "Adult" : "Not Adult";
console.log(result); // "Adult"

age = 16;
result = (age >= 18) ? "Adult" : "Not Adult";
console.log(result); // "Not Adult"

// SWITCH STATEMENT
let fruit = "Papaias";
switch (fruit) {
  case "Oranges":
    console.log("It's an orange.");
    break;
  case "Mangoes":
    console.log("It's a mango.");
    break;
  case "Papaias":
    console.log("It's a papaya.");
    break;
  default:
    console.log("Unknown fruit.");
}

// ----------------------------
// PROMPT & ALERT (Browser Based)
// ----------------------------

// Example 1: Simple Alert
alert("Welcome to our website!");

// Example 2: Prompt for name and greet
let name = prompt("What's your name?");
console.log("Hello, " + name);

// Example 3: Prompt for age and voting eligibility
let age = prompt("Enter your age:");
age = parseInt(age);

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// Example 4: Check if number is a multiple of 5
let number = prompt("Enter a number:");
number = parseInt(number);

if (number % 5 === 0) {
  console.log(number + " is a multiple of 5");
} else {
  console.log(number + " is not a multiple of 5");
}

// Example 5: Personalized Alert
let user = prompt("Enter your name:");
alert("Welcome, " + user + "! Enjoy your visit.");

// Note: prompt/alert only work in browsers, not in Node.js or non-browser environments.
