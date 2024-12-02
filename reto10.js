/*
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 *
 */

// Forzando un error en el codigo

// try {
//   const arr = new Array(-1);
// } catch (e) {
//   // Imprimiendo el error
//   console.log(e);
//   // Con Throw podemos forzar lanzar un error
//   throw new Error('Forzando el error!');
// } finally{
//   console.log('Continuación de la app')
// }

// const division = 10 / -1;
// if(isFinite(division)){
//   console.log('Resultado:', division)
// }else{
//   throw new Error('No se puede dividir')
// }

// function indice(num){
//   const arr = [1,2,3,4]
//   const indice = arr[num];
//   if(indice === undefined){
//     throw new Error('Indice no encontrado')
//   }else{
//     return arr[num];
//   }
// }

// console.log(indice(0));
// console.log(indice(1));
// console.log(indice(2));
// console.log(indice(3));
// console.log(indice(4));

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
 */


// function createUser(user, password){

//   if(password.length > 4 || password.length < 0){
//     console.error('Se esperaba un contraseña entre 1 - 4 carácteres')
//   }

//   if(typeof user != 'string'){
//     throw new SyntaxError('Se esperaba un String')
//   }

//   const db = {
//     user: 'admin', 
//     pass: '1234'
//   }

//   try {

//     if(user === db.user && password === db.pass){
//       console.log('Usuario logeado')
//     }else{
//       throw new Error('Lo datos recibidos son inválidos')
//     }
//   } catch (e) {
//     console.error('Message Error: ', e.message);
//   } finally{
//     return 'Recargando página...Ejecución finalizada'
//   }
// }

// console.log(createUser('23452', '1234'))

class strTypeError extends Error {
  constructor(message){
    super(message);
    this.name = 'srtTypeError'
  }
}

function processParams(params){
  if(params.length < 3){
    throw new RangeError('El número de elementos de la lista debe ser mayor que dos.')
  } else if(params[1] === 0){
    throw new Error('El segundo elemento de la lista no puede ser un cero.')
  }else if(typeof params[2] === 'string'){
    throw new strTypeError('El tercer elemento no puede ser una cadena de texto.')
  }
  
  console.log(params[2]);
  console.log(params[0] / params[1]);
  console.log(params[2] + 5);
}

try {
  processParams([1,2,3,5])
} catch (e) {
  if(e instanceof RangeError){
    console.log("El número de elementos de la lista debe ser mayor que dos.");
  }else if(e instanceof strTypeError){
    console.log(e.message);
  }else if(e instanceof Error){
    console.error('El segundo elemento de la lista no puede ser un cero.')
  }else{
    console.log(`Se ha producido un error inesperado: ${e.message}`)
  }
} finally{
  console.log("El programa finaliza sin detenerse.");
}