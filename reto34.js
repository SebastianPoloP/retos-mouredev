/*
 * EJERCICIO:
 * ¡La Casa del Dragón ha finalizado y no volverá hasta 2026!
 * ¿Alguien se entera de todas las relaciones de parentesco
 * entre personajes que aparecen en la saga?
 * Desarrolla un árbol genealógico para relacionarlos (o invéntalo).
 * Requisitos:
 * 1. Estará formado por personas con las siguientes propiedades:
 *    - Identificador único (obligatorio)
 *    - Nombre (obligatorio)
 *    - Pareja (opcional)
 *    - Hijos (opcional)
 * 2. Una persona sólo puede tener una pareja (para simplificarlo).
 * 3. Las relaciones deben validarse dentro de lo posible.
 *    Ejemplo: Un hijo no puede tener tres padres.
 * Acciones:
 * 1. Crea un programa que permita crear y modificar el árbol.
 *    - Añadir y eliminar personas
 *    - Modificar pareja e hijo
 * 2. Podrás imprimir el árbol (de la manera que consideres).
 * 
 * NOTA: Ten en cuenta que la complejidad puede ser alta si
 * se implementan todas las posibles relaciones. Intenta marcar
 * tus propias reglas y límites para que te resulte asumible.
 */

class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.partner = null;
    this.childs = [];
    this.hasParents = false;
  }

  registerPartner(partner) {
    if (this.partner != null) {
      return console.log('This person have a partner.');
    } else {
      this.partner = partner;
      partner.partner = this;
    }
  }

  registerChild(child) {
    if (this.childs.includes(child)) {
      return console.log('This child already exists');
    } else {
      this.childs.push(child);
      return console.info(`${this.name} had a child with ${this.partner.name}`)
    }
  }
}

class FamilyTree {
  constructor() {
    this.persons = {};
  }

  addPerson(id, name) {
    // Search for the person by id
    const find = Object.values(this.persons).find(person => person.id === id);
    // Validates if the person is already registered.
    if (find) {
      return console.info(`Id already be registered`);
    }

    // If the person is not registered, create a Person object 
    const person = new Person(id, name);
    this.persons[id] = person;
    // Notify the user that the person has registered
    console.log(`${name} has been registered`);
  }

  removePerson(id) {
    // Search fot he person by id
    const find = Object.keys(this.persons).find(person => person === id);
    // Validate if the person is registered.
    if (!find) {
      // If the person is not found, notify the user
      return console.info(`Person not found`);
    }
    // Implement at the later date
    if (this.persons[id].partner) {
      const idPartner = this.persons[id].partner.id;
      this.persons[idPartner].partner = null;
      console.info(`Person name: ${this.persons[idPartner].name} partner has been removed`);
    }

    // Delete Person object
    delete this.persons[id];
    console.log(this.persons);
    return console.info(`Person has been deleted`);
  }

  setPartner(idOne, idTwo) {
    // Search persons already registered
    const personOne = Object.keys(this.persons).find(person => person === idOne);
    const personTwo = Object.keys(this.persons).find(person => person === idTwo);
    // Validation if the person exist
    if (personOne === undefined || personTwo === undefined) {
      return console.info('Any partners not founds')
    }

    if(idOne === idTwo){
      return console.info("Ids can´t be the same when assigning partner");
    }

    // Call function registerParter to register a partner
    this.persons[personOne].registerPartner(this.persons[personTwo]);
    // Notify user
    return console.info(`${this.persons[personOne].name} is ${this.persons[personTwo].name} partner`);
  }

  setChild(parentId, childId) {
    const parent = Object.keys(this.persons).find(person => person === parentId);
    const child = Object.keys(this.persons).find(person => person === childId);

    if (parent === undefined || child === undefined) {
      return console.info(`Parents or child not found`);
    }

    if(parentId === childId){
      return console.info("Ids can´t be the same when assigning a child");
    }
    
    if(this.persons[child].hasParents){
      return console.info('Child already has a parents');
    }
    this.persons[child].hasParents = true;
    this.persons[parent].registerChild(this.persons[child]);
    this.persons[parent].partner.registerChild(this.persons[child]);
  }

  printTree(){
    const visited = new Set();

    const printPerson = (person, level = 0) => {
      if(visited.has(person)){
        return;
      }

      visited.add(person.id);
      let indent = "\t".repeat(level);

      console.info(`${indent} - ${person.name} ID: ${person.id}`);

      if(person.partner){
        visited.add(person.partner.id)
        console.info(`${indent} Partner: ${person.partner.name} ID: ${person.partner.id}`);
      }

      if(person.childs.length > 0){
        console.info(`${indent} Childs: `);
        person.childs.forEach(child => {
          printPerson(child, level + 1);
        });
      }
    }

    for(const person of Object.values(this.persons)){
      const isChild = person.hasParents;
      if(!isChild){
        printPerson(person);
      }
    }
  }
}

const tree = new FamilyTree();
tree.addPerson('1', "Jocelyn");
tree.addPerson('2', "Aemon");

tree.setPartner('1', '2');

tree.addPerson('3', "Rhaenys");

tree.setChild('1', '3');

tree.addPerson('4', "Corlys");

tree.setPartner('3', '4');

tree.addPerson('5', "Laena");
tree.addPerson('6', "Laenor");

tree.setChild('3', '5');
tree.setChild('3', '6');

tree.addPerson('7', "Baelon");
tree.addPerson('8', "Alyssa");

tree.setPartner('7', '8');

tree.addPerson('9', "Viserys I");
tree.addPerson('10', "Daemon");

tree.setChild('7', '9');
tree.setChild('8', '10');

tree.addPerson('11', "Aemma");

tree.setPartner('9', '11');

tree.addPerson('12', "Rhaenyra");

tree.setChild('9', '12');

tree.setPartner('10', '12');

tree.addPerson('13', "Aegon");
tree.addPerson('14', "Viserys");

tree.setChild('12', '13');
tree.setChild('12', '14');

tree.printTree();