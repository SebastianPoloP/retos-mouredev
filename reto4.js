/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

// Creando la cadena de caracteres
const pi = 3.1416;
let string = 'Una cadena primitiva';
let string2 = "También una cadena primitiva";
let string3 = `Otra cadena primitiva mas, Pi: ${pi}, ${pi + 4}`; // Lo bueno de las comillas invertidas es 
//que podemos hacer expresiones incrustadas.

const string4 = new String('Un objeto String');

console.log(string)
console.log(string2)
console.log(string3)
console.log(string4)

// Acceder a un caracter con el método charAt()

console.log('Cat'.charAt(1));

console.log('Cat'[1]); // Esto se puede gracias a ECMAScript5

// Comparando cadenas de caracteres

let a = 'A';
let b = 'c';
if (a < b) {
    console.log(a + ' es menor que ' + b);
} else if (a > b) {
    console.log(a + ' es mayor que ' + b);
} else {
    console.log(a + ' y ' + b + ' son iguales.');
}

// Primitivas String y Objetos String

let stringPrimitivo = 'foo';
let stringObjeto = new String(stringPrimitivo);

console.log(typeof (stringPrimitivo)); // Resultado: String
console.log(typeof (stringObjeto)); // Resultado: Objeto

// Evaluando stings con Eval y diferencia entre String y Objeto String

let s1 = '2+2';
let s2 = new String('2+2');

console.log(eval(s1)); // Devuelve: 4
console.log(eval(s2)); // Devuelve: [String: '2+2']

// Para convertir un objeto String en su contraparte primitiva se utiliza el metodo valueOf()
console.log(eval(s2.valueOf())); // Devuelve: 4

// Notación de escape.
// console.log('\101');  Notación ocatanal rango U+0000 a U+007f. Se recomienda mas usar la notación hexadecimal.
console.log('\''); // Comilla simple.
console.log('\"'); // Comillas dobles.
console.log('\\') // Barra inversa
console.log('Hola,\nmundo') // Nueva linea.
console.log('\r') // Retorno de carro ¿?
console.log('\v') // Tabulación vertical
console.log('\t') // Tabulación
console.log('\b') // Retroceso
console.log('\f') // Avance de página
console.log('\u1111') // Unidad de código Utf 16
console.log('\u{1234}') // Unidad de código utf 32
console.log('\xA9') // Notación hexadecimal.

// Concatenación de Strings

// Metodo 1
let longString = 'Esta es una cadena muy larga que necesita ' +
    'ser dividida en varias lineas porque ' +
    'de lo contrario, mi codigo no será legible.'

// Metodo 2

let longString2 = 'Esta es una cadena muy larga que necesita \
que dividamos en varia lineas porque \
de lo contario, mi codigo es ilegible.'

console.log(longString);
console.log(longString2);

// Métodos estáticos

// String.fromCharCode(): devuelve una cadena de caracteres creada mediante el uso de secuencias de valores unicode especificada.

console.log(String.fromCharCode(65, 66, 67) + ': esto desde el fromCharCode()');

// String.fromCodePoint: Devuelve una cadena creada utilizando la secuencia de puntos de código especificada.

console.log(String.fromCodePoint(42));
console.log(String.fromCodePoint(0x2f804));


/*
 * console.log(String.fromCodePoint('_'));
 * console.log(String.fromCodePoint(NaN));
 * Estas expresiones darían un Throw: RangeError
*/

// String.raw(): Devuelve una cadena creada a partir de una plantilla literal sin formato.

console.log(String.raw({ raw: 'text' }, 0, 1, 2,));

let name = 'Bob';
console.log(String.raw`Hi\n${name}!`);

console.log(String.raw`Hi\n${2 + 3}`);

console.log(String.raw({
    raw: ['foo', 'bar', 'baz']
},
    2 + 3,
    "Java" + "Script",
));

// Propiedades de la Instancia

// String.prototype.lenght: Representa la longitud de una cadena.

let x = 'Mozilla';
let vacio = '';

console.log('Mozilla tiene ' + x.length + ' unidades de longitud');
console.log('El String vacio tiene una longitud de ' + vacio.length);

