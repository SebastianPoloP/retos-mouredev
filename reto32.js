/*
 * EJERCICIO:
 * ¡Deadpool y Wolverine se enfrentan en una batalla épica!
 * Crea un programa que simule la pelea y determine un ganador.
 * El programa simula un combate por turnos, donde cada protagonista posee unos
 * puntos de vida iniciales, un daño de ataque variable y diferentes cualidades
 * de regeneración y evasión de ataques.
 * Requisitos:
 * 1. El usuario debe determinar la vida inicial de cada protagonista.
 * 2. Cada personaje puede impartir un daño aleatorio:
 *    - Deadpool: Entre 10 y 100.
 *    - Wolverine: Entre 10 y 120.
 * 3. Si el daño es el máximo, el personaje que lo recibe no ataca en el
 * siguiente turno, ya que tiene que regenerarse (pero no aumenta vida).
 * 4. Cada personaje puede evitar el ataque contrario:
 *    - Deadpool: 25% de posibilidades.
 *    - Wolverine: 20% de posibilidades.
 * 5. Un personaje pierde si sus puntos de vida llegan a cero o menos.
 * Acciones:
 * 1. Simula una batalla.
 * 2. Muestra el número del turno (pausa de 1 segundo entre turnos).
 * 3. Muestra qué pasa en cada turno.
 * 4. Muestra la vida en cada turno.
 * 5. Muestra el resultado final.
 */

// Class abstract
// class Character {
//   constructor() {
//     this.damage;
//     this.evasion;

//     if (this.constructor === Character) {
//       throw new Error('This class is abstract')
//     }
//   }

//   damage() { throw new Error('This method must be implement') }
// }

// class Deadpool extends Character {
//   constructor(life) {
//     super();
//     this.name = 'Deadpool'
//     this.damage;
//     this.evasion;
//     this.life = life;
//   }

//   propEvasion() {
//     return this.evasion = Math.random();
//   }

//   characterDamage() {
//     return this.damage = Math.floor(Math.random() * (100 - 10 + 1) + 10);
//   }

//   maxDamage(character) {
//     return character.name === 'Deadpool' && character.damage === 100;
//   }

//   characterEvasion(character) {
//     return character.name === 'Deadpool' && character.evasion < 0.25;
//   }
// }

// class Wolverine extends Character {
//   constructor(life) {
//     super();
//     this.name = 'Wolverine'
//     this.damage;
//     this.evasion;
//     this.life = life;
//   }

//   propEvasion() {
//     return this.evasion = Math.random();
//   }

//   characterDamage() {
//     return this.damage = Math.floor(Math.random() * (120 - 10 + 1) + 10);
//   }

//   maxDamage(character) {
//     return character.name === 'Wolverine' && character.damage === 120;
//   }

//   characterEvasion(character) {
//     return character.name === 'Wolverine' && character.evasion < 0.20;
//   }
// }

// function simulate(characterA, characterB) {
//   let i = 1;
//   let turn = true;
//   while (true) {
//     if (turn) {
//       characterA.characterDamage();
//       characterB.characterDamage();

//       characterA.propEvasion();
//       characterB.propEvasion();

//       console.info(`Turn: ${i}`);
//       if (characterB.characterEvasion(characterB)) {
//         console.info(`${characterB.name} ha evadido el ataque`);
//         turn = false;
//         continue;
//       }
//       if (characterA.maxDamage(characterA)) {
//         console.info(`${characterA.name} ha hecho el máximo daño: ${characterA.damage}`);
//         characterB.life = characterB.life - characterA.damage;
//         if (characterB.life < 0) {
//           console.info(`${characterA.name} ha ganado la batalla!`);
//           break;
//         }
//         turn = true;
//         continue;
//       }
//       console.log(`${characterA.name} ha realizado ${characterA.damage} de daño a ${characterB.name}`);
//       characterB.life = characterB.life - characterA.damage;
//       if (characterB.life < 0) {
//         console.info(`${characterA.name} ha ganado la batalla!`);
//         break;
//       }
//       turn = false;
//       i++;
//     } else {
//       console.info(`Turn: ${i}`);
//       if (characterA.characterEvasion(characterA)) {
//         console.info(`${characterA.name} ha evadido el ataque`);
//         turn = true;
//         continue;
//       }
//       if (characterB.maxDamage(characterA)) {
//         console.info(`${characterB.name} ha hecho el máximo daño: ${characterB.damage}`);
//         characterA.life = characterA.life - characterB.damage;
//         if (characterA.life < 0) {
//           console.info(`${characterB.name} ha ganado la batalla!`);
//           break;
//         }
//         turn = false;
//         continue;
//       }

