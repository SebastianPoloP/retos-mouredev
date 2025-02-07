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

function selectWinners(data) {
  const winners = new Set();

  while (true) {
    const numRandom = Math.floor(Math.random() * data.length);
    if (winners.size === 3) {
      break;
    }

    if (winners.has(data[numRandom])) {
      continue;
    }

    if (data[numRandom].status === "activo") {
      winners.add(data[numRandom]);
    }
  }

  return winners;
}

function displayWinners(winners) {
  const [sbscrption, discount, book] = winners;
  console.log(`
    Ganador de subscripción: ${(sbscrption.id, sbscrption.email)} 
    Ganador de un Descuento: ${(discount.id, discount.email)} 
    Ganador de un libro: ${(book.id, book.email)}`
  );
}

try {
  const data = readCsv(nameFile);
  const winners = selectWinners(data);
  displayWinners(winners);
} catch (error) {
  console.log(error);
}