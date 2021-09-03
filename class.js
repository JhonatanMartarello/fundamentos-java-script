class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }

    ageParameter(year) {
        return year - this.year;
    }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.log("Carro: " + myCar1.name, "\nIdade: " + myCar1.age());

let date = new Date();
let year = date.getFullYear();
console.log("Carro: " + myCar2.name, "\nIdade: " + myCar2.ageParameter(year));