//       console.log(`${characterB.name} ha realizado ${characterB.damage} de daño a ${characterA.name}`);
//       characterA.life = characterA.life - characterB.damage;
//       if (characterA.life < 0) {
//         console.info(`${characterB.name} ha ganado la batalla!`);
//         break;
//       }
//       turn = true;
//       i++;
//     }
//   }
// }

// simulate(wolverine, deadpool);


// Refactoring

class Character {
  constructor(name, damage, life, evasion) {
    this.name = name;
    this.damage = damage;
    this.life = life;
    this.evasion = evasion;
  }

  damageInBattle() {
    return Math.floor(Math.random() * (this.damage - 10 + 1) + 10);
  }

  evasionInBattle() {
    return Math.random();
  }

  maxDamage(damage) {
    return damage === this.damage;
  }

  evasionCharacter(evasion) {
    return evasion < this.evasion;
  }
}

function battle(charA, charB) {
  let turn = 1;
  let regenerate = false;
  
  while (charA.life > 0 || charB.life > 0) {
    let damageA = charA.damageInBattle();
    let damageB = charB.damageInBattle();
    console.info(`Round: ${turn}`);
    if (regenerate) {
      console.log(`${charA.name} se esta regenerando, no ataca este turno`);
      regenerate = false;
    } else {
      if (charB.evasionCharacter(charB.evasionInBattle())) {
        console.log(`${charB.name} ha evitado el ataque`)
      } else {
        if (charA.maxDamage(damageA)) {
          console.log(`${charA.name} ha realizado el daño máximo: ${charA.damage}`);
          regenerate = true;
          charB.life -= charA.damage;
          if (charB.life <= 0) {
            console.log(`${charA.name} ha ganado la batalla`);
            break;
          }
        } else {
          charB.life -= damageA;
          console.log(`${charA.name} ha realizado ${damageA} de daño`);
          if (charB.life <= 0) {
            console.log(`${charA.name} ha ganado la batalla`);
            break;
          }
        }
      }
    }

    if (regenerate) {
      console.log(`${charB.name} se esta regenerando, no ataca este turno.`);
      regenerate = false;
    } else {
      if (charA.evasionCharacter(charA.evasionInBattle())) {
        console.log(`${charA.name} ha evitado el ataque.`);
      } else {
        if (charB.maxDamage(damageB)) {
          console.log(`${charB.name} ha realizado el daño máximo: ${charB.damage}`);
          regenerate = true;
          charA.life -= charB.damage;
          if (charA.life <= 0) {
            console.log(`${charB.name} ha ganado la batalla`);
            break;
          }
        } else {
          charA.life -= damageB;
          console.log(`${charB.name} ha realizado ${damageB} de daño`);
          if (charA.life <= 0) {
            console.log(`${charB.name} ha ganado la batalla`);
            break;
          }
        }
      }
    }
    console.info(`La vida de ${charA.name} es: ${charA.life}`);
    console.info(`La vida de ${charB.name} es: ${charB.life}`);
    turn++;
  } 
}


const wolverine = new Character('Wolverine', 120, 300, 0.20);
const deadpool = new Character('Deadpool', 100, 400, 0.25);

battle(deadpool, wolverine);