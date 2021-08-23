const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the elements of fruits
console.log(fruits);

fruits.reverse(); // Reverses elements in an array
console.log(fruits);

/**
 * By default, the sort() function sorts values as strings.
 * If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
 * You can fix this by providing a compare function:
 */
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a, b){return a.year - b.year});

  console.log(cars);

  cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  console.log(cars);

