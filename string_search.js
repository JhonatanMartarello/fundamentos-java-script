let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));    // Returns the index of (the position of) the first occurrence of a specified text in a string: 7

console.log(str.lastIndexOf("locate")); // Returns the index of the last occurrence of a specified text in a string: 21

console.log(str.indexOf("Jhonatan")); // Returns -1 if the text is not found.

console.log(str.indexOf("locate", 15)); //Both methods accept a second parameter as the starting position for the search.


let str2 = "Please locate where 'locate' occurs!";
console.log(str2.search("locate"))     // Returns 7. The search cannot take a second start position argument.

let text = "The rain in SPAIN stays mainly in the plain"; // string.match(regexp)
console.log(text.match(/ain/g))    // Returns an array [ain,ain,ain] 

let text2 = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/gi))   // Returns an array [ain,AIN,ain,ain]

let text3 = "Hello world, welcome to the universe."; // string.includes(searchvalue, start)
console.log(text3.includes("world"))    // Returns true if a string contains a specified value.

let text4 = "Hello world, welcome to the universe."; // string.startsWith(searchvalue, start)
console.log(text4.startsWith("Hello"))   // Returns true if a string begins with a specified value, otherwise false.

var text5 = "John Doe"; // string.endswith(searchvalue, length)
console.log(text5.endsWith("Doe"))    // Returns true if a string ends with a specified value, otherwise false.