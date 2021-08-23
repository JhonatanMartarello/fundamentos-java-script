let x = 123;
console.log(x.toString());
console.log((100 + 23).toString());

let y = 9.656;
console.log(y.toExponential(2)); // Returns 9.66e+0
console.log(y.toExponential(4)); // Returns 9.6560e+0

let z = 9.656;
console.log(z.toFixed(0)); // returns 10
console.log(z.toFixed(2)); // returns 9.66 is perfect for working with money.
console.log(z.toFixed(4)); // returns 9.6560
console.log(z.toFixed(6)); // returns 9.656000

let a = 9.656;
console.log(a.toPrecision()); // returns 9.656
console.log(a.toPrecision(2)); // returns 9.7
console.log(a.toPrecision(4)); // returns 9.656
console.log(a.toPrecision(6)); // returns 9.65600

console.log(a.valueOf());
console.log(x.valueOf());

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);


Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

// This returns 86400000
Number(new Date("1970-01-02"))

parseInt("-10");        // returns -10
parseInt("-10.33");     // returns -10
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN