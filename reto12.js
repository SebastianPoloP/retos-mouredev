/*
 * IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
 *
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo XML y JSON que guarde los
 * siguientes datos (haciendo uso de la sintaxis correcta en cada caso):
 * - Nombre
 * - Edad
 * - Fecha de nacimiento
 * - Listado de lenguajes de programación
 * Muestra el contenido de los archivos.
 * Borra los archivos.
 */
const fs = require('node:fs');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const xml2js = require('xml2js');

let nombre = 'Sebastian', edad = '26', fecha_De_Nacimiento = '04-08-1998',
  lenguajes_De_Programación = ['Javascript', 'Mysql'];

const object = {
  "nombre": nombre,
  "edad": edad,
  "fechaNacimiento": fecha_De_Nacimiento,
  "lenguajes": lenguajes_De_Programación
}

// convertir a XML
const builder = new xml2js.Builder();
const xml = builder.buildObject(object);
fs.writeFileSync('datos.xml', xml);
const dataXML = fs.readFileSync('datos.xml', 'utf-8');
console.log(dataXML)
fs.unlinkSync('datos.xml');

// Convertir a JSON
const json = JSON.stringify(object);
fs.writeFileSync('datos.json', json);
const dataJSON = fs.readFileSync('datos.json', 'utf-8');
console.log(dataJSON);
fs.unlinkSync('datos.json');

/*
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la lógica de creación de los archivos anteriores, crea un
 * programa capaz de leer y transformar en una misma clase custom de tu 
 * lenguaje los datos almacenados en el XML y el JSON.
 * Borra los archivos.
 */

function app(){

  class Custom {
    constructor(nombre, edad, fechaNacimiento, lenguajes){
      this.nombre= nombre;
      this.edad = edad;
      this.fechaNacimiento = fechaNacimiento;
      this.lenguajes= lenguajes;
    }
  }

  const leerArchivo = (nameFile) => {
    return fs.readFileSync(nameFile, 'utf-8')
  }

  const createXML= () =>{
    rl.question('Cuál es su nombre? ', name => {
      rl.question('Cuál es su edad? ', edad => {
        rl.question('Cuál es su fecha de nacimiento? ', fechaNacimiento =>{
          rl.question('Qué lenguajes usas? ',(lenguaje) =>{
            const lenguajes = lenguaje.split(', ');
            const persona = new Custom(name, edad, fechaNacimiento, lenguajes);
            const builder = new xml2js.Builder();
            const xml = builder.buildObject(persona)
            fs.writeFileSync('Custom.xml', xml);
            menu()
          });
        });
      });
    });
  }

  const createJSON = () => {
    rl.question('Cuál es su nombre? ', name => {
      rl.question('Cuál es su edad? ', edad => {
        rl.question('Cuál es su fecha de nacimiento? ', fechaNacimiento =>{
          rl.question('Qué lenguajes usas? ',(lenguaje) =>{
            const lenguajes = lenguaje.split(', ');
            const persona = new Custom(name, edad, fechaNacimiento, lenguajes);
            const json = JSON.stringify(persona)
            fs.writeFileSync('Custom.json', json);
            menu()
          });
        });
      });
    });
  }

  const mostrarXML = () =>{
    if(fs.existsSync('Custom.xml')){
      console.log(leerArchivo('Custom.xml'))
      menu()
    }else {
      console.log('No se encontro el archivo');
      menu()
    }
  }

  const mostrarJSON = () => {
    if(fs.existsSync('Custom.json')){
      console.log(leerArchivo('Custom.json'));
      menu()
    }else{
      console.log('No se encontro el archivo JSON');
      menu()
    }
  }

  const eliminarXML = () => {
    if(fs.existsSync('Custom.xml')){
      fs.unlinkSync('Custom.xml')
      console.log('Se ha elimnado el archivo Custom.xml');
      menu();
    }else{
      console.log('No se ha encontrado el archivo XML');
      menu();
    }
  }

  const eliminarJSON = () => {
    if(fs.existsSync('Custom.json')){
      fs.unlinkSync('Custom.json');
      console.log('Se ha elimnado el archivo Custom.json');
      menu();
    }else{
      console.log('No se ha encontrado el archivo JSON');
      menu();
    }
  }
  const menu = () =>{
    rl.question(`Qué deseas hacer? 
      1)Crear un nuevo formato XML.
      2)Crear un nuevo formato JSON.
      3)Mostrar el contenido del archivo XML.
      4)Mostrar el contenido del arvhivo JSON.
      5)Eliminar el archivo XML.
      6)Eliminar el archivo JSON.
      7)Salir.
      `, option =>{
        switch(option){
          case '1':
            createXML();
            break;
          case '2':
            createJSON();
            break;
          case '3':
            mostrarXML();
            break;
          case '4':
            mostrarJSON();
            break;
          case '5':
            eliminarXML();
            break;
          case '6':
            eliminarJSON();
            break;
          case '7':
            console.log('Saliendo de la app...');
            rl.close();
            break;
          default:
            console.log('Opción inválida!');
            menu()
        }
      });
  }
  menu()
}

app()