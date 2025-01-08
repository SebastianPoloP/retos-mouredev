/*
 * EJERCICIO:
 * Explora el concepto de funciones de orden superior en tu lenguaje 
 * creando ejemplos simples (a tu elección) que muestren su funcionamiento.
 */
// Función con argumento
function saludar(messagge, callback) {
  callback(messagge);
}

saludar('Hola', (messagge) => { console.log(messagge + ' mundo!') });

// Retorno de funciones
function applyMultiplier(n) {
  // función de retorno
  // function multiplier(x){
  //   return x * n;
  // }
  // return multiplier;

  // retorno de función simplificado con una función flecha
  return (x) => x * n;
}

const multiplier = applyMultiplier(2);
console.log(multiplier(5));
console.log(applyMultiplier(5)(2)); // 10
console.log(applyMultiplier(8)(9)); // 72
console.log(applyMultiplier(6)(9)); // 54

// Abstracción. Funciones reutilizables.
function sumRange(init, final) {
  let total = 0;
  while (init <= final) {
    total += init;
    init++;
  }
  return total;
}

console.log(sumRange(3, 7)); // 25

// Métodos de busqueda en Arrays:
const numeros = [50, 12, 37, 17, 25, 6];
const animales = ["Perro", "Gato", "Cisne", "Tortuga"];
const productos = [
  { nombre: "Mesa", precio: 3500 },
  { nombre: "Silla de plástico", precio: 2000 },
  { nombre: "Silla de madera", precio: 2500 },
  { nombre: "Ventana", precio: 4500 },
  { nombre: "Puerta", precio: 3000 }
];

// Foreach() -> Recorre el array y ejecuta una función que se ponga en cada uno de los elementos.
let total = 0;
const div = numeros.length;
numeros.forEach(numero => {
  total += numero
});
console.log(total / div);
// ejemplo sencillo
productos.forEach(producto => {
  console.log(producto.nombre);
  console.log(producto.precio);
});

// Find() -> Recorre un array y devuelve el primer elemento que cumpla con una condición

const perro = animales.find(animal => animal.toLowerCase() === 'perro');
console.log(perro ? perro : 'No se encontro el animal');

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.close()
// rl.question('Qué producto buscas? ', product => {
//   console.log(productos.find(producto => producto.nombre.toLowerCase() === product));
//   rl.close();
// });

// Filter() -> Recorre el array y retorna un array nuevo con todos los elementos que cumplan una condición.

const gato = animales.filter(animal => animal.toLowerCase() === 'gato esfinge');
console.log(gato);

const silla = productos.filter(product => product.nombre.includes('Silla') || product.nombre.toLocaleLowerCase().includes('silla'));
console.log(silla);

// Some() -> Recorre un array y retorna true o false según si encuentra o no un elemento que cumpla con una condición.

const cisne = animales.some(animal => animal === 'Cisne');
console.log(cisne);

const caballo = animales.some(animal => animal === 'Caballo');
console.log(caballo);

// Map() -> Recorre el array y retornar un nuevo array con los elementos transformados del array original.
// este se usa mas en array de objetos.

const nameProduct = productos.map(product => product.nombre);
console.log(nameProduct);

const updatePrice = productos.map(product => {
  return {
    nombre: product.nombre,
    precio: product.precio * 1.5
  }
});

console.log(productos);
console.log(updatePrice);

// Reduce() -> Recorre un array y retorna un único valor tras hacer una operación sobre los elementos.
// Este necesita un acumulador: Acumula el valor devuelto por la función callback, 
// Valor actual: Es el elemento actual del array que esta siendo procesado 
// Indice (opcional): El indice del elemento actual que esta siendo procesado en el array, por defecto inicia en 0 
// Array (opcional): El array sobre el cual se llamá el método reduce
// Valor incial (opcional): Es un valor que se pasa como inicio para el acumulador. Si NO se proporciona, el primer
// valor del arreglo será usado como acumulador, y la iteración empezará desde el segundo elemento.

const totalNum = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(totalNum);

const totalCarrito = productos.reduce((acumulador, valorActual) => acumulador + valorActual.precio, 0);
console.log(totalCarrito);
// El valor incial en este ejemplo es un string vacio
// También podríamos usar objetos vacio, arrays vacios, dependiendo de lo que queremos devolver
const concatNames = productos.reduce((acumulador, valorActual) => acumulador + ' ' + valorActual.nombre, '');
console.log(concatNames);

// Sort() -> Reordenar el array en orden alfabetico (por defecto), o según una función de comparación personalizada
// Ordenamos el array de menor a mayor

numeros.sort((a, b) => a - b);
console.log(numeros);

numeros.sort((a, b) => b - a);
console.log(numeros);
// Ordena alfabeticamente sin necesidad de una funcón de comparación
animales.sort();
console.log(animales);
// Ordena por cantidad de letras
animales.sort((a, b) => a.length - b.length);
console.log(animales)
// Warning: Sort() modifica el array original, es decir que el array utilizado es alterado directamente,
// Por ello si queremos tener el array normal debemos de hacer una copia del array antes de usar Sort().

