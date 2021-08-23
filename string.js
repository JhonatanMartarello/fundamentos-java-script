function quantidadeDeCaracteres(text) {
    document.getElementById("quantidade").innerHTML = text.length;
};


console.log("text".length);

console.log("Apple, Banana, Kiwi".slice(0, 5)); //Result: Apple (0, 1, 2, 3, 4). Position end is 5 - 1 = 4;
console.log("Apple, Banana, Kiwi".slice(-12, -6)); // Banana

console.log("Apple, Banana, Kiwi".substring(0, 5)); //is similar to slice(). But cannot accept negative indexes.

console.log("Apple, Banana, Kiwi".substr(7, 6)); //the second parameter specifies the length of the extracted part.

let text = "Please visit Microsoft!";
console.log(text.replace("Microsoft", "W3Schools"));

let text2 = "Please visit Microsoft and Microsoft!";
console.log(text2.replace(/Microsof/g, "W3Schools")); //replace all matches, use a regular expression with a /g flag

let textCase = "Hello World";
console.log(textCase.toUpperCase());
console.log(textCase.toLowerCase());

let hello = "Hello";
let world = "World";
let helloWorld = hello.concat(" ", world);
console.log(helloWorld);

let helloWorldWithSpaces = "          Hello World!           ";
console.log(helloWorldWithSpaces.trim()); //Returns "Hello World!"

let number = "5";
console.log(number.padStart(4,0)); //Returns 0005
console.log(number.padEnd(4,0)); //Returns 5000

let text3 = "Hello World!";
console.log(text3.charAt(0)); //Returns H
console.log(text3[0]) //Returns H

//Converted a String to an Array
let text4 = "Hello World!";
console.log(text4.split(" "));