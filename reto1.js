let a = 21;
let b = 21;
let c = 32;
let d = 33;

//Operadores de asignación
let asignacion = '';
let exponenciacion = a ** b;
let asignacion_AND_logico = a && (a = b);
let asignacion_OR_logico = a || (a = b);
let asignacion_anulacion_logica = a ?? (a = b);

// Operadores de comparación
let igual = a == b;
let no_es_igual = a != b;
let estrictamente_igual = a === b;
let desigualdad_estricta = a !== b;
let mayor_que = a > b;
let mayor_o_igual_que = a >= b;
let menor_que = a < b;
let menor_o_igual_que = a <= b;

// Operadores aritméticos
let asignacion_adicion = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let residuo = a % b;
let incremento = ++a;
let decremento = a--;

// Operadores lógicos.
let operador_logico_AND = a >= b && c < d;
let operador_logico_OR = a < b || c < d;
let operador_logico_NOT = !operador_logico_AND;

// Operadores Bits
let bit1 = 15;
let bit2 = 9;

let AND_bit_a_bit = bit1 & bit2;
let OR_bit_a_bit = bit1 | bit2;
let XRO_bit_a_bit = bit1 ^ bit2;
let NOT_bit_a_bit = ~bit1;
let desplazamiento_izquierda = bit1 << bit2;
let desplazamiento_derecha = bit1 >> bit2;
let desplazamiento_derecha_relleno = bit1 >>> bit2;

// Operadores de cadena
console.log("Hola " + 'mi nombre es Sebas');

// Operador condicional (ternario)
let ternario = a < d ? "Es menor" : "Es mayor"

// Operador coma
let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let y = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
    console.log("a[" + i + "][" + j + "]= " + y[i][j]);
}

// Operadores Unarios

// Delete
let user = {
    nombre: "Sebastian",
    edad: 25,
    contraseña: "2112"
}

console.log(user);
delete user.contraseña; // Sirve para eliminar una propiedad de un objeto
console.log(user);

// TypeOf
let edad = 25;
console.log(typeof (edad)); // Devuelve el tipo de del operando sin evaluarlo.

// Unario mas

let numero = '';
let numero2 = 23;
console.log(+numero); /*
                       *Antecede ante el operando y evalúa a su operando tratando de 
                       *convertilo en numero, si aun no lo es.
                       */
console.log(+numero2);

// Negacion Unaria

console.log(-numero);
console.log(-numero2);/*
* Es parecido a Unario mas pero en vez de solo mostrar el numero, lo niega. Es un 
padre abandonico
*/

// Void

const output = void 1;
console.log(output); //Void es un operador que evaluar una expression y retorna Undefined.

// Yield

function* foo(index) {
    while (index < 2) {
        yield index;
        index++;
    }
}/**
 * Yiel sirve para pausa y reanundar una función generadora.
 * Una función generadora es una función especial que puede ser pausar y reanudada en otro momento.
 * Cuando se pausa esta función, recuerda todo el estado en el que estaba, y cuando reanudas
 * , puede continuar desde donde la dejaste.
 */
const iterador = foo(0);
console.log(iterador.next().value);
console.log(iterador.next().value);

// Yield*

function* generador1() {
    yield 1;
    yield 2;
}

function* generador2() {
    yield* generador1();
    yield 3;
}
/**
 * Yield* sirve para pasar el control de una función generadora a otra, permitiendo que la segunda
 * funcione como parte de la primera.
 */
const gen = generador2();
console.log([...gen]);

// Estructuras de control.

// Condicionales.
// If(): Sirve para evaluar si una condición es verdadera o falsa. Ejemplo:

let edad_ = 20;
if (edad_ > 0) {
    if (edad_ > 18) {
        console.log('Eres mayor de edad.');
    } else {
        console.log('Eres menor de edad.')
    }
} else {
    console.log('Haz dado un numero negativo.')
}

// Ciclos o Bucles.
// For es uno de los tipos de ciclos, por ejemplo:

let pasos = 10;
for (let paso = 1; paso < pasos; paso++) {
    console.log('He realizado ' + paso + ' paso/s');
}

// While ejecuta una sentencia hasta que la condición sea true, por ejemplo:
contador = 0
while (contador < 3) {
    contador++;
}
console.log('El contador es igual a: ' + contador);
// Do While: Es una estructura de control parecida al While pero hasta hace que se ejecute al menos una vez
pasos_ = 10;
paso_ = 10;
do {
    console.log('Haz dado un paso/s. Esto dentro de un Do While');
    paso_++;
} while (paso_ < pasos_)

/*
*Switch: Permite evaluar una expresión e intenta igualar el valor de esa expresión a una etiqueta
* llamada CASE, que es el caso a evaluar.
*/
let tipoFruta = 'naranja';
switch (tipoFruta) {
    case 'Naranaja':
        console.log('Las naranjas cuestan $5 dolares.');
        break;
    case 'Manzana':
        console.log('Las manzanas cuestan $20 dolares.');
        break;
    case 'Fresas':
        console.log('Las fresas cuestan $30 dolares.')
        break;
    default:
        console.log('Disculpa no tenemos ' + tipoFruta + ' en este momento.')
        break;
}

//Try catch
function dividir(numerador, divisor) {
    try {
        if (divisor === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        let resultado = numerador / divisor;
        console.log("Resultado: " + resultado);
    } catch (error) {
        console.error("Error: " + error.message);
    }
}
dividir(10, 2);
dividir(10, 0);

/**
 * Se utiliza para ejecutar codigo de forma segura, ya que en el caso que hayan exepciones, podremos capturarlas y seguir ejecutando 
 * codigo.
 */

/**
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */
for(let i = 10; i <= 55;i++){
    if(i % 2 == 0 && i != 16 && i % 3 != 0){
        console.log(i)
    }
}