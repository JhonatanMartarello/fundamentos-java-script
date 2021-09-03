// Before
hello = function () {
    return "Hello World!";
}

console.log(hello());

// With Arrow Function
hello2 = () => {
    return "Hello World!";
}

console.log(hello2());

// Arrow Function Return Value by Default
hello3 = () => "Hello World!";
console.log(hello3());

// Arrow Function With Parameters:
hello4 = (val) => "Hello World, " + val;
console.log(hello4("Jhonatan"));

// Arrow Function Without Parentheses:
hello5 = val => "Hello World, " + val;
console.log(hello5("Aline"));