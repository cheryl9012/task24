"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
let fruitA = ("Mango");
let fruitB = ("Apple");
console.log(fruitA === fruitB);
console.log(fruitA !== fruitB);
// • Tests using the lower case function
let name1 = ("Sheryl");
console.log(name1.toLocaleLowerCase() === "Sheryl");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1 = 10;
let number2 = 5;
console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
// • Tests using "and" and "or" operators
let condition1 = true;
let condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
// • Test whether an item is in a array
let fruit = ["Apple", "Mango", "Cherry", "Kiwi"];
console.log(fruit.includes("Apple"));
console.log(fruit.includes("Kiwi"));
// • Test whether an item is not in a array
console.log(!fruit.includes("Mango"));
console.log(fruit.includes("Cherry"));
