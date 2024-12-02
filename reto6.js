/*
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 */

const printNumbers = (n) => {
    if (n < 0) {
        return n;
    } else {
        console.log(n);
        printNumbers(n - 1);
    }
}

printNumbers(100);

/* 
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la 
 *   sucesión de Fibonacci (la función recibe la posición).
 */

const factorial = (n) => {
    if (n == 0) {
        return 1;
    } else if (n < 0) {
        return 'No se puede factoriazar un número negativo.'
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

function fibonacci(n) {
    if (n <= 0) {
        console.log('No se puede hacer la sucesión de fibonacci.')
        return 0;
    } else if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

// Ejemplo de uso
console.log(fibonacci(4));  // Muestra los primeros 10 números de la sucesión de Fibonacci
