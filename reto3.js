// Estructuras de datos
// DataSet
/**
 * Estos son los arrays. Pueden contener diferentes tipos
 */

let array = [1,'hola', true, undefined, 2n, Symbol()];
let array2 = [1,2,3,4,5];

//Así podemos acceder al primer y al último elemento del array
console.log(array);
console.log(array2[array2.length-1]);

// Añadiendo un nuevo elemento al array 

array.push('Naranja'); // Así añadiremos un elemento al final de una array
console.log(array); 

array.unshift('Fresa'); // Así añadiremos un elemento al inicio de una array
console.log(array);

array.pop(); // Eliminar el último elemento de una array
console.log(array); 

array.shift(); // Eliminar el primer elemento de una array
console.log(array);

console.log(array.indexOf(undefined)); // encontrar el indice de un elemento del array

// Eliminando un elemento del array mediante su posición

array2.splice(0,1); // Aquí le tenemos que pasar primero el indice y luego cuantos elementos se quieren
// Eliminar
console.log(array2);

// Siguiendo lo anterior, podemos eliminar dos o varios elementos de un array seguidos
array2.splice(0, 3); // En este caso le damos primero el indice y luego cuando 
// Elementos va a eliminar desde ese indice.
console.log(array2);

let copia = array2.slice(); // Copiar un array
console.log(copia);

console.log(Array.from('Hola mundo'));
// Objetos 
/**
 * Los obejtos es una colección de propiedades, y una propiedad es una asociación entre un nombre 
 * (llave) y un valor.
 */

// En Js se puede definir un objeto de dos maneras.

let car = {
    make : 'Ford',
    model : 'Mustang',
    year : '1969',
    owner : 'Sebastian'
};


console.log(car.owner);

// O: 

let user = new Object();
user.nombre = 'Andrés';
user.id = '01';
user.contrasena = 'asjdflkajdslñf124';
user.fechaNacimiento = '04-08-98';

console.log(user.nombre); // Normalmente se utiliza mas la primera opción que la segunda.

//Recorriendo todas las propiedades enumerables de un objeto o cadena de prototipos.
for(elements in car){
    console.log(`${elements}: ${car[elements]}`);
}


// Mostrar las claves de un objeto enumerable.

console.log(Object.keys(user).sort());

// Devuelve un array con todos los nombres de las propiedades del objeto, independientemente
// si son enumerables o no.
console.log(Object.getOwnPropertyNames(user).sort());

// Set
/**
 * El objeto Set le permite almacenar valores únicos de cualquier tipo, ya sean valores primitivos
 * o referencias a objetos, por ejemplo:
 */

let mySet = new Set();
mySet.add(1); // Add es para agregar elementos en el Set
mySet.add(2);
mySet.add(2); // Para comprobar que set almacena valores únicos.

console.log(mySet);

mySet.add('Hola'); // agregando un String en el Set
console.log(mySet)

// Podemos agregar objetos dentro de un Set
let o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2});

console.log(mySet.has(1));
console.log(mySet.has('Culo'));
console.log(mySet.has(2));

console.log(mySet.size);

// Eliminar un elemento del Set

mySet.delete('Hola');
console.log(mySet);

// Iterando en un Set
console.log('-----------------------');
for(let item of mySet) console.log(item);

// Map()

let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(123, 'Number');
myMap.set(true, 'Boolean');

console.log(myMap);

// OBteniendo elementos asociado a la clave con el método Get()

console.log(myMap.get('name'));
console.log(myMap.get(123));

// Comprobando una clave existente

console.log(myMap.has('name'));
console.log(myMap.has('Unknown'));

// Eliminar elementos utilizando el método Delete.
myMap.delete(123);
console.log(myMap);

// Obtener el tamaño del Map
console.log(myMap.size);

// Borrar todos los elementos de un map

myMap.clear();
console.log(myMap);

let myMap2 = new Map([
    ['Nombre', 'Sebastian'],
    [123, 'Number'],
    [true, 'Boolean'],
    [undefined, 'Undefined']
]);

// Iterando en un Map}

// ForEach
console.log('-----------------------------------------')
myMap2.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// For Of
for(let [key, value] of myMap2.entries()){
    console.log('* '+ `${key}: ${value}`);
}

// También podemos usar el For Of para sacar solo el valor o la llave
for(let key of myMap2.keys()){
    console.log('-', key);
}

for(let value of myMap2.values()){
    console.log('° ',value);
}

/**
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

const app = () => {

    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let contactos = [];

    const validarTelefono = (numero) => {
        return /^[0-9]{10,10}$/.test(numero);
    }

    const menu = () => {
        console.log('\n--- Agenda ---');
        console.log('1. Buscar Contacto');
        console.log('2. Insertar contacto');
        console.log('3. Actualizar contacto.');
        console.log('4. Eliminar Contacto');
        console.log('5. Salir.');
        rl.question('Seleccione una opción de 1-5: ', opcion => {
            switch (opcion) {
                case '1':
                    buscarContactoPrompt();
                    break;
                case '2':
                    insertarContacto();
                    break;
                case '3':
                    actualizarContacto();
                    break;
                case '4':
                    eliminarContacto();
                    break;
                case '5':
                    console.log('Cerrando programa...');
                    rl.close();
                    break;
                default:
                    console.log('Opción no valida');
                    menu();
                    break;
            }
        });
    }
    const buscarContacto = (nombre) => {
        return contactos.find(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase());
    }
    const insertarContacto = () => {
        rl.question('¿Cuál es el nombre del contacto? ', (nombre) => {
            rl.question('¿Cuál es su numero telefonico? ', (numero) => {
                if (!validarTelefono(numero)) {
                    console.log('El numero recibido no es valido.');
                    insertarContacto();
                } else {
                    contactos.push({ nombre }, { numero });
                    console.log(contactos);
                    menu();
                }
            });
        });
    }
    const buscarContactoPrompt = () => {
        rl.question('Deseas mostrar todos los contactos? ', opcion => {
            switch(opcion.toLowerCase()){
                case 'si':
                    console.log(contactos);
                    menu();
                    break;
                default:
                    rl.question('Buscar: ', (nombre) => {
                        const contacto = buscarContacto(nombre);
                        if (contacto) {
                            console.log(`Contacto encontrado: ${contacto.nombre} - ${contacto.numero}`);
                        } else {
                            console.log('Contacto no encontrado.');
                        }
                        menu();
                    });
                    break;
            }
        });

    }

    const actualizarContacto = () => {
        rl.question('Introduce el nombre del contacto que quieres actualizar: ', (nombre) => {
            const contacto = buscarContacto(nombre);
            if (contacto) {
                rl.question('Introduce el nuevo número de telefono: ', (numero) => {
                    if (!validarTelefono(numero)) {
                        console.log('Numero no valido.');
                        actualizarContacto();
                    } else {
                        contacto.numero = numero;
                        console.log('Contacto actualizado.');
                        menu();
                    }
                });
            } else {
                console.log('Contacto no existente.');
                menu();
            }

        });
    }

    const eliminarContacto = () => {
        rl.question('Escriba el nombre del contacto a eliminar: ', (nombre) => {
            const index = contactos.findIndex(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase());
            if (index !== -1) {
                contactos.splice(index, 2);
                console.log('Contacto eliminado.')
            } else {
                console.log('Contacto no encontrado.');
            }
            menu();
        });
    }
    menu();
}
app();