/*
 * EJERCICIO:
 * ¡La temporada 2 de "Los Anillos de Poder" está a punto de estrenarse!
 * ¿Qué pasaría si tuvieras que encargarte de repartir los anillos
 * entre las razas de la Tierra Media?
 * Desarrolla un programa que se encargue de distribuirlos.
 * Requisitos:
 * 1. Los Elfos recibirán un número impar.
 * 2. Los Enanos un número primo.
 * 3. Los Hombres un número par.
 * 4. Sauron siempre uno.
 * Acciones:
 * 1. Crea un programa que reciba el número total de anillos
 *    y busque una posible combinación para repartirlos.
 * 2. Muestra el reparto final o el error al realizarlo.
 */

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(num) {
  if (num < 2) return false

  for (let i = 2; i <= (num ** 0.5); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function distributionRing(totalRings) {

  const sauron = 1;
  totalRings -= sauron;
  const distributionRings = []

  for (let elfos = 1; elfos <= totalRings; elfos += 2) {
    for (let human = 2; human < totalRings; human+=2) {
      const dwarf = totalRings - human - elfos;
      if (isPrime(dwarf)) {
        const human = totalRings - elfos - dwarf;
        if (human > 0 && human % 2 === 0) {
          distributionRings.push({
            humanos: human,
            elfos: elfos,
            enanos: dwarf,
            sauron: sauron
          });
        }
      }
    }
  }

  if(distributionRings.length > 0){
    return distributionRings;
  }

  return console.info('No se ha podido distribuir los anillos');
}

try {
  
  rl.question('Cuántos anillos hay? ', rings => {
    const distribution = distributionRing(rings);
    if(distribution){
      console.log(distribution[Math.floor(distribution.length / 2)])
    }

    if(typeof distribution === 'string'){
      console.info(distribution);
    }
    rl.close();
  });


} catch (error) {
  
}