// Asiganar a .length
let miString = 'Campanilla';
miString.length = 4; // Intento de asiganación 4 al string pero como los string son inmutables no tiene ningún efecto.
console.log(miString);

// Métodos de instancia

// String.prototype.charAt(): devuelve en un nuevo string el carácter UTF-16 de una cadena.

let cadena = 'Auron me ayudo';
console.log('El carácter en el índice 0 es"' + cadena.charAt(0) + '"'); // Devuelve: A
console.log('El carácter en el índice 1 es "' + cadena.charAt(1) + '"'); // Devuelve: U
console.log('El carácter en el índice 2 es "' + cadena.charAt(2) + '"'); // Devuelve: R
console.log('El carácter en el índice 3 es "' + cadena.charAt(3) + '"'); // Devuelve: O
console.log('El carácter en el índice 4 es "' + cadena.charAt(4) + '"'); // Devuelve: N
console.log('El carácter en el índice 999 es "' + cadena.charAt(999) + '"'); // Devuelve: Vació

// String.prototype.charCodeAt(): Devuelve un numero indicando el valor unicode del carácter en el índice proporcionado.

console.log('ABC'.charCodeAt(0));

console.log('AaSdas'.charCodeAt(2));

console.log('Aasdas'.charCodeAt(2));

// String.Property.codePointAt(): 
// Devuelve un número entero no negativo que es el valor del punto de código del 
//punto de código codificado en UTF-16 que comienza en la posición especificada.

console.log('ABC'.codePointAt(1)); // Devuelve: 66
console.log('\uD800\uDC00'.codePointAt(0)); // Devuelve: 65536
console.log('XYZ'.codePointAt(42)); // Devuelve: undefined.

/**
 * String.property.concat(): Combina texto de dos o mas cadenas y devuelve una nueva.
 */

let saludo = 'Hola ';
console.log(saludo.concat('Sebastian', '. Que tengas lindo días.'));

let lista = ['Hola', ' ', 'Venkat', '!'];
console.log(''.concat(...lista));

/**
 * String.property.includes(): Determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo
 * true o false según corresponda.
 */

let frase = 'El mejor streamer es Auron';
let palabra = 'Auron';

console.log(
    `La palabra "${palabra}" ${frase.includes(palabra) ? 'esta' : 'no esta'} en la frase`,
);

// Este método tiene sensibilidad a las mayúsculas/minúsculas

console.log('Ballena azul'.includes('ballena')); // Devuelve: false

// Método endsWith(): Determina si la cadena termina con los caracteres de la cada indicada, devolviendo true o false según corresponda.
// Este método fue agregado en ECMAScript 6.

let str = 'Cats are the best!';
console.log(str.endsWith('best!'));
console.log(str.endsWith('best', 17));

let str2 = 'Is this a question?';
console.log(str2.endsWith('question'));

/**
 * Método indexOf(): Devuelve el indice, dentro del String que realiza la llamada,
 * de la primera ocurrencia del valor especificado, comenzando con la busqueda desde
 * indiceDesde; o -1 si no encuentra dicho valor.
 */

console.log('Blue Whale'.indexOf('Blue'));
console.log('Blue Whale'.indexOf('Blute'));
console.log('Blue Whale'.indexOf('', 9));
console.log('Blue Whale'.indexOf('Whale', 0));
console.log('Blue Whale'.indexOf('Whale', 5));
console.log('Blue Whale'.indexOf('', 11));

// Este método es sensible a mayúsculas

console.log('Ballena Azul'.indexOf('azul')); // Devuelve: -1

/**
 * Método lastIndexOf(): Devuelve la posición en la que se encuentra el valorBusqueda, dentro del objeto String
 * que realiza la llamada.
 */

console.log('canal'.lastIndexOf('a'));
console.log('canal'.lastIndexOf('a', 2));
console.log('canal'.lastIndexOf('a', 0));
console.log('canal'.lastIndexOf('x'));

/**
 * Método localeCompare: Retorna un entero que indica si la cadena de referencia va antes, después 
 * o si es equivalente a la cadena comparada
 * Negativa cuando referencia ocurre antes que la comparación
 * Positivo cuando referencia ocurre después que la comparación
 * Retorna 0 si son equivalente.
*/

