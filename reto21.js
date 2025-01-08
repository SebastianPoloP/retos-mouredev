/*
 * EJERCICIO:
 * Explora el concepto de callback en tu lenguaje creando un ejemplo
 * simple (a tu elección) que muestre su funcionamiento.
 */
// Lista de estudiantes
const students = ['Daniela', 'Sebastian',
  'Andrés', 'Mariana',
  'Leonardo', 'Ana', 'Santiago'];

// Función high-order
function namesStudents(students, callback) {
  students.forEach(element => callback(element));
}
// Utilizando una función anonima para ejecutar el callback
namesStudents(students, function (name) {
  console.log('Nombre:', name); // Mostrar todos los nombres del array
});

namesStudents(students, (name) => {
  console.log('Nombres en mayúscula:', name.toUpperCase());
});

// Filtrar nombres por longitud
function filterNames(students, callback) {
  const result = students.filter(name => name.length > 3 && name.length < 8);
  callback(result);
}

filterNames(students, (res) => {
  console.log('Estudiantes con cantidad de letras mayor a 3 y menor que 8:', res);
});

// Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// función high order con su respectivo callback function
function filterNumbers(numbers, callback){
  // Uso de filter para filtrar los datos como deseemos
  const filterResult = numbers.filter(num => callback(num));
  // Retornación de los numeros filtrados
  return filterResult;
}
// Ejemplos de uso con funciones anonimas
console.log(filterNumbers(arr, (num)=>{
  return num % 2 !== 0;
}));

console.log(filterNumbers(arr, (num)=> {
  return num % 2 === 0;
}));

console.log(filterNumbers(arr, (num)=>{
  return num > 5;
}));

console.log(filterNumbers(arr, num => num < 5));

// Función de filtrado parecido a filter
Array.prototype.filterNumbers = function (callback){
  // Array para almacenar los datos que deseamos
  const filteredArray = [];
  // ciclo para iterar en el array
  for(let i = 0; i < this.length; i++){
    // Llamada a la función callback
    callback(this[i]) ? filteredArray.push(this[i]) : null;
  }
  // Retornamos los elementos filtadros
  return filteredArray;
}
// Función para saber los numeros impares
function isOdd(num){
  return num % 2 !== 0;
}
// Función para saber los numeros pares
function isEven(num){
  return num % 2 === 0;
}
// Ejecución
const nArr = [1, 2, 3, 4, 5];
console.log(arr.filterNumbers(isEven));
console.log(nArr.filterNumbers(x => x >= 3));

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un simulador de pedidos de un restaurante utilizando callbacks.
 * Estará formado por una función que procesa pedidos.
 * Debe aceptar el nombre del plato, una callback de confirmación, una
 * de listo y otra de entrega.
 * - Debe imprimir un confirmación cuando empiece el procesamiento.
 * - Debe simular un tiempo aleatorio entre 1 a 10 segundos entre
 *   procesos.
 * - Debe invocar a cada callback siguiendo un orden de procesado.
 * - Debe notificar que el plato está listo o ha sido entregado.
 */

function randomNumber(min = 1, max = 9) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min) * 1000;
}

async function proccessOrder(plate, confirmOrder, orderReady, deliveryOrder) {
  setTimeout(() => {
    confirmOrder(plate);
    setTimeout(()=> {
      orderReady(plate);
      setTimeout(()=>{
        deliveryOrder(plate);
      }, randomNumber())
    }, randomNumber())
  }, randomNumber())
}

function confirmOrder(plate){
  console.log(`Confirmo su orden de ${plate}`);
}

function orderReady(plate) {
    console.log(`Su orden de ${plate} esta lista`);
}

function deliveryOrder(plate) {
    console.log(`Su pedido de ${plate} ha sido entregado`);
}

proccessOrder('Arroz tapado', confirmOrder, orderReady, deliveryOrder);
proccessOrder('Carne barbacoa', confirmOrder, orderReady, deliveryOrder);
proccessOrder('Arroz con huevo', confirmOrder, orderReady, deliveryOrder);
proccessOrder('Tamal Colombiano', confirmOrder, orderReady, deliveryOrder);
proccessOrder('Caldo de costilla', confirmOrder, orderReady, deliveryOrder);
proccessOrder('Pasta bolognesa', confirmOrder, orderReady, deliveryOrder);