// Object Math
// Min() -> Retorna el número mínimo en un listado
console.log(Math.min(50, 12, 37, 17, 25, 6));

// Max() -> Retorna el número máximo en un listado
console.log(Math.max(50, 12, 37, 17, 25, 6));

// Ceil() -> Retorna el número que le indiquemos redondeado hacía arriba
console.log(Math.ceil(1.25));

// Floor() -> Retorna el número que le indiquemos redondeado hacía abajo
console.log(Math.floor(1.25));

// Round() -> Retorna el número que le indiquemos redondeado hacía abajo si es menor a .5 o hacía arriba si es mayor a .5
console.log(Math.round(1.25));
console.log(Math.round(1.7));

// Random() -> Retorna un número aleatorio entre 0 inclusive y 1 inclusive
console.log(Math.random());

// Podemos usar otras funciones de Math para mejorar la presición del Random()
console.log(Math.round(Math.random())); // con esto podemos hacer que nos de un número aleatorio redondeado, entonces puede ser 0 o 1

// si queremos ampliar el rango lo hacemos así
console.log(Math.random() * 10); // Aquí se tendrá el rango entre 0 y 10, pero sin incluir el 10

// Le estamos indicando que de un numero random entre 1 y 3;
// Nota: Se usa floor porque queremos que redondee hacía abajo, es decir si nos da 3.5, redondee a 3
console.log(Math.floor(Math.random() * 3 + 1));

// Abstracción con random():
function randomNumber(min, max) {
  if (min > max) {
    let temp = max;
    max = min;
    min = temp;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('Random: ', randomNumber(5, 1));
/*
 * DIFICULTAD EXTRA (opcional):
 * Dada una lista de estudiantes (con sus nombres, fecha de nacimiento y 
 * lista de calificaciones), utiliza funciones de orden superior para
 * realizar las siguientes operaciones de procesamiento y análisis:
 * - Promedio calificaciones: Obtiene una lista de estudiantes por nombre
 *   y promedio de sus calificaciones.
 * - Mejores estudiantes: Obtiene una lista con el nombre de los estudiantes
 *   que tienen calificaciones con un 9 o más de promedio.
 * - Nacimiento: Obtiene una lista de estudiantes ordenada desde el más joven.
 * - Mayor calificación: Obtiene la calificación más alta de entre todas las
 *   de los alumnos.
 * - Una calificación debe estar comprendida entre 0 y 10 (admite decimales).
 */
console.log('----------------------------EXTRA--------------------------------');
// Array de objetos
const listStudents = [
  {
    nombre: 'Sebastian',
    fechaNacimiento: '1998-08-04',
    listaCalificaciones: [5, 4.5, 9, 10]
  },
  {
    nombre: 'Daniela',
    fechaNacimiento: '2002-04-24',
    listaCalificaciones: [9, 9.5, 10, 10]
  },
  {
    nombre: 'Andrés',
    fechaNacimiento: '1997-09-22',
    listaCalificaciones: [8, 7, 10, 10]
  },
  {
    nombre: 'Mariana',
    fechaNacimiento: '1999-03-10',
    listaCalificaciones: [8, 8, 8, 8]
  }
];
// Función para sacar el promedio
function promedio(arr) {
  // uso de Map para retornar un array nuevo
  return arr.map(student => {
    // Se toma el número de notas para poder dividir el resultado de la suma de las notas
    const div = student.listaCalificaciones.length;
    // Se retorna un array nuevo
    return {
      nombre: student.nombre,
      // uso de round para redondear el número dependiendo si esta por encima de .5 o debajo de .5
      // uso de Reduce para sumar y dividir las notas y sacar el promedio
      promedio: Math.round(student.listaCalificaciones.reduce((acum, currentValue) => acum + currentValue / div, 0))
    }
  });
}

// Función para encontrar el mejor estudiante
function bestStudents(arr) {
  // uso de filter para filtrar el promedio que sea igual o mayor a 9
  return arr.filter(average => average.promedio >= 9);
}

// Función para encontrar el estudiante mas joven
function studentMostYoung(arr) {
  // Uso de sort para ordenar de menor a mayor
  return arr.sort((a, b) => new Date(b.fechaNacimiento) - new Date(a.fechaNacimiento));
}

// Función para encontrar la nota mas alta
function highGrade(promedios){
  // Uso de Math.max para encontrar la nota mas alta entre todas las notas de los estudiantes
  return Math.max(...promedios.map(average => Math.max(...average['listaCalificaciones'])))
}

// Mostrar en pantalla
console.log('Promedio de los estudiantes:', promedio(listStudents));
const promedios = promedio(listStudents);
console.log('Mejores estudiantes: ', bestStudents(promedios));

console.log('Orden del estudiante mas joven al mas viejo ', studentMostYoung(listStudents));

console.log('Nota mas alta: ', highGrade(listStudents));