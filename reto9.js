/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. 
 * 
 * Crea un ejemplo que implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 *
*/

// Solución complicada JAJA
// class Animal {
//   constructor(nombre){
//     this.nombre = nombre;
//   }

//   animalSound(sound){
//     console.log(`El animal ${sound}`)
//   }
// }

// class Gato extends Animal{
//   constructor(nombre, sound){
//     super(nombre);
//     this.sound = sound
//   }
// }

// class Perro extends Animal{
//   constructor(nombre, sound){
//     super(nombre);
//     this.sound = sound;
//   }
// }

// const gato = new Gato('Kitty');
// const perro = new Perro('Odín');


// gato.animalSound(gato.sound = 'maulla');
// perro.animalSound(perro.sound = 'ladrá');

// console.log(gato.nombre);
// console.log(perro.nombre);

// solución facilito
class Animal {
  constructor(nombre){
    this.nombre = nombre;
  }

  sound(){
    throw new Error('Debe de crear esta función en una subclase')
  }
}

class Gato extends Animal {
  constructor(nombre){
    super(nombre);
  }

  sound(){
    console.log(`El animal ${this.nombre} maullá: Miau, Miau!`);
  }
}

class Perro extends Animal{
  constructor(nombre){
    super(nombre)
  }

  sound(){
    console.log(`El animal ${this.nombre} ladrá: Gua, Gua!`)
  }
}

//const gato= new Gato('Kitty');
//const perro = new Perro('Odín');

//gato.sound();
//perro.sound();

/*
* DIFICULTAD EXTRA (opcional):
* Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
* pueden ser Gerentes, Gerentes de Proyectos o Programadores.
* Cada empleado tiene un identificador y un nombre.
* Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
* actividad, y almacenan los empleados a su cargo.
*/

class Empleados {

  #nombre;
  #dni;
  #rango;

  constructor(nombre, dni, rango){
    this.#nombre = nombre;
    this.#dni = dni;
    this.#rango = rango;
  }

  // Getter and Setter NOMBRE
  getNombre(){
    return this.#nombre;
  }

  setNombre(setNombre){
    this.#nombre = setNombre;
  }

  // Getter and Setter DNI
  getDni(){
    return this.#dni;
  }

  setDni(setDni){
    this.#dni = setDni;
  }

  getRango(){
    return this.#rango;
  }
}

class Gerente extends Empleados{
  constructor(nombre, dni, departamento, rango){
    super(nombre, dni, rango = 'Gerente');
    this.departamento = departamento;
  }

  planificacion(){
    console.log(`Soy ${this.getNombre()} y estoy planificando objetivos a corto plazo`)
  }
}

class GerenteProyectos extends Empleados{
  constructor(nombre, dni, fechaInicioProyecto, rango){
    super(nombre, dni, rango= 'Gerente de Proyectos');
    this.fechaInicioProyecto = fechaInicioProyecto;
  }

  seguimientoProyecto(){
    return console.log(`El proyecto inicio el ${this.fechaInicioProyecto} y hoy estamos a ${new Date()}`);
  }
}

class Programador extends Empleados{
  constructor(nombre, dni, lenguaje, rango){
    super(nombre, dni, rango = 'Programador');
    this.lenguaje = lenguaje;
  }

  language(){
    return console.log(`Soy ${this.getNombre()} y uso el lenguaje ${this.lenguaje}`);
  }
}

const gerente = new Gerente('Andrés', '111','Ventas');
console.log(`Mi nombre es ${gerente.getNombre()}, mi DNI es ${gerente.getDni()} y soy ${gerente.getRango()} del area ${gerente.departamento}`);
gerente.planificacion();

const gerenteProyecto = new GerenteProyectos('Dani', '222', '28/10/2024');
console.log(`Mi nombre es ${gerenteProyecto.getNombre()}, mi DNI es ${gerenteProyecto.getDni()} y soy ${gerenteProyecto.getRango()}`);
gerenteProyecto.seguimientoProyecto();

const programador = new Programador('Sebastian', '333', 'Javascript');
console.log(`Mi nombre es ${programador.getNombre()}, mi DNI es ${programador.getDni()} y soy ${programador.getRango()}`);
programador.language();