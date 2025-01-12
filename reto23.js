/*
 * EJERCICIO:
 * Explora el patrón de diseño "singleton" y muestra cómo crearlo
 * con un ejemplo genérico.
 */
// Creamos la clase Singleton, no es necesario llamarla Singleton
class Singleton{
  // Constructor normal porque no podemos poner privado el constructor
  constructor(name, employess){
    // Atributos para la creación de una instancia
    this.name = name;
    this.employess = employess;
    // Validamos que solo haya una instancia de la clase Singleton
    if(Singleton.instance){
      // Retorno de la clase singleton ya creada
      return Singleton.instance;
    }
    // Si no encuentra una instacia creada, la crea y la retorna
    Singleton.instance = this;
    
  }
}

const office1 = new Singleton('Diagonal', 15);
console.log('Oficina 1:',office1);
const office2 = new Singleton('Principal', 2);
console.log('Oficina 2:',office2);

console.log('Llamando la instancia creada desde la clase Singleton:',Singleton.instance)
console.log('Oficina 1 es igual a oficina 2? ',office1 === office2 ? 'Si, es igual' : 'No, no es igual')

/*
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el patrón de diseño "singleton" para representar una clase que
 * haga referencia a la sesión de usuario de una aplicación ficticia.
 * La sesión debe permitir asignar un usuario (id, username, nombre y email),
 * recuperar los datos del usuario y borrar los datos de la sesión.
 */

class UserSesion{
  constructor(){
    // Crear solo una instancia de la clase
    if(UserSesion.instance){
      return UserSesion.instance;
    }
    UserSesion.instance = this;
    
    // Inicializacion de propiedades
    this.user = {}
    this.log = [];
  }

  setUser(id, username, name, email){
    const date = new Date().toISOString();
    this.log = [{'Login': date}];
    return this.user = {
      id: this.id = id,
      username: this.username = username,
      name: this.name = name,
      email: this.email = email
    }
  }

  getUser(){
    return this.user;
  }

  getLogs(){
    return this.log;
  }

  closeSesion(){
    console.log('Closed sesion...');
    return this.user = {}
  }
}
// Instancia de la clase
const instance = new UserSesion();

// "Nueva instancia"
const user1 = new UserSesion();
user1.setUser(1, 'Sebas', 'Sebastian', 'juanse@gmail.com');
console.log('Fisrt user: ',user1.getUser());

// "Se crea otra instacia", pero como es singleton no debería de crearse una nueva instancia
const user2 = new UserSesion();
user2.setUser(2, 'Andres', 'Andres F.', 'Dani@gmail.com');
console.log('Second user: ', user2.getUser());
user2.closeSesion();
console.log('Second user get dates',user2.getUser());

// "Tercera instancia"
const user3 = new UserSesion();
user3.setUser(3,'Dani', 'Daniela', 'dani@gmail.com')
console.log('Third user', user3.getUser());

// Mirando los logs
console.log(instance.getLogs());
console.log(user1.getLogs());
console.log(user2.getLogs());
console.log(user3.getLogs());

const user4 = new UserSesion();
// Creamos un usuario 5 segundos después
setTimeout(() => {
  user4.setUser(4, 'Nani', 'Mariana', 'nani@gmail.com');
  console.log('Usuario 4', user4.getUser());
  console.log(user4.getLogs());
}, 5000);

// Verificación de que las instancias son iguales
if(instance != user1 || instance != user2 || instance != user3){
  console.log('Las instancias no son iguales')
}else {
  console.log('Las instancias son iguales')
}