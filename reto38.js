/*
 * EJERCICIO:
 * He presentado mi proyecto más importante del año: mouredev pro.
 * Un campus para la comunidad, que lanzaré en octubre, donde estudiar
 * programación de una manera diferente.
 * Cualquier persona suscrita a la newsletter de https://mouredev.pro
 * accederá a sorteos mensuales de suscripciones, regalos y descuentos.
 *
 * Desarrolla un programa que lea los registros de un fichero .csv y
 * seleccione de manera aleatoria diferentes ganadores.
 * Requisitos:
 * 1. Crea un .csv con 3 columnas: id, email y status con valor "activo"
 *    o "inactivo" (y datos ficticios).
 *    Ejemplo: 1 | test@test.com | activo
 *             2 | test2@test.com | inactivo
 *    (El .csv no debe subirse como parte de la corrección)
 * 2. Recupera los datos desde el programa y selecciona email aleatorios.
 * Acciones:
 * 1. Accede al fichero .csv y selecciona de manera aleatoria un email
 *    ganador de una suscripción, otro ganador de un descuento y un último
 *    ganador de un libro (sólo si tiene status "activo" y no está repetido).
 * 2. Muestra los emails ganadores y su id.
 * 3. Ten en cuenta que la primera fila (con el nombre de las columnas)
 *    no debe tenerse en cuenta.
 */

const fs = require("node:fs");

const nameFile = "mouredevPro.csv";

// Función para leer el archivo CSV
function readCsv(file) {
  const data = fs.readFileSync(file, "utf8");
  const users = [];
  data.split("\n").forEach((user, i) => {
    if (i === 0) {
      return;
    }
    user = user.split(",");
    const [id, email, status] = user;
    users.push({
      id: id,
      email: email,
      status: status,
    });
  });

  return users;
}

// Seleccina tres (3) ganadores
function selectWinners(data) {
  const winners = [];
  
  while (winners.length < 3) {
    const numRandom = Math.floor(Math.random() * data.length);

    if (!winners.includes(data[numRandom])) {
      if (data[numRandom].status === "activo") {
        winners.push(data[numRandom]);
      }
    }

  }

  return winners;
}

// Muestra los tres ganadores
function displayWinners(winners) {
  const prize = ["Subcripción", "Descuento", "Libro"];
  winners.forEach((winner, i) => {
    console.log(`Ganador de ${prize[i]}: ${winner.email} (ID: ${winner.id})`);
  });
}

try {
  const data = readCsv(nameFile);
  const winners = selectWinners(data);
  displayWinners(winners);
} catch (error) {
  console.log(error);
}
