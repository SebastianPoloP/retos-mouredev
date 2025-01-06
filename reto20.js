/*
 * EJERCICIO:
 * Utilizando un mecanismo de peticiones HTTP de tu lenguaje, realiza
 * una petición a la web que tú quieras, verifica que dicha petición
 * fue exitosa y muestra por consola el contenido de la web.
 */

try {
  const settings = {
    method: 'GET',
    hearders: {
      'Content-Type': 'text/htlm'
    }
  }
  // fetch('https://developer.mozilla.org/es/docs/Web/API/Window/fetch', settings)
  //   .then(res => res.text())
  //   .then(res => console.log(res));
} catch (error) {
  console.log(error);
}

/*
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la PokéAPI (https://pokeapi.co), crea un programa por
 * terminal al que le puedas solicitar información de un Pokémon concreto
 * utilizando su nombre o número.
 * - Muestra el nombre, id, peso, altura y tipo(s) del Pokémon
 * - Muestra el nombre de su cadena de evoluciones
 * - Muestra los juegos en los que aparece
 * - Controla posibles errores
 */
// Importación de readline para tomar información en la terminal
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function pokemon() {
  try {
    // Uso de readline para tomar el pokemon o la ID
    rl.question('Escribe el nombre o el numero en pokedex del pokemon que desear saber información: ', pokemon => {
      pokemon = pokemon.toLocaleLowerCase(); // Variable del dato introducido por el usuario convertido en minúsculas
      // Petición HTTP a la api de pokeapi
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      // Promesa para tratar un error, si no hay error enviar la respuesta en formato JSON
        .then(res => {
          if(res.status === 404) throw new TypeError('Error! Ese pokemon no existe o esta mal escrito.');
          return res.json();
        })
        // Segunda promesa para agregar la lógica y traer datos
        .then((res) => {
          // Desestructuración de datos que vienen de la respuesta
          const {
            id, name, height, weight, types, game_indices
          } = res;
          // Array vacia y ciclo for para sacar los juegos donde aparece el pokemon
          const games = []
          for (const { version } of game_indices) {
            games.push(version.name)
          }
          // Array vacia y ciclo para sacar los tipos o el tipo del pokemon
          const type = []
          for (const element of types) {
            type.push(element.type.name)
          }
          // Mostramos en pantalla los datos obtenidos
          console.log({
            Id: id,
            Nombre: name, Peso: weight,
            Altura: height,
            Tipo: type, 'Juegos en los que aparece': games
          });
          // Petición HTTP para poder acceder a la cadena de evoluciones del pokemon
          fetch(res.species.url)
            .then(res => res.json())
            .then(res => {
              // Petición HTTP de la cadena de evoluciones del pokemon
              fetch(res.evolution_chain.url)
                .then(res => res.json())
                .then(res => {
                  console.log('Evoluciones: ')
                  // Variable y ciclo para sacar las evoluciones del pokemon
                  let evolutionChain = res.chain
                  while (evolutionChain) {
                    console.log(evolutionChain.species.name);
                    evolutionChain = evolutionChain['evolves_to'][0];
                  }
                })
            })
        });
      // Cerramos readline para que no se siga ejecutando
      rl.close();
    });
  } catch (error) {
    // Mostramos el error
    return new Error(error)
  }
}
pokemon();