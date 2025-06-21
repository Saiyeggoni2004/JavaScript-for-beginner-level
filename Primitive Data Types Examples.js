// Primitive Data Types Examples

// Number
let age = 24;
let price = 1.50;
console.log(typeof age); // number
console.log(typeof price); // number

// String
let fullName = "Tony Stark";
console.log(typeof fullName); // string
console.log("ABCD" + 123); // "ABCD123"

// Boolean
let isFollow = true;
console.log(typeof isFollow); // boolean

// Undefined
let x;
console.log(x); // undefined
console.log(typeof x); // undefined

// Null
let y = null;
console.log(y); // null
console.log(typeof y); // object (known JavaScript quirk)

// BigInt
let bigNum = BigInt("123456789012345678901234567890");
console.log(typeof bigNum); // bigint

// Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // symbol


// Non-Primitive Data Type (Object)

// Student Object
const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true
};
console.log(student);
console.log(typeof student); // object
console.log(student.age); // Accessing with dot notation
console.log(student["fullName"]); // Accessing with bracket notation

// Updating properties
student.age = student.age + 1;
student.fullName = "Rahul Sharma";
console.log(student.age); // 21
console.log(student.fullName); // Rahul Sharma


// Amazon Product Object
const product = {
    name: "Ball Pen",
    rating: 4,
    offer: 5, // 5% offer
    price: 270
};
console.log(product);
console.log(typeof product); // object


// Instagram Profile Object
const profile = {
    userName: "@shradhakhapra",
    isFollow: false,
    followers: 123456,
    following: 4
};
console.log(profile);
console.log(typeof profile); // object
console.log(typeof profile.userName); // string
console.log(typeof profile.isFollow); // boolean
console.log(typeof profile.followers); // number
