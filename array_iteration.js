const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
    console.log(value);
}

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction2);
console.log(numbers1.toString());
console.log(numbers2.toString());

function myFunction2(value) {
    return value * 2;
}


const over18 = numbers.filter(myFunction3);
console.log(over18.toString());

function myFunction3(value, index, array) {
  return value > 18;
}

let sum = numbers.reduce(myFunction4);
console.log(sum); // Results 99

function myFunction4(total, value) {
  return total + value;
}

let sum1 = numbers.reduce(myFunction5, 100);
console.log(sum1); // Results 199

function myFunction5(total, value) {
  return total + value;
}

let allOver18 = numbers.every(myFunction6);
console.log(allOver18);
function myFunction6(value) {
  return value > 18;
}

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);

let position2 = fruits.lastIndexOf("Apple") + 1;
console.log(position2);

console.log(fruits.includes("Mango"));

//--------------------------------------------

let first = numbers.find(myFunction7);
console.log(first);

function myFunction7(value, index, array) {
  return value > 18;
}

let first2 = numbers.findIndex(myFunction8);
console.log(first2);

function myFunction8(value, index, array) {
  return value > 18;
}

//--------------------------------------------

const arrayAbc = Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
console.log(arrayAbc.toString());

//--------------------------------------------

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits2.keys();

for (let x of keys) {
  console.log(x);
}