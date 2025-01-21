/*
 * EJERCICIO:
 * Explora el "Principio SOLID Abierto-Cerrado (Open-Close Principle, OCP)"
 * y crea un ejemplo simple donde se muestre su funcionamiento
 * de forma correcta e incorrecta.
 */
// Froma incorrecta
// Implementar una clase para calcular el area de un rectangulo
// Class Calculator Areas
class CalcularArea {
  // Original code: function calcularArea(base, height)
  calcularAreaRectangle(base, height) {
    return base * height;
  }
  // ahora nos piden que tengamos una forma de calcular el area del circulo
  calcularAreaCirculo(radio) {
    return 3.1416 * (radio * radio);
  }

  // Si nos siguen pidiendo mas forma de calcular area de distintas formas geometricas,
  // Se nos complicaría seguir creando y creadno mas funciones
}

// Forma Correcta
// Class Calculator Areas 
class CalculatorAreas {
  calcularArea() {
    throw new Error('Esta función debe ser implementada en las clases extendidas.')
  }
}

class RectangleCalculator extends CalculatorAreas {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calcularArea() {
    return this.base * this.height;
  }
}

class CircleCalculator extends CalculatorAreas {
  constructor(radio) {
    super();
    this.pi = 3.1416;
    this.radio = radio;
  }

  calcularArea() {
    return this.pi * (this.radio * this.radio);
  }
}

const calculatorAreas = new CalculatorAreas();
//console.log(calculatorAreas.calcularArea());

const rectangleCalculator = new RectangleCalculator(2, 4);
console.log('Rectangle Area', rectangleCalculator.calcularArea());

const circleCalculator = new CircleCalculator(5);
console.log('Circle Area', circleCalculator.calcularArea());

/*
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla una calculadora que necesita realizar diversas operaciones matemáticas.
 * Requisitos:
 * - Debes diseñar un sistema que permita agregar nuevas operaciones utilizando el OCP.
 * Instrucciones:
 * 1. Implementa las operaciones de suma, resta, multiplicación y división.
 * 2. Comprueba que el sistema funciona.
 * 3. Agrega una quinta operación para calcular potencias.
 * 4. Comprueba que se cumple el OCP.
 */

// Class Operation
class Calculator {
  constructor() {
    this.operations = {};
  }
  
  addOperation(name, operation){
    return this.operations[name] = operation;
  }

  calculator(name, numbers){
    if(this.operations[name] === undefined) throw new EvalError('Operation not found');
    return this.operations[name].calculatorOperation(numbers);
  }
}

class Operation {
  calculatorOperation() { }
}

class Sum extends Operation {
  calculatorOperation(numbers) {
    return numbers.reduce((acc, current) => acc + current,)
  }
}

class Subtraction extends Operation {
  calculatorOperation(numbers) {
    return numbers.reduce((acc, current) => acc - current,);
  }
}

class Multiply extends Operation {
  calculatorOperation(numbers) {
    return numbers.reduce((acc, current) => acc * current,)
  }
}

class Divide extends Operation {
  calculatorOperation(numbers) {
    const findZero = numbers.find(num => num === 0);
    if (findZero === 0) return `Cannot be divide by zero`;
    if (numbers.length === 1) return `Cannot be divide by one digit`

    return numbers.reduce((acc, current) => acc / current,);
  }
}

const calculator = new Calculator();
calculator.addOperation('addition', new Sum());
calculator.addOperation('subtraction', new Subtraction());
calculator.addOperation('multiply', new Multiply());
calculator.addOperation('divide', new Divide());

console.log('Addition:',calculator.calculator('addition', [2,3]));
console.log('Subtraction:',calculator.calculator('subtraction', [2,3]));
console.log('Multiply:',calculator.calculator('multiply', [2,0]));
console.log('Divide:',calculator.calculator('divide', [1,3]));

// Add a new operation: Exponentiation
class Exponentiation extends Operation {
  calculatorOperation(numbers) {
    let number = numbers[0];
    let exponent = numbers[1];

    if(numbers.length === 1) return numbers[0];
    if(numbers.length > 2) return `Exponentiation cannot be performed with more than two numbers`;

    
    let total = 1;
    let i = 0;
    while (i < exponent) {
      total *= number;
      i++;
    }
    return total;
  }
}

calculator.addOperation('exponentiation', new Exponentiation());
console.log('Exponentiation:',calculator.calculator('exponentiation', [2,1,2]));