console.log('a'.localeCompare('c'));
console.log('check'.localeCompare('against')); /** Alfabéticamente la palabra check va después que
                                                    against por lo que resulta en un valor positivo. */
console.log('a'.localeCompare('a'));

/**
 * localeCompare() permite ordenar un arreglo independientemente de mayúsculas y minúsculas.
 */

let items = ["réservé", 'Premier', 'Cliché', 'comuniqué', 'café', 'Adieu'];
console.log(items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true })));

// Comparando según el idiomas.

console.log('ä'.localeCompare('z', 'de')); // Comparando en idioma alemán
console.log('ä'.localeCompare('z', 'sv')); // Comparando en sueco

// Los resultados provistos por localeCompare() se pueden personalizar usando el argumento Options.

console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // En el alemán la letra a tiene a "a" como letra base
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // En el sueco, ä y a son letras bases separadas.

// Ordenamiento numérico

console.log('2'.localeCompare('10')); // Por defecto, '2' > '10'
console.log('2'.localeCompare('10', undefined, { numeric: true })); // Usando Options.
console.log('2'.localeCompare('10', 'en-u-kn-true')); // Usando locales.

// Método match(): Se utiliza para hacer coincidir la expresión regular con una cadena.

let frase2 = 'The quick brown fox jumps over the lazy dog. It barked.';
let regExp = /[A-Z]/g;
let encontrar = frase2.match(regExp);

console.log(encontrar);

let str3 = 'Para mas información, consulte el Capítulo 3.4.5.1';
let regExp2 = /consulte el (capítulo \d+(\.\d)*)/i;
let found = str3.match(regExp2);

console.log(found);

// Usando Global e Ignore en match()

var str4 = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
var regexp = /[A-E]/gi;
var matches = str4.match(regexp);

console.log(matches);

// Capturar un nombre con match()

const paragraph = "El veloz zorro marrón salta sobre el perro perezoso. Ladró.";
const capturingRegex = /(?<animal>zorro|gato) marrón/;
const found2 = paragraph.match(capturingRegex);

console.log(found2.groups);

// match() sin parámetros

const str5 = 'Nada saldrá de la nada.';
console.log(str5.match());

// Usando Symbol en match()

const str6 = "Mmmm, esto es interesante.";

console.log(str6.match({
    [Symbol.match](str6) {
        return ["Sí lo es!"];
    },
}));

/**
 * Método matchAll(): Retorna un iterador de todos los resultados de ocurrencias en una cadena de texto
 * contra una expresión regular, incluyendo grupos de captura.
 */

const regExp3 = /t(e)(st(\d?))/g;
const str7 = 'test1test2';

const array = [...str7.matchAll(regExp3)];

console.log(array[0]);

console.log(array[1]);

// Antes para hacer llamados se usaba .exec, ejemplo:

const regExp4 = RegExp('foo[a-z]*', 'g');
const cadena2 = 'mesa football, foosball';
let ocurrencia;
while ((ocurrencia = regExp4.exec(cadena2)) !== null) {
    console.log(
        `Encontrado ${ocurrencia[0]} incio= ${ocurrencia.index}
        final= ${regExp4.lastIndex}.`
    );
}

// Ahora usamos lo matchAll()

const ocurrencias = cadena2.matchAll(regExp4);

for (const ocurrencia of ocurrencias) {
    console.log(
        `Encontrado ${ocurrencia[0]} inicio= ${ocurrencia.index} final= ${ocurrencia.index + ocurrencia[0].length}`
    );
}

// matchAll() solo devuelve la primera ocurrencia si la, bandera /g esta ausente.

/**
 * Método normalize(): Devuelve la forma de normalización Unicode del valor de la cadena llamada.
 * Parámetros: 
 * NFC: Forma de normalización de composición canónica
 * NFD: Forma de normalización de descomposición canónica 
 * NFKC: Forma de normalización de composición de compatiblidad
 * NFKD: Forma de normalización de descomposición de compatiblidad
 */

