/*
 * EJERCICIO:
 * ¡Los JJOO de París 2024 han comenzado!
 * Crea un programa que simule la celebración de los juegos.
 * El programa debe permitir al usuario registrar eventos y participantes,
 * realizar la simulación de los eventos asignando posiciones de manera aleatoria
 * y generar un informe final. Todo ello por terminal.
 * Requisitos:
 * 1. Registrar eventos deportivos.
 * 2. Registrar participantes por nombre y país.
 * 3. Simular eventos de manera aleatoria en base a los participantes (mínimo 3).
 * 4. Asignar medallas (oro, plata y bronce) basándose en el resultado del evento.
 * 5. Mostrar los ganadores por cada evento.
 * 6. Mostrar el ranking de países según el número de medallas.
 * Acciones:
 * 1. Registro de eventos.
 * 2. Registro de participantes.
 * 3. Simulación de eventos.
 * 4. Creación de informes.
 * 5. Salir del programa.
 */

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

class Participant {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  equals(participant) {
    if (participant instanceof Participant) {
      return this.name === participant.name && this.country === participant.country;
    }
    return false;
  }

  hashCode() {
    return `${this.name}-${this.country}`.hashCode();
  }
}

class Olympics {
  constructor() {
    this.events = [];
    this.participants = {};
    this.report = {};
    this.eventResult = {};
    this.countryResult = {};
  }

  registerEvent() {
    rl.question('Qué evento desea agregar? ', event => {
      event = event.trim();
      if (this.events.includes(event)) {
        console.info('El evento ya esta registado');
        return menu();
      }

      this.events.push(event);
      console.info(`El evento ${event} ha sido registrado correctamente`);
      menu();
    });
  }

  registerParticipant() {
    // Validamos que hayan eventos
    if (this.events.length <= 0) {
      console.info('No hay eventos registrados, por favor registra uno');
      return menu();
    }

    // Preguntamos al usuario, por consola, datos del participante.
    rl.question('Nombre del participante? ', name => {
      rl.question('País del participante? ', country => {
        const participant = new Participant(name.trim(), country.trim());

        // Mostramos los eventos deportivos que estan disponibles.
        console.info('Eventos Deprotivos:');
        for (let i = 0; i < this.events.length; i++) {
          // Muestra el evento y el indice + 1
          console.info(`${i + 1} ${this.events[i]}`);
        }

        // Le pedimos al participnate en que evento participara
        rl.question('Selecciona un evento deportivo donde el participante desempeñara su labor ', index => {
          index = parseInt(index) - 1;

          // Validamos que el participante haya escogido un evento que este almacenado
          if (index >= 0 && index < this.events.length) {
            // Guardamos el evento para asignarlo al participante
            const eventChoise = this.events[index];
            // Encontramos el usuario en la lista de participante, si se encuentra le informamos al usuario que el participante ya esta registrado
            if (this.participants[eventChoise] && this.participants[eventChoise].some(p => p.equals(participant))) {
              return setTimeout(() => {
                console.log('La/el participante ya esta registrado.');
                menu();
              }, 2000)
            } else {
              if (!this.participants[eventChoise]) {
                this.participants[eventChoise] = [];
              }
            }

            this.participants[eventChoise].push(participant)

            return setTimeout(() => {
              console.info(`La/El participante ${name}, del país ${country} ha sido registrado/a`);
              console.log(this.participants)
              menu();
            }, 2000)
          }

          return setTimeout(() => {
            console.info('Error registrando particpante. El evento selecciona es inválido.');
            menu();
          }, 3000)
        });
      })
    });
  }

  simulatedGame() {
    // Validamos que hayan eventos registrados
    if (this.events.length === 0) {
      console.info('No hay eventos registrados.');
      return menu();
    }

    // Recorre los eventos
    // Validamos si hay la cantidad de participantes mínimos para simular el juego
    this.events.forEach(event => {
      if (!this.participants[event] || this.participants[event].length < 3) {
        console.info('No hay participantes suficientes para simular el evento.');
        return;
      }

      const eventParticipant = [...this.participants[event]];
      const shuffleParticipantes = this.shuffleArray(eventParticipant).splice(0, 3);

      const [gold, silver, bronze] = shuffleParticipantes;  
      this.eventResult[event] = [gold, silver, bronze];

      this.updateCountryMedalResult(gold.country, 'gold');
      this.updateCountryMedalResult(silver.country, 'silver');
      this.updateCountryMedalResult(bronze.country, 'bronze');

      console.log(`Resultados de la simulación del evento ${event}`);
      console.info(`Oro: ${gold.name} (${gold.country})`);
      console.info(`Plata: ${silver.name} (${silver.country})`);
      console.info(`Bronce: ${bronze.name} (${bronze.country})`);
    });
    menu();
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  updateCountryMedalResult(country, medal) {
    if (!this.countryResult[country]) {
      this.countryResult[country] = { gold: 0, silver: 0, bronze: 0 };
    }
    this.countryResult[country][medal] += 1;
  }

  showReport() {
    console.info('Informe de los juegos Olimpicos:');

    if (Object.keys(this.eventResult).length > 0) {
      console.info('Informe por evento: ');

      for (const [event, winners] of Object.entries(this.eventResult)) {
        console.info(`Evento ${event}`);

        console.log(`Oro: ${winners[0].name} (${winners[0].country})`);
        console.log(`Plata: ${winners[1].name} (${winners[1].country})`);
        console.log(`Bronce: ${winners[2].name} (${winners[2].country})`);
      }
    } else {
      console.info('No hay resultados de eventos registrados.');
    }

    console.log();

    if (Object.keys(this.countryResult).length > 0) {
      console.info('Informe por país: ');

      const sortCountries = Object.entries(this.countryResult).sort((a, b) => {
        const [countryA, medalsA] = a;
        const [countryB, medalsB] = b;
        return medalsB.Gold - medalsA.Gold || medalsB.Silver - medalsA.Silver || medalsB.Bronze - medalsA.Bronze;
      });

      for(const [country, medals] of sortCountries){
        console.info(`${country}: Oro ${medals.gold}, Plata ${medals.silver}, Bronce ${medals.bronze}`)
      }
    }else {
      console.info('No hay medallas registradas');
    }

    menu();
  }
}

const olympics = new Olympics();

const menu = () => {
  console.log()
  console.info('1. Registro de eventos.');
  console.info('2. Registro de participantes.');
  console.info('3. Simulación de eventos.');
  console.info('4. Creación de informes.');
  console.info('5. Salir del programa.');
  rl.question('Seleccione una opcion: ', opcion => {
    switch (opcion) {
      case '1':
        olympics.registerEvent();
        break;
      case '2':
        olympics.registerParticipant();
        break;
      case '3':
        olympics.simulatedGame();
        break;
      case '4':
        olympics.showReport();
        break;
      case '5':
        console.log('Saliendo del simulador.');
        rl.close();
        break;
      default:
        console.log('Opcion invalida!');
        menu();
        break;
    }
  });
}

menu();
