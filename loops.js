// =======================
// JAVASCRIPT LOOP EXAMPLES
// =======================

// 1. FOR LOOP - Print "Apna College" five times
console.log("1. for loop - Printing 'Apna College' 5 times:");
for (let count = 1; count <= 5; count++) {
    console.log("Apna College");
}

// 2. FOR LOOP - Sum of first n numbers
console.log("\n2. for loop - Sum of first n numbers:");
let sum = 0;
let n = 5;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum from 1 to", n, "is:", sum); // Output: 15

// 3. INFINITE LOOP (DO NOT RUN) - Example only
console.log("\n3. Infinite loop example (commented out for safety):");
// let i = 1;
// for (; i >= 0; i++) {
//     console.log(i); // This will run forever
// }

// 4. WHILE LOOP - Print numbers from 1 to 5
console.log("\n4. while loop - Printing numbers from 1 to 5:");
let i = 1;
while (i <= 5) {
    console.log("i =", i);
    i++;
}

// 5. DO-WHILE LOOP - Runs at least once
console.log("\n5. do-while loop - Runs at least once:");
let j = 20;
do {
    console.log("Apna College (runs once even though condition is false)");
    j++;
} while (j <= 10);

// 6. FOR-OF LOOP - Iterate through a string
console.log("\n6. for-of loop - Iterating through string 'JavaScript':");
let str = "JavaScript";
for (let char of str) {
    console.log(char);
}

// 6.1. FOR-OF LOOP - Count characters in a string
console.log("\n6.1. for-of loop - Counting characters:");
let size = 0;
for (let char of str) {
    size++;
}
console.log("String size is =", size); // Output: 10

// 7. FOR-IN LOOP - Iterate through object keys and values
console.log("\n7. for-in loop - Iterating through object:");
let student = {
    name: "John Doe",
    age: 21,
    cgpa: 8.2,
    isPass: true
};
for (let key in student) {
    console.log("key =", key, ", value =", student[key]);
}

// 8. EVEN NUMBERS - Using for loop
console.log("\n8. for loop - Printing even numbers from 1 to 10:");
for (let num = 1; num <= 10; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 9. ODD NUMBERS - Using while loop
console.log("\n9. while loop - Printing odd numbers from 1 to 10:");
let k = 1;
while (k <= 10) {
    if (k % 2 !== 0) {
        console.log(k);
    }
    k++;
}

// 10. GUESSING GAME (basic example with prompt - for browser only)
// Uncomment and run in browser console
/*
console.log("\n10. Guessing game:");
let secretNumber = 7;
let userGuess;
do {
    userGuess = prompt("Guess the number (between 1 and 10):");
} while (Number(userGuess) !== secretNumber);
console.log("You guessed it right!");
*/
