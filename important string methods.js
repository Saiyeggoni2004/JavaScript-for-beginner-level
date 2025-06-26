// STRING METHODS AND PROPERTIES EXAMPLES

// 1. length Property
let myString = "Hello";
console.log("Length of 'Hello':", myString.length); // Output: 5

let escapedString = "Hello\tWorld";
console.log("Length of 'Hello\\tWorld':", escapedString.length); // Output: 11

// 2. toUpperCase()
let str = "college";
let upperStr = str.toUpperCase();
console.log("Uppercase:", upperStr); // Output: "COLLEGE"

// 3. toLowerCase()
let upperCaseStr = "HELLO WORLD";
let lowerStr = upperCaseStr.toLowerCase();
console.log("Lowercase:", lowerStr); // Output: "hello world"

// 4. trim()
let spacedStr = "   JavaScript Examples   ";
let trimmedStr = spacedStr.trim();
console.log("Trimmed string:", `"${trimmedStr}"`); // Output: "JavaScript Examples"

// 5. slice()
let alphabet = "ABCDEFGHI";
console.log("Slice from index 1 to 3:", alphabet.slice(1, 3)); // Output: "BC"
console.log("Slice from index 5 to end:", alphabet.slice(5));  // Output: "FGHI"

// 6. concat()
let str1 = "Java";
let str2 = "Script";
let combined1 = str1.concat(str2);
console.log("Concatenated using concat():", combined1); // Output: "JavaScript"

let combined2 = str1 + str2;
console.log("Concatenated using +:", combined2);        // Output: "JavaScript"

let greeting = "Hello";
let number = 123;
console.log("Concatenate string and number:", greeting + number); // Output: "Hello123"

// 7. replace()
let originalStr = "Hello Hello";
let replacedStr = originalStr.replace("Hello", "Hi");
console.log("Replace first 'Hello':", replacedStr); // Output: "Hi Hello"

// 8. charAt()
let sentence = "I love JavaScript";
console.log("Character at index 0:", sentence.charAt(0)); // Output: "I"
console.log("Character at index 2:", sentence.charAt(2)); // Output: "o"
