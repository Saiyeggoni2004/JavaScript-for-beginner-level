// JavaScript Arrays Overview and Examples

// === Creating Arrays ===
let marks = [97, 82, 75, 64, 36];
let heroes = ["Iron Man", "Thor", "Hulk", "Shaktimaan", "Spiderman", "Ant Man"];

// === Array Length ===
console.log(marks.length); // 5

// === Accessing Array Elements ===
console.log(marks[0]); // 97
console.log(marks[1]); // 82
console.log(marks[2]); // 75

// === Modifying Elements ===
marks[0] = 66;
console.log(marks); // [66, 82, 75, 64, 36]

// === Looping Through Arrays ===
// 1. for loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// 2. for...of loop
let cities = ["Delhi", "Pune", "Mumbai", "Hyderabad", "Gurgaon"];
for (let city of cities) {
  console.log(city.toUpperCase());
}

// Tracking index with for...of
let items = [270, 645, 300, 900, 50];
let index = 0;
for (let value of items) {
  console.log(`Value at index ${index} is ${value}`);
  index++;
}

// === Average Marks ===
let total = 0;
for (let value of marks) {
  total += value;
}
let avg = total / marks.length;
console.log(`Average marks of the class is ${avg}`);

// === Apply 10% Discount ===
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log(items); // [243, 580.5, 270, 810, 45]

// === Array Methods ===
let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];
foodItems.push("Chips");
foodItems.push("Burger", "Paneer");
console.log(foodItems);

let deletedItem = foodItems.pop();
console.log(deletedItem); // Paneer
console.log(foodItems);

let marksStr = marks.toString();
console.log(marksStr); // "66,82,75,64,36"
console.log(typeof marksStr); // string

let marvel = ["Thor", "Spiderman", "Iron Man"];
let dc = ["Superman", "Batman"];
let indian = ["Shaktimaan", "Krrish"];
let all = marvel.concat(dc, indian);
console.log(all);

marvel.unshift("Ant Man");
console.log(marvel);

let removed = marvel.shift();
console.log(removed); // Ant Man
console.log(marvel);

let sliced = all.slice(1, 3);
console.log(sliced); // ["Spiderman", "Iron Man"]

let copied = all.slice();
console.log(copied);

// === Splice Examples ===
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2); // remove 3,4
console.log(arr); // [1,2,5,6,7]

arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 0, 101, 102);
console.log(arr); // [1,2,101,102,3,4,5,6,7]

arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 1, 104);
console.log(arr); // [1,2,3,104,5,6,7]

arr.splice(4);
console.log(arr); // [1,2,3,104]

// === Practice Question ===
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies); // ["Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.splice(1, 1, "Ola");
console.log(companies); // ["Microsoft", "Ola", "Google", "IBM", "Netflix"]

companies.push("Amazon");
console.log(companies); // ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]
