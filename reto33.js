/*
 * EJERCICIO:
 * ¡Disney ha presentado un montón de novedades en su D23!
 * Pero... ¿Dónde está Mickey?
 * Mickey Mouse ha quedado atrapado en un laberinto mágico
 * creado por Maléfica.
 * Desarrolla un programa para ayudarlo a escapar.
 * Requisitos:
 * 1. El laberinto está formado por un cuadrado de 6x6 celdas.
 * 2. Los valores de las celdas serán:
 *    - '⬜️' Vacío
 *    - '⬛️' Obstáculo
 *    - '🐭' Mickey
 *    - '🚪' Salida
 * Acciones:
 * 1. Crea una matriz que represente el laberinto (no hace falta
 * que se genere de manera automática).
 * 2. Interactúa con el usuario por consola para preguntarle hacia
 * donde se tiene que desplazar (arriba, abajo, izquierda o derecha).
 * 3. Muestra la actualización del laberinto tras cada desplazamiento.
 * 4. Valida todos los movimientos, teniendo en cuenta los límites
 * del laberinto y los obtáculos. Notifica al usuario.
 * 5. Finaliza el programa cuando Mickey llegue a la salida.
 */

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const maze = [
  ["🐭", "⬛️", "⬛️", "⬛️", "⬛️", "⬛️"],
  ["⬜️", "⬛️", "⬛️", "⬛️", "⬜️", "⬛️"],
  ["⬜️", "⬛️", "⬛️", "⬛️", "⬜️", "⬛️"],
  ["⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️"],
  ["⬛️", "⬜️", "⬛️", "⬜️", "⬛️", "⬛️"],
  ["⬛️", "⬜️", "⬛️", "⬜️", "⬜️", "🚪"]
]

let mickey = [0, 0];

function printMaze() {
  maze.forEach(row => {
    console.log(row.join(''));
  });
  console.log();
}

const moveMickey = (direction) => {
  let [currentRow, currentColumn] = mickey;
  let newRow = currentRow;
  let newColumn = currentColumn;

  switch (direction) {
    case 'w':
      newRow = currentRow - 1;
      break;
    case 's':
      newRow = currentRow + 1;
      break;
    case 'a':
      newColumn = currentColumn - 1;
      break;
    case 'd':
      newColumn = currentColumn + 1;
      break;
    default:
      console.log('Tecla inválido! Escoge un tecla válida');
      return;
  }

  if (newRow < 0 || newRow > maze.length || newColumn < 0 || newColumn > maze.length) {
    console.log('Movimiento inválido, no se puede salir del laberinto!');
    return;
  } else {
    if (maze[newRow][newColumn] == "⬛️") {
      console.log('En esa dirección hay un obstaculo.');
      return;
    } else if (maze[newRow][newColumn] == "🚪") {
      console.info('Haz encontrado la salida!');
      maze[currentRow][currentColumn] = "⬜️";
      maze[newRow][newColumn] = "🐭";
      printMaze();
      
    } else {
      maze[currentRow][currentColumn] = "⬜️";
      maze[newRow][newColumn] = "🐭";
      mickey = [newRow, newColumn];
    }
  }
}

const askUser = () => {
  printMaze();
  console.info('¿Qué deseas hacer?');
  console.info('[W] Arriba');
  console.info('[S] Abajo');
  console.info('[A] Izquierda');
  console.info('[D] Derecha');
  rl.question("¿Hacia dónde se mueve Mickey? ", (direction) => {
    moveMickey(direction.toLowerCase());
    askUser();  // Recursivamente pregunta de nuevo
  });
}

askUser();