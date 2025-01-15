/*
 * EJERCICIO:
 * Explora el concepto de "decorador" y muestra cómo crearlo
 * con un ejemplo genérico.
 */

// Profile interface representa el componente base
class Profile {
  constructor(name, email, profilePicture) {
    this.name = name;
    this.email = email;
    this.profilePicture = profilePicture;
  }

  display() {
    console.log(`Name user: ${this.name}
email: ${this.email}
Profile Pictrue: ${this.profilePicture}`);
  }
}

// Componente concreto
// Hereda las propiedades y métodos de la clase base y no contiene alguna caracteristica adicional
class BasicProfile extends Profile {
  constructor(name, email, profilePicture) {
    super(name, email, profilePicture);
  }
}

// Base decorador que extiende de la interfaz: Componente base
class ProfileDecorator extends Profile {
  constructor(profile) {
    super(profile.name, profile.email, profile.profilePicture);
    this.profile = profile;
  }

  display() {
    this.profile.display();
  }
}

// Decoradores concretos, estos extienden del decorador
class BioDecorator extends ProfileDecorator {
  constructor(profile, bio) {
    super(profile);
    this.bio = bio;
  }

  display() {
    super.display();
    console.log(`Bio: ${this.bio}`);
  }
}

class socialMediaDecorator extends ProfileDecorator {
  constructor(profile, socialMedia) {
    super(profile);
    this.socialMedia = socialMedia;
  }

  display() {
    super.display();
    console.log(`Social Medias: ${this.socialMedia}`)
  }
}

// Uso
// Perfil básico
let basicProfile = new BasicProfile('Sebastian', 'sebas@gmail.com', 'sebas.jpg');
basicProfile.display();

console.log('----------------------------');

// Perfil con biografía
let profileWithBio = new BioDecorator(basicProfile, "I'm software engineer.");
profileWithBio.display();

console.log('----------------------------');

// Perfil con Redes sociales
let socialProfile = new socialMediaDecorator(basicProfile, '@SebastianJ');
socialProfile.display();

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un decorador que sea capaz de contabilizar cuántas veces
 * se ha llamado a una función y aplícalo a una función de tu elección.
 */

class Interface{
  constructor(count = 0){
    this.count = count;
  }

  printHola(){
    this.count++;
    console.log(`La función se ha llamado ${this.count}`);
  }
}

class ComponentConcret extends Interface{
  constructor(count){
    super(count);
  }
}

class BaseDecorator extends Interface{
  constructor(interfaces){
    super(interfaces.count);
    this.interfaces = interfaces;
  }

  printHola(){
    this.interfaces.printHola();
  }
}

class DecoratorConcret extends BaseDecorator{
  constructor(interfaces, name){
    super(interfaces);
    this.name = name;
  }

  printHola(){
    super.printHola();
    console.log(this.name)
  }
}
console.log('---EXTRA---')
let componentConcret = new ComponentConcret();
componentConcret.printHola();
componentConcret.printHola();

let decoratorConcret = new DecoratorConcret(componentConcret, 'Fin');
decoratorConcret.printHola();

console.log(componentConcret.count);