// Cadena inicial

// U+1E9B: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA
// U+0323: COMBINACIÓN CON PUNTO ABAJO
let str8 = "\u1E9B\u0323";

// Forma compuesta canónicamente (NFC)

// U+1E9B: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA
// U+0323: COMBINACIÓN CON PUNTO ABAJO
console.log(str8.normalize("NFC")); // '\u1E9B\u0323'
console.log(str8.normalize()); // lo mismo que arriba

// Forma canónicamente descompuesta (NFD)

// U+017F: LETRA S LATINA MINÚSCULA
// U+0323: COMBINACIÓN CON PUNTO ABAJO
// U+0307: COMBINACIÓN CON PUNTO ARRIBA
console.log(str8.normalize("NFD")); // '\u017F\u0323\u0307'

// Compuesta con compatibilidad (NFKC)

// U+1E69: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA Y ABAJO
console.log(str8.normalize("NFKC")); // '\u1E69'

// Descompuesta con compatibilidad (NFKD)

// U+0073: LETRA S LATINA MINÚSCULA
// U+0323: COMBINACIÓN CON PUNTO ABAJO
// U+0307: COMBINACIÓN CON PUNTO ARRIBA
console.log(str8.normalize("NFKD")); // '\u0073\u0323\u0307'

// Método padEnd(): Añade caracteres al final de una cadena de texto hasta que alcance la longitud deseada.

let say = 'hola';
let sayRelleno = say.padEnd(10, '*');

console.log(sayRelleno);

// Otra forma en la que se puede usar este método es el siguiente.
console.log('abc'.padEnd('10', 'Foo'));
console.log('abc'.padEnd(6, '123456789'));
console.log('abc'.padEnd(1));

/**
 * Método padStar(): Añade caracteres al principio de una cadena de texto hasta que alcance la longitud deseada.
 */

console.log('abc'.padStart(6));
console.log('abc'.padStart(10, 'Foo'));
console.log('abc'.padStart(1));

/**
 * Método repeat(): Construye y devuelve una nueva cadena que contiene el número 
 * especificado de copias de la cadena en la cual fue llamada, concatenados.
 */

// console.log('abc'.repeat(-1)); Devuelve un error RangeError: Valor contado invalido.
console.log('abc'.repeat(0));
console.log('abc'.repeat(1));
console.log('abc'.repeat(2));
console.log('abc'.repeat(3.5)); // El 3.5 se convierte en un Integer.
// console.log('abc'.repeat(1/0)); Devuelve: RangeError Valor contado invalido.

/**
 * Método replace(): Devuelve una cadena con una, algunas o todas las coincidencias 
 * de un patrón, siendo cada una de estas coincidencias reemplazadas por un reemplazo.
 */

const parrafo = "I think Ruth's dog is cuter than your dog!";
console.log(parrafo.replace("cuter", "adorable"));

/**
 * Método replaceAll(): Devuelve un nuevo string con todos los coincidencias 
 * de un patrón y las reemplaza.
 */

console.log(parrafo.replaceAll('dog', 'cat'));

/**
 * Método search(): Ejecuta una búsqueda y devuelve la posición de la primera aparición des texto
 * especificado en la cadena. Soporta expresiones regulares.
 */

console.log(parrafo.search('dog')); //15

/** 
 * Método slice(): extrae un sección de una cadena y devuelve una cadena nueva.
 */

const cadena3 = 'La mañana se nos vino encima.';
console.log(cadena3.slice(1, -1));

/**
 * Método split(): Divide un objeto de tipo string en cadena en una array de subcadenas. 
 * El punto clave es que lo hace en el lugar donde encuentra un separador que tu indiques.
 */

const separar = cadena3.split(" "); // Se le indica el tipo de separador que va a tener en este caso un espacio
console.log(separar);

/**
 * Método starsWith(): Indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta,
 * devolviendo true false según corresponda.
 */

console.log(cadena3.startsWith('La'));
console.log(cadena3.startsWith('se', -1));

/**
 * Método substring(): se utiliza para extraer una parte de un string entre dos índices especificos. 
 * Devuelve una cadena que contiene los caracteres desde el índice de inicio hasta el índice final menos 1.
 */

