/*
 * EJERCICIO:
 * Explora el concepto de "logging" en tu lenguaje. Configúralo y muestra
 * un ejemplo con cada nivel de "severidad" disponible.
 */

//salida general de información registrada.
console.log('Mensaje de log');

// Muestra un mensaje de error
console.error('Mensaje de error 🛑');
// Crea un nuevo grupo, identando todos los mensajes subsecuentes en un nuevo nivel.
console.group();
// registra un mensaje con el nivel de debug
console.debug('Mensaje de DEBUG ');
// Finaliza el grupo
console.groupEnd();
// Muestra un mensaje de advertencia
console.warn('Mensaje de WARN ⚠');
const obj = {
  name: 'Sebastian',
  username: 'JsPolo',
  email: 'jspolo@gmail.com'
}

console.dir(obj);
console.dirxml(obj);
// Muestra un mensaje de información en la consola.
console.info('Esto es un mensaje de información ℹ');
// Muestra los datos en forma de tabla
console.table(['Manzanas', 'Peras', 'Naranjas']);
// console.time();
// Muestra cuantas veces fue llamada la función Count()
console.count();
// console.timeEnd();
// console.timeLog();

// Muestra la traza de pila
console.trace();
console.log('Limpiendo los console en 5 seg');
// setTimeout(()=> {
//   // Limpia la consola.
//   console.clear();
// }, 5000);


/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa ficticio de gestión de tareas que permita añadir, eliminar
 * y listar dichas tareas.
 * - Añadir: recibe nombre y descripción.
 * - Eliminar: por nombre de la tarea.
 * Implementa diferentes mensajes de log que muestren información según la
 * tarea ejecutada (a tu elección).
 * Utiliza el log para visualizar el tiempo de ejecución de cada tarea.
 */

console.log('--------------Extra------------------');

class TaskManager{
  constructor(){
    // Atributos de la clase
    this.name;
    this.descripcion;
    this.task = new Map();
  }

  addTask(name, descripcion){
    console.time('addTask_Time')
    this.task.set(this.name = name, this.descripcion = descripcion);
    console.info('The task is add successfully! ℹ');
    console.timeEnd('addTask_Time');
  }

  deleteTask(nameTask){
    console.time('deleteTask_Time');
    console.warn('Warning: A task will be deleted ⚠');
    return this.task.keys().forEach(task => {
      if(task.toLowerCase() === nameTask.toLowerCase()) {
        console.info('The task has been successfully removed ℹ');
        this.task.delete(task);
        console.timeEnd('deleteTask_Time');
      };
    });
  }

  listTask(){
    console.time('listTask_Time');
    console.info('Listing saved task');
    console.log(this.task);
    console.timeEnd('listTask_Time');
  }
}

const task = new TaskManager();
task.addTask('English', 'Homework in English - Exercise 2');
task.addTask('Spanish', 'Homework in Spanish - Exercise 1');
task.addTask('Math', 'Homework in Math - Training Math');
task.deleteTask('English');
task.listTask();
