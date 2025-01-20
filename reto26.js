/*
 * EJERCICIO:
 * Explora el "Principio SOLID de Responsabilidad Única (Single Responsibility
 * Principle, SRP)" y crea un ejemplo simple donde se muestre su funcionamiento
 * de forma correcta e incorrecta.
 */

// Forma incorrecta:

// Class book, contents of single fields
// class Book {
//   constructor(name, author, year, price, isBn) {
//     this.name = name;
//     this.author = author;
//     this.year = year;
//     this.price = price;
//     this.isBn = isBn;
//   }
// }

// // Class receip
// class Receip {
//   #amount;
//   #taxDiscount;
//   #tax;
//   #total;
//   // Constructor this class
//   constructor(book, amount, taxDiscount, tax) {
//     this.book = book;
//     this.#amount = amount;
//     this.#taxDiscount = taxDiscount;
//     this.#tax = tax;
//     // Assigning the function calcularTotal to total 
//     this.#total = this.calcularTotal();
//   }

//   // Method for calculating the book total
//   calcularTotal() {
//     let price = ((book.price - book.price * this.#taxDiscount) * this.#amount);
//     let priceWithTax = price * (1 + this.#tax);
//     return priceWithTax;
//   }

//   // Method for print receip
//   printReceip() {
//     console.log(this.#amount + 'x ' + book.name + ' ' + book.price + '$');
//     console.log('Tax discount: ' + this.#taxDiscount);
//     console.log('Tax: ' + this.#tax);
//     console.log('Total: ' + this.#total);
//   }
// }

// const book = new Book('Cien años de soledad', 'Gabriel García Márquez', '1967', 20, '8437601204');
// const receip = new Receip(book, 3, 0.10, 0.15);
// receip.printReceip();

// // Forma Correcta del ejercicio anterior:
// // Class book
// class Libro {
//   constructor(name, author, year, price, isBn) {
//     this.name = name;
//     this.author = author;
//     this.year = year;
//     this.price = price;
//     this.isBn = isBn;
//   }
// }

// class Factura {
//   // Constructor this class
//   constructor(book, amount, taxDiscount, tax) {
//     this.book = book;
//     this.amount = amount;
//     this.taxDiscount = taxDiscount;
//     this.tax = tax;
//     // Assigning the function calcularTotal to total 
//     this.total = this.calcularTotal();
//   }

//   // Method for calculating the book total
//   calcularTotal() {
//     let price = ((book.price - book.price * this.taxDiscount) * this.amount);
//     let priceWithTax = price * (1 + this.tax);
//     return priceWithTax;
//   }
// }

// // Create class for print receip
// class FacturaImpresion {
//   constructor(factura) {
//     this.factura = factura;
//   }
//   // Method print receip
//   printReceip() {
//     console.log(factura.amount + 'x ' + factura.book.name + ' ' + factura.book.price + '$');
//     console.log('Tax discount: ' + factura.taxDiscount);
//     console.log('Tax: ' + factura.tax);
//     console.log('Total: ' + factura.total);
//   }
// }

// console.log('Forma Correcta 🔥');
// const libro = new Libro('Cien años de soledad', 'Gabriel García Márquez', '1967', 20, '8437601204');
// const factura = new Factura(libro, 3, 0.10, 0.15);
// const imprimirFactura = new FacturaImpresion(factura);
// imprimirFactura.printReceip();

/*
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla un sistema de gestión para una biblioteca. El sistema necesita
 * manejar diferentes aspectos como el registro de libros, la gestión de usuarios
 * y el procesamiento de préstamos de libros.
 * Requisitos:
 * 1. Registrar libros: El sistema debe permitir agregar nuevos libros con
 * información básica como título, autor y número de copias disponibles.
 * 2. Registrar usuarios: El sistema debe permitir agregar nuevos usuarios con
 * información básica como nombre, número de identificación y correo electrónico.
 * 3. Procesar préstamos de libros: El sistema debe permitir a los usuarios
 * tomar prestados y devolver libros.
 * Instrucciones:
 * 1. Diseña una clase que no cumple el SRP: Crea una clase Library que maneje
 * los tres aspectos mencionados anteriormente (registro de libros, registro de
 * usuarios y procesamiento de préstamos).
 * 2. Refactoriza el código: Separa las responsabilidades en diferentes clases
 * siguiendo el Principio de Responsabilidad Única.
 */

console.log('🔥 RETO EXTRA 🔥');

// // Class Library with all methods inside
// class Library {
//   constructor(){
//     this.books = [];
//     this.users = [];
//     this.booksLend = [];
//   }

//   registrarLibro(title, author, numCopies){
//     this.books.push( {
//       title: title,
//       author: author,
//       numberCopies: numCopies
//     });
//     return `Se ha registrado el libro con el titulo: ${title} de ${author}`
//   }

//   registrarUsuario(name, numId, email){
//     this.users.push({
//       name: name,
//       numberIdentification: numId,
//       email: email
//     });

//     return `Se ha registrado un nuevo usuario`;
//   }

