"use strict";
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Tests for equality & ineqauality with strings
console.log("Is apple equal to apple?");
console.log(apple == apple);
console.log("Is apple not equal to apple?");
console.log(apple != apple);
// Tests using lowercase function
console.log("Is APPLE equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("Is APPLE not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical tests
// Equal to
console.log("Is ten equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("Is ten not equal to twenty?");
console.log(ten != 20);
// Greater than
console.log("Is ten greater than zero?");
console.log(ten > 0);
// Less than
console.log("Is twenty less than ten?");
console.log(20 < 10);
// greater than or equal to
console.log("Is ten greater than or equal to 5?");
console.log(ten >= 5);
// less than or equal to
console.log("Is twenty less than or equal to 10?");
console.log(twenty <= 10);
// Tests using "and" and "or" operators
// Using && (and)
console.log("Twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("Twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// Using || (or)
console.log("Twenty is greater than 50 or twenty is equal to 20");
console.log(20 < 50 || 20 == 20);
console.log("Twenty is greater than 50 or twenty is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is included in an array
console.log("Is orange included in my array?");
console.log(fruits.includes("orange"));
// Test whether an item is not included in an array
console.log("Is orange not included in my array?");
console.log(fruits.includes("orange"));
