/*
 * EJERCICIO:
 * Empleando tu lenguaje, explora la definición del tipo de dato
 * que sirva para definir enumeraciones (Enum).
 * Crea un Enum que represente los días de la semana del lunes
 * al domingo, en ese orden. Con ese enumerado, crea una operación
 * que muestre el nombre del día de la semana dependiendo del número entero
 * utilizado (del 1 al 7).
 */
const days = new Map();
days.set(1, 'Domingo')
days.set(2, 'Lunes')
days.set(3, 'Martes')
days.set(4, 'Miercoles')
days.set(5, 'Jueves')
days.set(6, 'Viernes')
days.set(7, 'Sabado')

function getDay(num) {
  if (num <= 0 || num > 7) {
    return 'Número no valido';
  }
  return days.get(num);
}

console.log(getDay(1))

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un pequeño sistema de gestión del estado de pedidos.
 * Implementa una clase que defina un pedido con las siguientes características:
 * - El pedido tiene un identificador y un estado.
 * - El estado es un Enum con estos valores: PENDIENTE, ENVIADO, ENTREGADO y CANCELADO.
 * - Implementa las funciones que sirvan para modificar el estado:
 *   - Pedido enviado
 *   - Pedido cancelado
 *   - Pedido entregado
 *   (Establece una lógica, por ejemplo, no se puede entregar si no se ha enviado, etc...)
 * - Implementa una función para mostrar un texto descriptivo según el estado actual.
 * - Crea diferentes pedidos y muestra cómo se interactúa con ellos. 
 */

const Status = {
  Pendiente: 'PENDIENTE',
  Enviado: 'ENVIADO',
  Entregado: 'ENTREGADO',
  Cancelado: 'CANCELADO'
}
// Volver el Enum inmutable
Object.freeze(Status);

class Pedido {

  constructor(id) {
    this.id = id;
    this.status = Status.Pendiente;
  }

  // Funcion para el enviar el pedido
  sendOrder() {
    if (this.status != Status.Pendiente) {
      throw new Error(`El pedido ${this.id} no puedo ser enviado en el estado ${this.status}`);
    }
    this.status = Status.Enviado;
    return `El pedido ${this.id} ha sido enviado.`;
  }
  // Funcion para entregar el producto.
  deliverOrder() {
    if (this.status != Status.Enviado) {
      throw new Error(`El pedido ${1} no puede ser enviado en el estado ${this.status}`)
    }
    this.status = Status.Entregado;
    return `El pedido ${this.id} ha sido entregado`;
  }
  // Funcion para cancelar el pedido.
  cancelOrder() {
    if (this.status === Status.Entregado) {
      throw new Error(`Error! El pedido ${this.id} ya ha sido entregado.`);
    }
    if (this.status === Status.Cancelado) {
      throw new Error(`El pedido ${this.id} ya ha sido cancelado`);
    }
    this.status = Status.Cancelado;
    return `El pedido ${this.id} ha sido cancelado.`;
  }
  // Mostrar estado actual del producto.
  // showStatus(){
  //   return console.log(`El pedido ${this.id} esta en estado ${this.status}`);
  // }
  // De otra mejor manera
  showStatus() {
    switch (this.status) {
      case Status.Pendiente:
        return `El pedido ${this.id} esta en estado pendiente`;
      case Status.Enviado:
        return `El pedido ${this.id} esta en estado enviado`;
      case Status.Entregado:
        return `El pedido ${this.id} esta en estado entregado`;
      case Status.Cancelado:
        return `El pedido ${this.id} esta en estado cancelado`;
      default:
        return `El pedido ${this.id} esta en estado desconocido`;
    }
  }
}

try {
  const order1 = new Pedido(1);
  console.log(order1.showStatus());

  order1.sendOrder();
  console.log(order1.showStatus());

  order1.deliverOrder();
  console.log(order1.showStatus());

  const order2 = new Pedido(2);
  console.log(order2.showStatus());

  order2.cancelOrder();
  console.log(order2.showStatus());

  order2.deliverOrder(); // Para lanzar un error
} catch (error) {
  console.log(error)
}