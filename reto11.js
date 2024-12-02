/*
 * IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
 *
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo que se llame como
 * tu usuario de GitHub y tenga la extensión .txt.
 * Añade varias líneas en ese fichero:
 * - Tu nombre.
 * - Edad.
 * - Lenguaje de programación favorito.
 * Imprime el contenido.
 * Borra el fichero.
 *
 */

const { info } = require('console');
const fs = require('fs');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = () => {
  rl.question('Cuál es tu nombre de Github? ', nameGit => {
    fs.writeFileSync(`${nameGit}.txt`, 'Archivo creado!');
    rl.question('Cuál es tu nombre completo? ', name => {
      fs.writeFileSync(`${nameGit}.txt`, `\nNombre: ${name}`);
      rl.question('Qué edad tienes? ', year => {
        fs.appendFileSync(`${nameGit}.txt`, `\nEdad: ${year}`);
        rl.question('Cuál es tu lenguaje favorito? ', lang => {
          fs.appendFileSync(`${nameGit}.txt`, `\nLenguaje: ${lang}`);
          const data = fs.readFileSync(`${nameGit}.txt`, 'utf-8')
          console.log(`Contenido del archivo: ${data}`);
          fs.unlinkSync(`${nameGit}.txt`)
          rl.close();
        });
      });
    });
  });
}

//app()

/*
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla un programa de gestión de ventas que almacena sus datos en un 
 * archivo .txt.
 * - Cada producto se guarda en una línea del archivo de la siguiente manera:
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
 */

const appExtra = () => {
  const gestorVentas = 'GestorDeVentas.txt';

  // Función para agregar una nueva venta
  const addProduct = () => {
    rl.question('Nombre del producto: ', name => {
      rl.question('Cantidad del producto: ', cantidad => {
        rl.question('Precio del producto: ', precio => {
          if (fs.existsSync(gestorVentas)) {
            fs.stat(gestorVentas, (err, stats) => {
              if (err) {
                console.log('Error al acceder al archivo');
                menu();
              }
              if (stats.size > 0) {
                fs.appendFileSync(gestorVentas, `\nProducto: ${name}, Cantidad: ${cantidad}, Precio: ${precio}`)
                menu()
              }
            });
          } else {
            fs.writeFileSync(gestorVentas, `Producto: ${name}, Cantidad: ${cantidad}, Precio: ${precio}`);
            menu()
          }
        });
      });
    });
  }
  // Función para obtener los producto
  const getProducts = () => {
    if (fs.existsSync(gestorVentas)) {
      const data = fs.readFileSync(gestorVentas, 'utf-8');
      console.log(data);
      menu()
    } else {
      console.log('No hay ningún producto registrado.');
      menu()
    }
  }

  const updProduct = () => {
    if (fs.existsSync(gestorVentas)) {
      const data = fs.readFileSync(gestorVentas, 'utf-8');
      console.log(data);
      rl.question('Qué deseas modificar? ', updateWord => {
        rl.question('Escriba por lo que quieres modificar: ', wordUpdate => {
          const newInfo = data.replace(updateWord, wordUpdate);
          fs.unlinkSync(gestorVentas);
          fs.writeFileSync(gestorVentas, newInfo);
          menu()
        });
      });
    } else {
      console.log('No hay productos para actualizar.');
      menu();
    }
  }

  const deleteProduct = () =>{
    const data = fs.readFileSync(gestorVentas, 'utf-8');
    console.log(data);
    rl.question('Qué producto deseas eliminar? ', dlPro =>{
      const lines = data.split('\n');
      const products = lines.map(line =>{
        const pares = line.split(', ');
        const product = {};
        pares.forEach(pair => {
          const [key, value] = pair.split(':').map(str => str.trim());
          product[key] = isNaN(value) ? value : Number(value);
        });
        return product
      });
      const find = products.find(prod => prod.Producto === dlPro);
      if(find){
        
        menu()
        rl.close()
      }else{
        console.log('Error obteniendo el producto', products[0])
        menu()
        rl.close()
      }
    });
  }

  const menu = () => {
    rl.question(`Qué deseas hacer?
    1) Añadir un nuevo producto. 
    2) Consultar los producto. 
    3) Actualizar un producto. 
    4) Eliminar un producto. 
    5) Calcular la venta total.
    6) Calcular venta por producto.
    7) Salir\n`, opcion => {
      switch (opcion) {
        case '1':
          addProduct();
          break;
        case '2':
          getProducts();
          break;
        case '3':
          updProduct();
          break;
        case '4':
          deleteProduct();
          menu()
          break;
        default:
          console.log('Opción no válida.\n');
          menu();
          break;
      }
    });
  }
  menu();
}

appExtra();