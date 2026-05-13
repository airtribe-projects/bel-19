// By just defining an object
// Creating Objects using Object Literal

/*

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    start: function() {
      console.log(`${this.make} ${this.model} is starting...`);
    },
    drive: function(speed) {
      console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    }
};

car.start();
car.drive(10);
car.make = "Maruti";
car.start()

*/
// Problems?
// 1. No class: No structure
// 2. Mutable
// 3. Multiple objects can't be created. Can be created but will lead to lot of duplication


// Using Constructor function
/*
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    
    this.start = function() {
      console.log(`${this.make} ${this.model} is starting...`);
    };
  
    this.drive = function(speed) {
      console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    };
}

const camary = new Car("Toyota", "Camary", 2003);
const alto = new Car ("Maruti", "Alto", 2020);

camary.start()
alto.start()

camary.make = "BMW";
camary.start = function() {
    console.log("The car broke down");
}
console.log(camary.make);
camary.start()
*/
// Problems?
// Encapsulation


// ES6 ==> Class

class Car {  
    #make;
    constructor(make, model, year) {
        this.#make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.#make} ${this.model} is starting...`);
    }

    drive(speed) {
        console.log(`${this.#make} ${this.model} is driving at ${speed} km/h.`);
    }

}

// Creating an instance of Car
const myCar = new Car("Toyota", "Camry", 2023);
myCar.model = "E300";
myCar.make="BMW";
myCar.#make="BMW";


myCar.start();

