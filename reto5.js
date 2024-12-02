/*
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 */

// Asignación por valor primitivo

// String
let porValor = 'Esto es asignación por valor.';
let copia = porValor;

porValor += ' Y le agregue después esta porción más!'

console.log(porValor);
console.log(copia);

// Number
let numero = 10;
let copiaNumero = numero;

numero += 10;
console.log(numero);
console.log(copiaNumero);

// Boolean
let boolean = true;
let copiaBoolean = boolean;

boolean = false;

console.log(boolean);
console.log(copiaBoolean);

// Null

let nulo = null;
let copiaNulo = nulo;

nulo = 19;

console.log(nulo);
console.log(copiaNulo);

// Undefined

let indefinido = undefined;
let copiaIndefinido = indefinido;

indefinido = 'Soy undefined.';

console.log(indefinido);
console.log(copiaIndefinido);

// Symbol

let simbolo = Symbol('Soy yo');
let copiaSimbolo = simbolo;

simbolo = Symbol('Esto es agregado después.');

console.log(simbolo);
console.log(copiaSimbolo);
/**
 * Acá amabas variables conservan sus valores independientes. Cada variables
 * guarda su propio valor. Por eso al modificar porValor, la copia 
 * permanece igual
 */

// Asignación por "referencia" con valores complejos.

// Array
const a = [1, 2, 3]
const b = a;

a.push(4);

console.log(a);
console.log(b);

// Objeto

const persona = {
    id: 12,
    nombre: 'Sebastian'
}

const copiaObjeto = persona;

persona.ciudad = 'Garzón';

console.log(persona);
console.log(copiaObjeto);

// Function

const funcion = (str) => { console.log(str) };
let referenciaFuncion = funcion; // Refencia a la misma función.

funcion('Hola mundo!');
/** 
 * Este ejemplo es parecido al anterior pero su resultado es distinto. Vemos que al asignar el valor de una array
 * en una variable, el valor en sí no se copia, lo que asigna una referencia. Por ello cuando modificamos el valor 
 * de cualquier variable estamos afectando al mismo valor, y los cambios se veran reflejadas en ambas.
 */

// Pasando valores primitivos (Asignación por valor.)

// String en una función
const strPrimitivo = (str) => {
    str = 'Cambiando el valor SOLO en la función.';
    return str;
}

const aString = 'a!';

console.log(strPrimitivo(aString));
console.log(aString);

// Number en una función.

const numberPrimitivo = (number) => {
    number += 10
    return 'Desde la función: ' + number;
}

const number = 10;
console.log(numberPrimitivo(number));
console.log('Desde fuera de la función: ' + number);

// Boolean en una función.

const esFalso = (boolean) => {
    boolean = false;
    return 'Esto desde la función: ' + boolean;
}

const esVerdad = true;

console.log(esFalso(esVerdad));
console.log('Esto desde fuera de la función: ' + esVerdad);

// Undefined y Null
const esNulo = (nulo) => {
    nulo = null;
    return 'Esto desde dentro de la función: ' + nulo;
}

const soyIndefinido = undefined;
console.log(esNulo(soyIndefinido));
console.log('Esto desde fuera de la función: ' + soyIndefinido);

// Symbol en una función

const simboloFunc = (soySimbolo) => {
    soySimbolo = Symbol('Soy Symbol desde la función.');
    return soySimbolo;
}

const simboloNoFunc = Symbol('Soy Symbol desde fuera de la función.');
console.log(simboloFunc(simboloNoFunc));
console.log(simboloNoFunc);

/**
 * Si pasamos un valor primitivo en una función, el valor recibido dentro de la función es una copia, lo que implica
 * que cualquier mutación o reasignación de los parámetros dentro de una función no afecta al valor en el contexto de la
 * invocación (Fuera de la función.)
 */

// Asignando valores complejos a una función.

// Array en una función.

const foo = (arr) => {
    const results = [];
    while (arr.length) {
        results.push(arr.shift());
    }
    return results;
};
const arr = [1, 2, 3, 4];
foo(arr);
console.log(arr);

// Un Object en una función.

const objetoFunc = (obj) => {
    return obj.ciudad = 'Medellin';
}

const objeto = {
    id: 1,
    nombre: 'Sebastian'
}
objetoFunc(objeto);
console.log(objeto);

/**
 * Cuando se modifica (mutamos) el argumento/parámetro estamos modificando el mismo valor al que hace referencia 
 * la variable original a.
 */

/*
 *Reto Extra.
  * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime el valor de las
 *   variables originales y las nuevas, comprobando que se ha invertido su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
*/

const funcionUno = (p1, p2) => {
    let aux = p1;
    p1 = p2;
    p2 = aux;
    return `${p1}  ${p2}`;
}

let varUno = 'Primer dato.';
let varDos = 'Segundo dato.';
console.log(varUno, varDos);
console.log(funcionUno(varUno, varDos));

const funcionDos = (p1, p2) => {
    let aux = p1;
    p1 = p2;
    p2 = aux;
    return [p1, p2];
}

let varTres = [10, 20, 30];
let varCuatro = [1, 2, 3];
console.log(varTres, varCuatro);
console.log(funcionDos(varTres, varCuatro));