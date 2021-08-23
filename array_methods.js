// syntax: const array_name = [item1, item2, ...]; 

const cars = [
    "Ferrari",
    "Volvo",
    "BMW"
];

const cars2 = [];
cars2[0] = "Ferrari";
cars2[1] = "Volvo";
cars2[2] = "BMW";

const car3 = new Array("Ferrari", "Volvo", "BMW");

console.log(cars[0]);
console.log(cars);

// const myArray = [];
// myArray[0] = Date.now; // Object
// myArray[1] = myFunction; // Function
// myArray[2] = cars; // Array


console.log("Number of elements: ", cars.length);
console.log("Sort array: ", cars.sort());
console.log("Access the last array element: ", cars[cars.length - 1]);


const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 1; i <= fruits.length; i++) {
    console.log("Fruit " + i + ": " + fruits[i - 1]);
}

fruits.push("Lemon"); // Adding Array Elements
fruits[fruits.length] = "Pineapple"; // Adding Array Elements

fruits.forEach(fruitsDescrition);
function fruitsDescrition(fruit) {
    console.log("forEach: ", fruit);
}

console.log("Is an array? ", typeof (fruits)); // array is an object.
console.log("Is an array? ", Array.isArray(fruits)); // solution how I know if a variable is an array
console.log("Is an array? ", fruits instanceof Array); // solution how I know if a variable is an array

console.log(fruits.toString());
console.log(fruits.join(" * ")); // you can specify the separator

console.log("Removido: " + fruits.pop(), "/ Lista atual: " + fruits.toString()); // removes the last element from an array

fruits.push("Kiwi"); // adds a new element to an array (at the end)
console.log(fruits.toString());

fruits.shift(); // removes the first array element
console.log(fruits.toString());

fruits.unshift("Banana"); // adds a new element to an array (at the beginning)
console.log(fruits.toString());

fruits[fruits.length] = "Melon";
console.log(fruits.toString());

fruits.splice(2, 2, "Pear", "Grape"); // Befone: Banana,Orange,Apple,Mango,Lemon,Kiwi,Melon / After: Banana,Orange,Pear,Grape,Lemon,Kiwi,Melon
console.log(fruits.toString());

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(0, 1); // Removes the first element
console.log(fruits2.toString());

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// Concatenate (join) myGirls and myBoys
const myChildren = myGirls.concat(myBoys);
console.log(myChildren.toString());

const myChildren2 = myChildren.concat("Peter");
console.log(myChildren2.toString());


const citrus = fruits.slice(3); // method slices out a piece of an array into a new array.
console.log(citrus.toString());

const citrus2 = fruits.slice(1, 3); // start argument, end argument
console.log(citrus2.toString());