//   prestarLibro(numId, title){
//     const user = this.users.filter(num => num.numberIdentification = numId);
//     const findBook = this.books.filter(book => book.title === title);
//     const index = this.books.findIndex(book => book.title === title);
//     if(findBook.length < 1) return `El libro ${title} no se encuentra en la lista` 
//     if(this.books[index].numberCopies < 1) return `No hay copias del libro ${title}`;
//     this.books[index].numberCopies--;
//     this.booksLend.push({user: user[0].name, numId: user[0].numberIdentification, bookLend: findBook[0].title})
//     return `El libro ${title} ha sido prestado al usuario ${user[0].name} con la identificacion ${user[0].numberIdentification}`
//   }

//   devolverLibro(numId, title){
//     const user = this.users.filter(person => person.numberIdentification === numId);
//     const userIndex = this.booksLend.findIndex(userL => userL.numId === numId && userL.bookLend === title);
//     if(typeof this.booksLend[userIndex] === 'undefined') return console.error('El usuario no ha pedido ningún libro prestado')
//     this.booksLend.splice(userIndex, 1);
//     const bookIndex = this.books.findIndex(titles => titles.title === title);
//     this.books[bookIndex].numberCopies++;
//     return console.log(`${user[0].name} se ha entregado satisfactoriamente el libro ${title}`)
//   }
// }

// const book1 = new Library();
// book1.registrarLibro('Cien años de Soledad', 'Gabriel Garcia Márquez', 1);
// book1.registrarLibro('Don Quijote', 'Miguel Cervante', 1);
// book1.registrarUsuario('Sebastian', '1', 'sebas@gmail.com');
// console.log(book1.prestarLibro('1', 'Cien años de Soledad'));
// console.log(book1.prestarLibro('1', 'Don Quijote'));

console.log('🔥 EXTRA APLICANDO SRP 🔥');
class Library {
  constructor() {
    this.users = [];
    this.books = [];
  }

  findUser(numId) {
    return this.users.find(user => user.numId === numId) || null;
  }

  findBook(title) {
    return this.books.find(book => book.title === title) || null;
  }

  registerUser(user) {
    return this.users.push(user);
  }

  registerBook(book) {
    return this.books.push(book);
  }
}

class RegistrarLibro {
  constructor(name, title, numCopies) {
    this.name = name;
    this.title = title;
    this.numCopies = numCopies;
  }
}

class RegistrarUsuario {
  constructor(name, numId, email) {
    this.name = name;
    this.numId = numId;
    this.email = email;
    this.bookLoan = [];
  }
}

class LibrosPrestados {
  registrarLibroPrestado(library, numId, title) {
    const user = library.findUser(numId);
    const book = library.findBook(title);

    if (user && book) {
      if (book.numCopies > 0) {
        book.numCopies--;
        user.bookLoan.push(book.title);
        return `Se ha prestado el libro ${title} al usuario ${user.name}`;
      }
      return `El libro ${book.title} no tiene copias suficientes para el prestamo`;
    }
    return `No se ha encontrado el usuario o el libro`;

  }
}

class DevolverLibro {
  devolverLibro(library, numId, title) {
    const book = library.findBook(title);
    const user = library.findUser(numId);

    if (book && user) {
      const indexBookLoan = user.bookLoan.findIndex(book => book === title);
      book.numCopies++;
      user.bookLoan.splice(indexBookLoan, 1);
      return `El usuario ${user.name} ha devuelto el libro ${book.title}`;
    }
    return `No se puedo realizar la devolución del libro porque no se encontró el usuario o el libro`;
  }
}

const book1 = new RegistrarLibro('Gabriel García Márquez', 'Cien Años de Soledad', 2);
const user1 = new RegistrarUsuario('Dani', '1', 'mimi@gmail.com');
const user2 = new RegistrarUsuario('Sebastian', '2', 'sebastian@gmail.com');
const user3 = new RegistrarUsuario('Andrés', '3', 'andres@gmail.com');

const library = new Library();
const prestarLibro = new LibrosPrestados();
const devolverLibro = new DevolverLibro();

library.registerUser(user1);
library.registerUser(user2);
library.registerUser(user3);

library.registerBook(book1);


console.log(prestarLibro.registrarLibroPrestado(library, '1', 'Cien Años de Soledad'));
console.log(prestarLibro.registrarLibroPrestado(library, '2', 'Odyssey'));
console.log(prestarLibro.registrarLibroPrestado(library, '3', 'Cien Años de Soledad'));

console.log(devolverLibro.devolverLibro(library, '3', 'Cien Años de Soledad'));
console.log(devolverLibro.devolverLibro(library, '1', 'Cien Años de Soledad'));
console.log(prestarLibro.registrarLibroPrestado(library, '1', 'Cien Años de Soledad'));
console.log(devolverLibro.devolverLibro(library, '1', 'Cien Años de Soledad'));
console.log(devolverLibro.devolverLibro(library, '1', 'Odyssey'));

console.log(library.books)
console.log(library.users)
