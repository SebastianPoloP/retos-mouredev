/*
 * EJERCICIO:
 * Utilizando tu lenguaje crea un conjunto de datos y realiza las siguientes
 * operaciones (debes utilizar una estructura que las soporte):
 * - Añade un elemento al final.
 * - Añade un elemento al principio.
 * - Añade varios elementos en bloque al final.
 * - Añade varios elementos en bloque en una posición concreta.
 * - Elimina un elemento en una posición concreta.
 * - Actualiza el valor de un elemento en una posición concreta.
 * - Comprueba si un elemento está en un conjunto.
 * - Elimina todo el contenido del conjunto.
 */
// Conjunto de datos;
const arr = ['Primero', true, false, undefined, null];
console.log('Conjunto de datos sin modificar: ', arr);
// Agregando un elemento al final
arr.push('último');
console.log(arr);
// Agregando un elemento al inicio
arr.unshift('Primero del primero');
console.log(arr);
console.log('_________________________________________________________');
// Agregando elementos en bloque
arr.push('Elemento de bloque 1', 'Elemento de bloque 2', 'Elemento de bloque 3')
console.log(arr);
// Agregando elementos en bloque en una posición especifica.
for(let i = 3; i < 6; i++){
  arr[i] = i;
}
console.log(arr);
// Eliminando un elemento en una posición concreta
arr.splice(2, 1);
console.log(arr);
// Actualizando un elemento en una posición concreta
arr.splice(6, 1, 'Elemento modificado desde el indice 6');
console.log(arr);
// Comprobar si un elemento esta en el conjunto
console.log(arr.includes('Elemento modificado desde el indice 6') ?
'Si existe' 
: 'No existe');
// Eliminar todos los elementos del conjunto
arr.splice(0, arr.length);
// Tambien se podría hacer arr = [];, esto eliminaría todos los elementos del array
console.log('Elementos del array final:', arr);
/*
 * DIFICULTAD EXTRA (opcional):
 * Muestra ejemplos de las siguientes operaciones con conjuntos:
 * - Unión.
 * - Intersección.
 * - Diferencia.
 * - Diferencia simétrica.
 */
// Unión de dos conjuntos de datos
console.log('Uniendo arrays');
const arr1 = [2, 3, 4, 100];
console.log('Array 1: ', arr1);
const arr2 = [ 100, 3, 4, 5];
console.log('Array 2: ', arr2);
const arrUnion = [...new Set([...arr1, ...arr2])];
console.log('Arrays Unidas:', arrUnion);

// Intersección: Encontrar aquellos elementos que estan presentes en ambos conjuntos
const arrInt = []
for(let i = 0; i < arr1.length; i++){
  if(arr2.includes(arr1[i])){
    arrInt.push(arr1[i]);
  }
}
console.log('Intersección: ',arrInt);

// diferencia
const set1 = new Set([1,2,3]);
const set2 = new Set([3,4,5]);

const diferencia = new Set([...set1].filter(x => !set2.has(x)));

console.log('Diferencia:',diferencia);
// Diferencia simétrica
const difSimetrica = new Set(
  [...[...set1].filter(x => !set2.has(x)),
  ...[...set2].filter(x => !set1.has(x))
]);
console.log('Diferencia Simétrica:', difSimetrica)