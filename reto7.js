/*
 * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje).
 */

let arr = [1, 2, 3]

const pila = (arr) => {
    arr.push(4);
    console.log(arr)
    arr.pop();
    return arr;
}

console.log(pila(arr));

const cola = (arr) => {
    arr.unshift(4);
    console.log(arr);
    arr.pop();
    return arr;
}

console.log(cola(arr));

/**
 * DIFICULTAD EXTRA (opcional):
 * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
 *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
 *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
 *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
 *   el nombre de una nueva web.
 */

const app = () => {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let arr = [];
    const menu = () => {
        rl.question('Escribe una URL o interactua con' +
            ' las palabras Adelante/Atrás/Historial/Salir ' +
            'en la pagina: ', opcion => {
                opcion = opcion.toLowerCase();
                switch (opcion) {
                    case 'adelante':
                    default:
                        arr.push(opcion);
                        menu()
                        break;
                    case 'atras':
                        if (arr.length == 0) {
                            arr.push('Nueva Pagina.');
                            console.log(arr[0])
                            menu();
                            break;
                        }
                        arr.pop();
                        if (arr.length == 0) {
                            console.log('No hay paginas para regresar.');
                            console.log(arr);
                            menu();
                            break;
                        }
                        console.log(arr[arr.length - 1]);
                        menu();
                        break;
                    case 'salir':
                        console.log('Saliendo de la página.');
                        rl.close();
                        break;
                    case 'historial':
                        console.log(arr);
                        menu();
                        break;

                }
            });

    }
    menu();

}
// app();

/* Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
 *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
 *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
 *   interpretan como nombres de documentos.
 */

const impresora = () => {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // Impresiones en cola
    let impresionesEnCola = ['CV', 'Identificación', 'Exámenes', 'Laboratorios'];

    // Menu donde interactua el usuario.
    const menu = () => {
        console.log('\n------------Menu----------------')
        rl.question('Escribe "Imprimir" para imprimir un documento\n' +
            'Escribe "Imprimir todo" para imprimir todos los documentos\n' +
            'Escribe "Agregar" para agregar un nuevo documento a imprimir\n' +
            'Escribe "Salir" para cerrar la aplicación\n', opcion => {
                opcion = opcion.toLowerCase();
                switch (opcion) {
                    case 'imprimir':
                        // Validando que el array no este vació.
                        if (impresionesEnCola.length > 0) {
                            print();
                            console.log('Documentos en espera de imprimir: ' + impresionesEnCola);
                            impresionesEnCola.pop();
                        } else {
                            console.log('No hay elementos en la lista para imprimir.')
                        }
                        menu();
                        break;
                    case 'imprimir todo':
                        // Bucle While para iterar en el array y mostrar TODOS los elementos uno por uno
                        while (impresionesEnCola.length > 0) {
                            print();
                            impresionesEnCola.pop();
                        }
                        console.log('Todos los documentos han sido impresos.')
                        rl.close();
                        break;
                    case 'agregar':
                        rl.question('Introduce el nuevo documento a imprimir.', nomDoc => {
                            // Usamos unshift() para agregar el elemento al principio del array
                            impresionesEnCola.unshift(nomDoc);
                            console.log('Haz añadido el documento: ' + nomDoc);
                            console.log('Documentos en espera a imprimir: ' + impresionesEnCola);
                            menu();
                        });
                        break;
                    case 'salir':
                        rl.close();
                        break;
                    default:
                        console.log('Error! no existe la opción ' + opcion +
                            '\nVerifica que no tienes tíldes o caracteres especiales.');
                        menu();
                        break;
                }
            });
    }
    
    /**
     * Función sencilla para mostrar en pantalla la impresión.
     * @returns documento a imprimir en la última posición del array.
     */
    const print = () => {
        return console.log(`Imprimiendo: ${impresionesEnCola[impresionesEnCola.length - 1]}`);
    }
    menu();
}

impresora();
