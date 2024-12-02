// Funciones
// Funciones con parametros.
function sumar(a, b) {
    return a + b;
}

let suma = sumar(31, 2);
console.log(suma)

//Funciones sin parametros

function saludar() {
    return 'Hola mundo!, te escribo desde una función sin parametros.';
}

console.log(saludar());

//Función sin el Return.
function imprimirMensaje() {
    console.log('Hola, te escribo desde "Imprimir Mensaje".');
}

imprimirMensaje();

// Función dentro de una función
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

console.log(addSquares(2, 3)); // Devuelve 13
console.log(addSquares(3, 4)); // Devuelve 25
console.log(addSquares(4, 5)); // Devuelve 41

function fuera() {
    let x = 5;
    function dentro(x) {
        return x * 2;
    }
    return dentro;
}
console.log(fuera()(10));

/**
 * Dado que la función interna forma un cierre, puedes llamar a la función externa y especificar argumentos
 * tanto para la función externa como para la interna, por ejemplo:
 */

function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3);
result = fn_inside(5);
result1 = outside(3)(5);
console.log(result);
console.log(result1);

// Formas para hacer una función

function map(f, a) {
    let result = []; // Crea un nuevo arreglo
    let i; // Declara una variable
    for (i = 0; i != a.length; i++) result[i] = f(a[i]);
    return result;
}
const f = function (x) {
    return x * x * x;
};
let numbers = [0, 1, 4, 11, 20];
let cube = map(f, numbers);
console.log(cube);

// Una función se puede definir en función de una condición, por ejemplo:

let num = 0;
var myFunc;

if (num === 0) {
    myFunc = function (theObject) {
        theObject.make = "Toyota";
    };
}

// Ahora puedes usar myFunc si fue definida
let car = { make: "Unknown" };

if (myFunc) {
    myFunc(car);
    console.log(car.make);  // Imprime: Toyota
} else {
    console.log("myFunc no está definida");
}

// Llamando una función
// En Javascript podemos escribir el llamado de una función antes de haber creado la función, Por ejemplo.

console.log(square(5));

function square(num) {
    return num * num;
}

/**
 * Sin embargo, no podemos llamar una función si la realizamos así:
console.log(divicion) // square se eleva con un valor inicial undefined.
console.log(divicion(5)) // Error de tipo no detectado: square no es una función
const divicion = function(a) {
return a * a;
}
 */

// Las funciones se puede llamar así mismo, por ejemplo:

function factorial(fac) {
    if (fac === 0 || fac === 1) {
        return 1;
    }
    else {
        return fac * factorial(fac - 1);
    }
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

/**
 * Ambitos de una función.
 * No se puede acceder a una variable definida dentro de una función desde cualquier lugar fuera de la
 * función, porque las variables solo se definen dentro de la función. Sin embargo una función puede acceder
 * a todas las varibles o funciones definidad dentro del ambito en el que está definida.
 * Es decir que, una función definida en el ámbito global puede acceder a todas 
 * las variables definidas en el ámbito global. 
 * Una función definida dentro de otra función también puede acceder a todas 
 * las variables definidas en su función principal y a cualquier otra variable a la 
 * que tenga acceso la función principal, Por ejemplo:
 */

// Estas variables se definen en el ambito global
let num1 = 20, num2 = 3, name = 'Chamaco';
// Esta función se define también en el ambito global.
function multiplicar() {
    return console.log(num1 * num2);
}
multiplicar();

// Ejemplo de función anidada:
/**
 * 
 * Una función anidada es privada de su función contenedora, por ejemplo: 
 */
function getScore() {
    let num1 = 2,
        num2 = 3;

    function anidada() {
        return console.log(name + ' anotó ' + (num1 + num2));
    }
    return anidada();
}

getScore();

/**
 * Ambito y pila de funciones 
 * Recursión:
 * Una función puede llamarse así misma. Hay tres formas:
 * 1. Con el nombre de una función.
 * 2. Con arguments.callee
 * 3. Una variable dentro del ámbito que se refiere a la función
 * Por ejemplo:
var foo = function bar() {
  // las instrucciones van aquí
};
 * Dentro de la función, todo lo siguiente se puede:
bar();
arguments.callee();
foo();
 * Un función que se llama así misma se conoce como función recursiva. En cierto modo, la recursividad
 * es análoga de un bucle. Ambas ejecutan el mismo codigo varias veces y necesitan de una condición 
 * para evitar la recursividad infinita. Por ejemplo el siguiente bucle:
 */

let x = 0;
while (x < 10) {
    // "x < 10" es la condición del bucle
    console.log(x);
    x++;
}

// Esto se puede transformar en una declaración de función recursiva, seguida de una llamada de la función:
function loop(x) {
    if (x >= 10) {
        return;
    }
    console.log(x);
    loop(x + 1);
}
loop(0);



function foo(i) {
    if (i < 0) return console.log(i + ' es igual a: ' + 0);
    console.log("inicio: " + i);
    foo(i - 1);
    console.log("fin: " + i);
}
foo(3);

// Funciones multianidadas
/**
 * Las funciones se pueden anidar de forma multiple, por ejemplo:
 */
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(5);
    }
    B(5);
}
A(5);

//Función compleja:

let createPet = function (name) {
    let sex;

    return {
        setName: function (newName) {
            name = newName;
        },

        getName: function () {
            return name;
        },

        getSex: function () {
            return sex;
        },

        setSex: function (newSex) {
            if (
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ) {
                sex = newSex.toLowerCase();
            }
        },
    };
};

let pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Yang");
pet.setSex("FEMALE");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver

/**
 * Arguments en las funciones
 * La variable arguments es parecido a un arreglo, sin embargo no es un arreglo.
 * Es similar a un arreglo porque tiene un indice numerado y propiedad .length
 */
function myConcat(separator) {
    let result = ""; // inicia list
    let i;
    // itera a través de arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}
console.log(myConcat(", ", "red", "orange", "blue"));
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
console.log(myConcat(". ", "salvia", "albahaca", "orégano", "pimienta", "perejil"));

// Se  puede poner funciones con parámetros predeterminados, por ejemplo:

function multiply(a, b = 3) {
    return a * b;
}
console.log(multiply(5));

//Funcion con parametro REST
/**
 *Rest Parameters (...): 
    Agrupa un número variable de argumentos en un solo array dentro de la función, por ejemplo:.
 */
function multip(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
}

let arr = multip(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

//Funciones Flecha
/**
 * Tiene una sintaxis mas corta en comparación con las expresiones de función y no tiene su propio
 * this, arguments, super o new.target. Las funciones flecha siempre son anonimas.
 * 
 * Funciones cortas
 */
let array= ['Hidrogeno', 'Helio', 'Litio', 'Berilio'];

let array2= array.map(function(t){
    return t.length;
});

console.log(array2);

let array3= array.map((s)=> s.length);
console.log(array3);

/**
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 */

function print(tx1, tx2){
    let contador = 0;
    for(let i = 1;i <= 100;i++){
        if(i % 3 == 0 && i % 5 == 0){{
            console.log(tx1+' '+tx2);
        }
        }else if(i % 3 == 0){
            console.log(tx1);
        }else if(i % 5 == 0){
            console.log(tx2);
        }else{
            console.log(i);
            contador++
        }
    }
    return contador;
}
console.log(print('Fizz', 'Buzz'));