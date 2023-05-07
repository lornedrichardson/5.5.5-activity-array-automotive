//this includes the vehicle class as a module
import { Vehicle } from "./vehicleBaseClass";

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.timeForService = false;
    }

    loadPassenger(num) {
        if (this.passengers <= this.maximumPassengers - num) this.passengers += num;
        else if (this.passengers < this.maximumPassengers) console.log(`The ${this.make} ${this.model} does not have enough space for all passengers.`);
        else console.log(`The ${this.make} ${this.model} is full.`)
        return this.passengers;
    }

    start() {
        if (this.fuel > 0) return this.started = true;
        return this.started = false;
    }

    scheduleService(mileage) {
        if (this.mileage > 30000) this.timeForService = true;
        return this.timeForService;
    }
}











//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.
let newCar = new Car('Mercury', 'A85', '2023', 'black', '2641');

newCar.loadPassenger(5);
newCar.start();
newCar.scheduleService(5000);

console.log(newCar);
//Create at least two new instances of the Car class and test them here:
