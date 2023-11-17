'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear
}

//prototypal inheritance
const jon = new Person('Joe', 1988);

Person.prototype.calcAge = function() {
    console.log(2023 - this.birthYear);
}

console.log(jon);
console.log(jon.calcAge());

//coding challenge 1

const Car = function(make, speed) {
    this.make = make,
    this.speed = speed
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(this.make, this.speed);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.make, this.speed);
}

class Car1 {
    constructor(make, speed) {
        this.make = make,
        this.speed = speed
    } 
    accelerate() {
        this.speed += 20;
        console.log(this.make, this.speed);
    }
    brake() {
        this.speed -= 10;
        console.log(this.make, this.speed);
    }
}

const bmw = new Car('bmw', 120);
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();

const mercedes = new Car1('Mercedes', 95);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
console.log(Car.prototype);
console.log(bmw.__proto__, mercedes);

//coding challenge 2

class CarCl {
    constructor(make, speed) {
        this.make = make,
        this.speed = speed
    }
    accelerate() {
        this.speed += 10;
        console.log(this.make, this.speed);
    }
    brake() {
        this.speed -= 5;
        console.log(this.make, this.speed);
    }
    get speedUS() {
        return this.speed/1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6; 
    }
}

const ford = new CarCl('Ford', 120);

//coding challenge 3

class Car2 {
    constructor(make, speed) {
        this.make = make,
        this.speed = speed
    }
}