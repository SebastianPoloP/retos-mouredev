/*
 * EJERCICIO:
 * Explora el "Principio SOLID de Segregación de Interfaces
 * (Interface Segregation Principle, ISP)", y crea un ejemplo
 * simple donde se muestre su funcionamiento de forma correcta e incorrecta.
 */

// Incorrect form
class Pokemons {
  attack() {
    console.log('Attack!')
  }

  defense() {
    console.log('Defend')
  }

  fly() {
    console.log('Fly attack')
  }

  electricShock() {
    console.log('Electric attack')
  }
}

class FlyPokemon extends Pokemons {
  attack() { }

  defense() { }

  fly() { }
  // Los pokemons voladores no pueden realizar ataques de tipo electrico
  electricShock() { }
}

class ElectricPokemon extends Pokemons {
  attack() { }

  defense() { }
  // Los pokemons electricos no pueden realizar ataques de tipo volador.
  fly() { }

  electricShock() { }
}

// Form correct
class FlyingPokemons {
  attack() { }
  defense() { }
  fly() { }
}

class ElectricPokemons {
  attack() { }
  defense() { }
  electricShock() { }
}

class FlyPoke extends FlyingPokemons {
  attack() { }
  defense() { }
  fly() { }
}

class ElectricPoke extends ElectricPokemons {
  attack() { }
  defense() { }
  electricShock() { }
}
// De esta forma las clases que heredaa de una interfaz podrá realizar todos los métodos de la
// interfaz y no realizar métodos que no se usarán en la clase

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un gestor de impresoras.
 * Requisitos:
 * 1. Algunas impresoras sólo imprimen en blanco y negro.
 * 2. Otras sólo a color.
 * 3. Otras son multifunción, pueden imprimir, escanear y enviar fax.
 * Instrucciones:
 * 1. Implementa el sistema, con los diferentes tipos de impresoras y funciones.
 * 2. Aplica el ISP a la implementación.
 * 3. Desarrolla un código que compruebe que se cumple el principio.
 */

// Classes abstract
class WhiteBlackPrinter {
  print() { throw new Error('this method must be implement'); }
}

class ColorPrinter {
  printColor() { throw new Error('this method must be implement'); }
}

class ScanPrinter {
  scan(document) {
    return setTimeout(() => {
      console.log(`The document with name ${document} has been successfully scanned!`)
    }, 4000);
  }
}

class FaxPrinter {
  sendFax(document) {
    return setTimeout(() => {
      console.info(`The document ${document} has been sent fax correctly`)
    }, 6000);
  }
}

// Class implements the "interfaces"
class PrinterBasic extends WhiteBlackPrinter {
  print(document) {
    console.log('Printing white and black');
    console.log(document);
  }
}

class PrinterColor extends ColorPrinter {
  printColor(document) {
    console.log('Printing in color');
    console.log(document)
  }
}

class PrinterMultifuncional {
  constructor() {
    this.whiteBlackPrinter = new PrinterBasic();
    this.colorPrinter = new PrinterColor();
    this.scanPrinter = new ScanPrinter();
    this.faxPrinter = new FaxPrinter();
  }

  print(document) {
    return this.whiteBlackPrinter.print(document);
  }

  printColor(document) {
    return this.colorPrinter.printColor(document);
  }

  scan(document) {
    console.log('Scan document');
    return this.scanPrinter.scan(document);
  }

  sendFax(document) {
    console.info('Send fax');
    return this.faxPrinter.sendFax(document);
  }
}

const basicPrinter = new PrinterBasic();
basicPrinter.print('PDF Medicamentos');

const printColor = new PrinterColor();
printColor.printColor('PDF Medicamentos');

const multiPrinter = new PrinterMultifuncional();
multiPrinter.printColor('PDF Tesis');
multiPrinter.print('PDF Tesis');
multiPrinter.scan('PDF Tesis');
multiPrinter.sendFax('PDF Tesis');