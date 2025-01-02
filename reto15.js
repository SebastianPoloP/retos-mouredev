/*
 * EJERCICIO:
 * Utilizando tu lenguaje, crea un programa capaz de ejecutar de manera
 * asíncrona una función que tardará en finalizar un número concreto de
 * segundos parametrizables. También debes poder asignarle un nombre.
 * La función imprime su nombre, cuándo empieza, el tiempo que durará
 * su ejecución y cuando finaliza.
 */

// async function printName(seconds, name){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(console.log(name))
//     }, seconds)
//   });
// }

// Best version
async function printName(seconds, name) {
  console.log(`Empezando! La ejecución durara ${seconds} segundos`);
  await new Promise(resolve => setTimeout(resolve, seconds * 1000));
  console.log(name);
  const endTime = new Date().toLocaleTimeString();
  console.log(`Proceso finalizado a las: ${endTime}`);
}

// printName(3, 'Sebastian');
/*
 * DIFICULTAD EXTRA (opcional):
 * Utilizando el concepto de asincronía y la función anterior, crea
 * el siguiente programa que ejecuta en este orden:
 * - Una función C que dura 3 segundos.
 * - Una función B que dura 2 segundos.
 * - Una función A que dura 1 segundo.
 * - Una función D que dura 1 segundo.
 * - Las funciones C, B y A se ejecutan en paralelo.
 * - La función D comienza su ejecución cuando las 3 anteriores han finalizado.
 */

async function taskManager() {
  await Promise.all([printName(3, 'Función C'), printName(2, 'Función B'), printName(1, 'Función A')]);
  await printName(1, 'Función D');
}

taskManager();