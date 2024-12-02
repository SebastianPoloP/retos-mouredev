/*
 * EJERCICIO:
 * Crea una función que se encargue de sumar dos números y retornar
 * su resultado.
 * Crea un test, utilizando las herramientas de tu lenguaje, que sea
 * capaz de determinar si esa función se ejecuta correctamente.
 */

function sumar(a, b) {
  return a + b;
}

function testing({ a, b, expected }) {
  let result = sumar(a, b);
  
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 'Los argumentos deben ser enteros o decimales'
  }

  if (result === expected) {
    return 'Todo bien';
  }

  return new Error('Todo mal');
}

console.log(testing({a: 5, b: 5, expected: 10 }));

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un diccionario con las siguientes claves y valores:
 * "name": "Tu nombre"
 * "age": "Tu edad"
 * "birth_date": "Tu fecha de nacimiento"
 * "programming_languages": ["Listado de lenguajes de programación"]
 * Crea dos test:
 * - Un primero que determine que existen todos los campos.
 * - Un segundo que determine que los datos introducidos son correctos.
 */

const user = new Map()
user.set("name", 'Sebastian');
user.set("age", '26');
user.set("birth_date", '04-08-1998');
user.set("programming_languages", ['Javascript']);

function existAllField(object) {
  let missingField = [];
  for(let[key, value] of object){
    if(value === undefined){
      missingField.push(key)
    }
  }

  if (missingField.length > 0) {
    return new Error('Uno de los campos no existe')
  }
  return 'Todos los campos existen'
}

function fieldTypeCorrect(object){
  let fieldTypeIncorrect = [];
  for(let [key, value] of object){
    if((key === 'name' || key === 'age' || key === 'birth_day') && typeof value !== 'string'){
      fieldTypeIncorrect.push(key);
    }else if(key === 'programming_languages' && (!Array.isArray(value) || !value.every(item => typeof item === 'string'))){
      fieldTypeIncorrect.push(key)
    }
  }
  if(fieldTypeIncorrect.length > 0){
    return new Error('Los datos no son correctos');
  }
  return 'Los campos recibidos son correctos';
}

console.log(existAllField(user));
console.log(fieldTypeCorrect(user));

