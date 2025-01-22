/*
 * EJERCICIO:
 * Explora el "Principio SOLID de Sustitución de Liskov (Liskov Substitution Principle, LSP)"
 * y crea un ejemplo simple donde se muestre su funcionamiento
 * de forma correcta e incorrecta.
 */

// Forma incorrecta
// Super Class/ Class 
// class Rectangule {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   setHeight(newHeight) {
//     this.height = newHeight;
//   }
// }
// SubClass inherit
// class Square extends Rectangule { }

// const rectangule = new Rectangule(4, 5);
// const square = new Square(4, 4);

// console.log(`Rectangule: Height: ${rectangule.height}, Width: ${rectangule.width}`);
// console.log(`Square: Height: ${square.height}, Width: ${square.width}`);

// square.setHeight(5);
// console.log(`Square: Height: ${square.height}, Width: ${square.width}`); // Error! Los lados de un cuadrado son igual

// Forma Correcta
// Super Class / Class 
class Shape{
  setHeight(){
    throw new Error('This method must be implement');
  }
}

// Subclass Inherit
class Rectangule extends Shape{
  constructor(height, width){
    super();
    this.height = height;
    this.width = width;
  }
  // Implementation of the method
  setHeight(newHeight){
    this.height = newHeight;
  }
}

// Subclass Inherit
class Square extends Shape{
  constructor(side){
    super();
    this.side = side;
  }
  // Implementation of the method
  setHeight(newSide){
    this.side = newSide;
  }
}

// const rectangule = new Rectangule(4, 5);
// const square = new Square(4);

// console.log(`Rectangule: Height: ${rectangule.height}, Width: ${rectangule.width}`);
// console.log(`Square: Height: ${square.side}, Width: ${square.side}`);

// square.setHeight(5);
// console.log(`Square: Height: ${square.side}, Width: ${square.side}`);

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea una jerarquía de vehículos. Todos ellos deben poder acelerar y frenar, así como
 * cumplir el LSP.
 * Instrucciones:
 * 1. Crea la clase Vehículo.
 * 2. Añade tres subclases de Vehículo.
 * 3. Implementa las operaciones "acelerar" y "frenar" como corresponda.
 * 4. Desarrolla un código que compruebe que se cumple el LSP.
 */

class Vehicle{
  constructor(speed){
    this.speed = speed;
  }
  accelerate(increment){
    this.speed = increment;
    console.log(`Speed: ${this.speed}Km/h`);
  }

  brake(decrement){
    this.speed = decrement;
    if(this.speed <= 0) this.speed = 0;
    console.log(`Speed: ${this.speed}Km/h`);
  }
}

class Car extends Vehicle{
  constructor(vehicle){
    super();
    this.vehicle = vehicle;
  }
  accelerate(increment){
    console.log('The car is accelerate');
    this.vehicle.accelerate(increment);
  }

  brake(decrement){
    console.log('The car is brake');
    this.vehicle.brake(decrement);
  }
}

class Motorcycle extends Vehicle{
  constructor(vehicle){
    super();
    this.vehicle = vehicle;
  }
  accelerate(increment){
    console.log('The motorcycle is accelerate');
    this.vehicle.accelerate(increment);
  }

  brake(decrement){
    console.log('The motorcycle is brake');
    this.vehicle.brake(decrement);
  }
}

class Boat extends Vehicle{
  constructor(vehicle){
    super();
    this.vehicle = vehicle;
  }

  accelerate(increment){
    console.log('The boat is accelerate');
    this.vehicle.accelerate(increment);
  }

  brake(decrement){
    console.log('The boat is brake');
    this.vehicle.brake(decrement);
  }
}

const test_vehicle = (vehicle) =>{
  vehicle.accelerate(2);
  vehicle.brake(1);
}

const car = new Car(new Vehicle());
const motorcycle = new Motorcycle(new Vehicle());
const boat = new Boat(new Vehicle());

test_vehicle(motorcycle);
test_vehicle(car);
test_vehicle(boat);