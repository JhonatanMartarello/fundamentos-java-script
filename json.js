/*
{
    "employees" : [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
}
*/

// Converting a JSON Text to a JavaScript Object
let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(obj.employees[1].firstName, obj.employees[1].lastName);

obj.employees.forEach(element => {
    console.log(element.firstName, element.lastName);
});