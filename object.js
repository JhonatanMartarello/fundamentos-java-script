const car = { type: "Wolkswagen", model: "Gol", color: "white" };

const person = {
    firstName: "Jhonatan",
    lastName: "Martarello",
    age: 29,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName, person.lastName);
console.log(person["firstName"], person["lastName"]);
console.log(person.fullName());