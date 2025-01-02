/*
 * EJERCICIO:
 * Utilizando tu lenguaje, emplea 3 mecanismos diferentes para imprimir
 * números del 1 al 10 mediante iteración.
 *
 */
console.log('Ciclo For:')
for (let i = 1; i <= 10; i++) {
  console.log(i)
}
console.log('Ciclo While:')
let i = 1;
while(i <= 10){
  console.log(i);
  i++;
}
console.log('Ciclo Do While:')
let int = 1;
do {
  console.log(int);
  int++;
} while (int <= 10);
/*
 * DIFICULTAD EXTRA (opcional):
 * Escribe el mayor número de mecanismos que posea tu lenguaje
 * para iterar valores. ¿Eres capaz de utilizar 5? ¿Y 10?
 */

console.log('Ciclo For...In:');
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e:5,
  f:6,
  g:7,
  h:8,
  i:9,
  j:10
}
for (const key in obj) {
  console.log(obj[key])
}
console.log('Ciclo For...Of:');
const arr = [1,2,3,4,5,6,7,8,9,10];
for (const num of arr) {
  console.log(num);
}
console.log('Ciclo For...Of iterando en un string');
const str = '1234567890';
for (const num of str) {
  console.log(num)
}
console.log('Ciclo For Each en un Arr:')
arr.forEach(element => {
  console.log(element)
});

function iterator(num){
  if(num === 0){
    return 1;
  }
  num - iterator(num - 1);
  console.log(num);
}
let num = 10;
console.log('Usando recursividad')
iterator(num);

console.log('Ciclo For Each en un Map:');
new Map(Object.entries(obj)).forEach(element => {
  console.log(element);
});

console.log('Iterando en un Set con ForEach');
new Set([1,2,3,4,5,6,7,8,9,10]).forEach(element =>{
  console.log(element);
})