console.log(cadena3.substring(0, 4));
console.log(cadena3.substring(4, 0)); // Si el índice de inicio es mayor, los índices se intercambian.
console.log(cadena3.substring(1, 10));
console.log(cadena3.substring(5, 7));

/**
 * Método toLocaleLowerCase(): Convierte todos los caracteres de un string en minúsculas, considerando las reglas
 * locales de mayúsculas y minúsculas.
 * 
 * Método toLowerCase(): Devuelve la cadena de texto convertida en minúscula.
 */

let texto = '¡Hola Mundo!';
let minusculas = texto.toLocaleLowerCase();
console.log(minusculas);
console.log('Usando toLowerCase(): ' + texto.toLowerCase());

// Uso de toLocaleLowerCase() configurando un región específica:

let texto2 = "İstanbul";
let minusculas2 = texto2.toLocaleLowerCase('tr-TR'); // Especificación regional.
console.log(minusculas2);

/**
 * Método toLocaleUpperCase(): Convierte todos los caracteres de un string en mayúsculas, considerando las reglas
 * locales.
 * 
 * Método toUpperCase(): Convierte todos los caracteres de un string en mayúsuclas.
 */

let mayusculas = texto.toLocaleUpperCase();
console.log(mayusculas);
console.log('Usando toUpperCase(): ' + mayusculas.toUpperCase());

let mayusculas2 = texto2.toLocaleUpperCase('tr-TR');
console.log(mayusculas2);

/**
 * Método toString(): Se usa para convertir un valor en un string, pueden ser números, objetos o cualquier tipo
 * de dato que sea representado como texto.
 */

const p = 3.1416;
console.log('Numero convertido en string ' + p.toString() + '\
            Mostrando el tipo de dato sin hacer la conversión: '+ typeof (p) + '\
            Mostrando el numero convertido: '+ typeof (p.toString()));

/**
 * Método trim(): Elimina los espacios en blanco, tabulaciones, saltos de línea, etc, que están al principio y 
 * al final de una cadena de texto. 
 * 
 * Método trimStart(): Elimina los espacios al principio de la cadena.
 * 
 * Método trimEnd(): Elimina los espacios al final de la cadena.
 */

const cadena6 = ' Hola mundo  ';
console.log(cadena6.trim());

console.log('Usando trimStart(): ' + cadena6.trimStart());
console.log('Usando trimEnd(): ' + cadena6.trimEnd());

/**
 * Método valueOf(): Devuelve el valor primitivo subyancente de un objeto. Es decir, da la escencia
 * del objeto en forma de valor básico, como un número, una cadena o un booleano, dependiendo del tipo del objeto.
 */

let texto3 = new String("Hola");
let valor = texto3.valueOf();
console.log(valor);
console.log('Tipo de dato de la variable "valor": ' + typeof (valor));

/**
 * String.prototype[Symbol.iterator](): Permite a las cadenas de texto ser iterables.
 */

//Usando For of:
let texto4 = "Hola";
for (let caracter of texto4) {
    console.log(caracter);
}

// Usando Array.from(): 
let texto5 = "Mundo";
let arrayDeCaracteres = Array.from(texto5);
console.log(arrayDeCaracteres);// Gracias a que los strings son iterables podemos hacer una array.

/*
    DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

/**
 * 1) Tomamos las palabras en una variable
 * 2) Se hace una comparación para saber si son palindromas, anagramas o isogramas
 *  2.1) Palindromos: tomamos la palabra, la iteramos al revés y la guardamos en otra variable.
 *  2.2) Anagramas: Ordenamos las letras de las palabras y comparamos si tiene la misma cantidad de letras
 *      y las mismas letras.
 *  2.3) Isogramas: Comparamos si no tiene letras repetidas.
 */

