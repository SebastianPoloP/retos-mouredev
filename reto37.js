/*
 * EJERCICIO:
 * Oasis y Linkin Park han anunciado nueva gira, pero, ¿quién es más popular?
 * ¡Dos de las bandas más grandes de la historia están de vuelta!
 * Desarrolla un programa que se conecte al API de Spotify y los compare.
 * Requisitos:
 * 1. Crea una cuenta de desarrollo en https://developer.spotify.com.
 * 2. Conéctate al API utilizando tu lenguaje de programación.
 * 3. Recupera datos de los endpoint que tú quieras.
 * Acciones:
 * 1. Accede a las estadísticas de las dos bandas.
 *    Por ejemplo: número total de seguidores, escuchas mensuales,
 *    canción con más reproducciones...
 * 2. Compara los resultados de, por lo menos, 3 endpoint.
 * 3. Muestra todos los resultados por consola para notificar al usuario.
 * 4. Desarrolla un criterio para seleccionar qué banda es más popular.
 */
require("colors");
const { utils } = require("./utils.js");
const { clientId, clientSecret } = utils;

// Obtención del token
async function bearerToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });

  return await res.json();
}

async function getArtists(artist, token) {
  const artists = await fetch(
    `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (artists.status !== 200) {
    throw Error("Artist not found");
  }

  return await artists.json();
}

async function tracksTop(id, token) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/top-tracks`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if(res.status !== 200){
    throw new Error('Track not found')
  }
  const data = await res.json();
  const tracks = [];
  data.tracks.forEach((track) => {
    tracks.push({
      artist: track.artists[0].name,
      album: track.album.name,
      releaseDate: track.album.release_date,
      nameSong: track.name,
      popularity: track.popularity,
      trackNumberAlbum: track.track_number,
      totalTracksAlbum: track.album.total_tracks,
    });
  });

  return tracks;
}

async function compareFollowers(obj1, obj2) {
  const artist1 = obj1.artists.items[0];
  const artist2 = obj2.artists.items[0];

  console.log(
    artist1.followers.total > artist2.followers.total
      ? `${artist1.name.green} tiene mas seguidores que ${
          artist2.name.blue
        } con un total ${artist1.followers.total}, con una diferencia de ${
          artist1.followers.total - artist2.followers.total
        }`
      : `${artist2.name.green} tienes mas seguidores que ${
          artist1.name.blue
        } con un total de ${artist2.followers.total}, con una diferencia de ${
          artist2.followers.total - artist1.followers.total
        }`
  );
}

async function comparePopularity(obj1, obj2) {
  const artist1 = obj1.artists.items[0];
  const artist2 = obj2.artists.items[0];

  console.log(
    artist1.popularity > artist2.popularity
      ? `${artist1.name.green} tiene mas popularidad que ${artist2.name.blue}`
      : `${artist2.name.green} tiene mas popularidad que ${artist1.name.blue}`
  );
}

async function allInfoArtist(obj, objtracks) {
  const { artists } = obj;
  const { id, name, followers, genres, popularity, type } = artists.items[0];

  console.log(`${name}`.blue, {
    followers: followers.total,
    genres,
    popularity,
    type,
  });

  console.log("Top 10 Tracks: ");
  console.log(objtracks);
}

function compareTracks(obj1, obj2) {
  for (let i = 0; i < 3; i++) {
    console.log(
      obj1[i].popularity > obj2[i].popularity
        ? `"${obj1[i].nameSong}" de ${obj1[i].artist} es mas popular que "${obj2[i].nameSong}" de ${obj2[i].artist}`
        : `"${obj2[i].nameSong}" de ${obj2[i].artist} es mas popular que "${obj1[i].nameSong}" de ${obj1[i].artist}`
    );
  }
}
try {
  (async () => {
    const { access_token } = await bearerToken();

    const artist1 = await getArtists("stromae", access_token);
    const artist2 = await getArtists("Rels B", access_token);

    const id = artist1.artists.items[0].id;
    const id2 = artist2.artists.items[0].id;

    const tracks1 = await tracksTop(id, access_token);
    const tracks2 = await tracksTop(id2, access_token);

    await allInfoArtist(artist1, tracks1);
    await allInfoArtist(artist2, tracks2);

    await compareFollowers(artist1, artist2);
    await comparePopularity(artist1, artist2);

    await compareTracks(tracks1, tracks2)
  })();
} catch (error) {
  console.log(error);
}
