 /*
 * EJERCICIO:
 * Utilizando tu lenguaje, explora el concepto de expresiones regulares,
 * creando una que sea capaz de encontrar y extraer todos los números
 * de un texto.
 */

let text = 'Mi telefono es 3098432';
console.log(text.match(/\d/g))
/*
 * DIFICULTAD EXTRA (opcional):
 * Crea 3 expresiones regulares (a tu criterio) capaces de:
 * - Validar un email.
 * - Validar un número de teléfono.
 * - Validar una url.
 */
// Validar un Email, con parametros g para tomar toda la cadena de texto
// e i para ignorar mayusculas o minusculas.
const emailValidate = /[a-z\d]@/gi
let email = '12js234@gmail.com'
console.log(emailValidate.test(email) ? 'Correo valido' : 'El correo es erróneo');

const phoneValidate = /^\d{7,15}$/g;
const phone = 1231345;
console.log(phoneValidate.test(phone) ? 'Telefono valido' : 'Telefono no valido');

const urlInit = /^https?:\/\/([a-zA-Z0-9]*\.)?[a-zA-Z0-9]*\.([a-zA-Z]{3})(\.[a-zA-Z]{2,3})??\/?$/;
const url = 'www.google.com';
console.log(urlInit.test(url) ? 'Ingresando a la URL' : 'Mmmmm... Estamos teniendo problemas encontrando este sitio')