const verificacion = (palabra, palabraDos) => {

    const esPalindromo = () => {
        palabra = palabra.toLowerCase();
        let palabraReversa = palabra.split('').reverse().join('');
        palabraDos = palabraDos.toLowerCase();
        let palabraReversaDos = palabraDos.split('').reverse().join('');
        return palabra === palabraReversa && palabraDos === palabraReversaDos;
    };
    /**
     * Mejoras en el código:
     * const esPalindromo = (p1, p2) => {
        const limpia = (p) => p.toLowerCase().replace(/[^a-z]/g, '');
        const reverso = (p) => limpia(p).split('').reverse().join('');
        return limpia(p1) === reverso(p1) && limpia(p2) === reverso(p2);
    };
     */
    
    const esAnagrama = () => {
        palabra = palabra.toLowerCase().split('').sort().join('');
        palabraDos = palabraDos.toLowerCase().split('').sort().join('');
        return palabra === palabraDos;
    }

    /**
     * const esAnagrama = (p1, p2) => {
        const ordenar = (p) => p.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
        return ordenar(p1) === ordenar(p2);
    };
     */
    
    const esIsograma = () => {
    
        const verificarPalabra = (verificar) => {
            verificar = false;
            let sort = palabra.toLowerCase().split('').sort();
            for (let i = 0; i < sort.length; i++) {
                if (sort[i] === sort[i + 1]) {
                    verificar = true;
                }
            }
            return verificar;
        }
        const verificarPalabraDos = (verificar) => {
            verificar = false;
            let sortPalabraDos = palabraDos.toLowerCase().split('').sort();
            for (let i = 0; i < sortPalabraDos.length; i++) {
                if (sortPalabraDos[i] === sortPalabraDos[i + 1]) {
                    verificar = true;   
                }
            }
            return verificar;
        }
        return verificarPalabra() || verificarPalabraDos();
        
    }

    /**
     * const esIsograma = (p) => {
        const letras = p.toLowerCase().replace(/[^a-z]/g, '');
        const letraSet = new Set(letras);
        return letras.length === letraSet.size;
    };
     */

    if(esPalindromo()){
        console.log('Es Palindromo');
    }else if(esAnagrama()){
        console.log('Es Anagrama');
    }else if(esIsograma() != true){
        console.log('Es Isograma');
    }else{
        console.log('No es ningun juego de palabras')
    }

    /**
     * if (esPalindromo(palabra, palabraDos)) {
        console.log('Ambas palabras son palíndromos');
    } else if (esAnagrama(palabra, palabraDos)) {
        console.log('Las palabras son anagramas');
    } else if (esIsograma(palabra) && esIsograma(palabraDos)) {
        console.log('Ambas palabras son isogramas');
    } else {
        console.log('No es ningún juego de palabras');
    }
     */
};

verificacion('Amor', 'Roma');

/**
 * Cosas a mejorar en el codigo
 * Normalización de código:
 * Agregar una función dentro de las funciones para generalizar el código
 * y evitar repetir lógica.
 * En la función esIsograma, la función verificarPalabra y verificarPalabraDos 
 * tienen una asignación incorrecta al comienzo (verificar = false), que no está utilizando 
 * el argumento verificar de manera adecuada.
 * Además, el nombre verificarPalabra y verificarPalabraDos no es claro en cuanto
 * a su propósito, y podrías simplificar su lógica. Esto quedaría así:
 * En la verificación de isograma, deberías revisar si la palabra 
 * tiene caracteres repetidos, no si es un isograma o no. 
 * En la condición else if(esIsograma() != true), deberías 
 * utilizar else if(!esIsograma()) para simplificar la comprobación.
 * Explicación de las Mejoras
 * Limpieza y Normalización: La función "limpia" elimina caracteres no alfabéticos y convierte las 
   letras a minúsculas, asegurando que la comparación sea precisa.
 * Reverso y Ordenación: En "esPalindromo", se usa una función auxiliar para obtener el reverso de la palabra.
 * En "esAnagrama", se ordenan las letras de las palabras para compararlas
 * Verificación de Isograma En "esIsograma", se utiliza un Set para identificar si hay letras repetidas.
   Si el tamaño del Set es igual al tamaño de la palabra original, entonces no hay letras repetidas.
 * Condiciones Claras: Las condiciones en el if principal son claras y se utilizan funciones auxiliares para evaluar cada caso.
 */