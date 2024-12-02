/*
 * EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido.
 * 
 */

// Clase vehiculo
class Vehiculo{
  marca;
  constructor(marca){
    this.marca = marca;
  }
  // métodos de la clase
  Encender(){
    return console.log(`El vehiculo ${this.marca} se ha encendido`);
  }
  Apagar(){
    return console.log(`El vehiculo ${this.marca} se ha apagado`)
  }
}
// Instanciando un objeto de la clase Vehiculo
const moto = new Vehiculo('Yamaha');
// Usando el método desde el objeto instanciado
moto.Encender();
// Creando mas objetos de la clase vehiculo
const carro = new Vehiculo('Ferrari');
const carro2 = new Vehiculo('Aston Martin');
carro2.Apagar();
// Mostrando el parametro que hay en la clase padre desde una instancia del objeto
console.log(carro.marca);
console.log(moto.marca);
console.log(carro2.marca);

// Ejercicio Extra

// Clase Pila
class Pila {
  // constructor con párametro especifico
  constructor(arr = []){
    this.arr = arr;
  }
  // Métodos de la clase Pila
  agregarPila(data){
    return this.arr.push(data);
  }

  eliminarPila(){
    return this.arr.pop();
  }

  mostrarPila(){
    return console.log(this.arr)
  }
}

console.log('CLASS PILA')
const newPila = new Pila([1,2,3,4,5,6]);
newPila.agregarPila(7);
newPila.agregarPila(8);
newPila.agregarPila(9);
newPila.mostrarPila();
newPila.eliminarPila();
newPila.eliminarPila();
newPila.eliminarPila();
newPila.eliminarPila();
newPila.eliminarPila();
newPila.mostrarPila();

// Clase Cola
class Cola{
  constructor(arr = []){
    this.arr = arr;
  }

  agregarCola(data){
    return this.arr.unshift(data);
  }

  eliminarDeCola(){
    return this.arr.pop()
  }

  mostrarCola(){
    return console.log(this.arr);
  }
}

console.log('CLASS COLA')
const newCola = new Cola([1,2,3,4]);
newCola.agregarCola(5);
newCola.agregarCola(6);
newCola.agregarCola(7);
newCola.agregarCola(8);
newCola.agregarCola(9);
newCola.mostrarCola();
newCola.eliminarDeCola();
newCola.eliminarDeCola();
newCola.eliminarDeCola();
newCola.eliminarDeCola();
newCola.eliminarDeCola();
newCola.eliminarDeCola();
newCola.mostrarCola();