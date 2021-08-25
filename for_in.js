const person = {fname:"John", lname:"Doe", age:25};

// x = fname, lname, age;
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + " ";
// }
// console.log(txt);

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + " ";
}

console.log(txt);