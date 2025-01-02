/*
 * EJERCICIO:
 * Crea dos variables utilizando los objetos fecha (date, o semejante) de tu lenguaje:
 * - Una primera que represente la fecha (día, mes, año, hora, minuto, segundo) actual.
 * - Una segunda que represente tu fecha de nacimiento (te puedes inventar la hora).
 * Calcula cuántos años han transcurrido entre ambas fechas.
 */

const fechaActual = new Date();
const miFecha = new Date('24 April, 2001');
console.log(fechaActual);
console.log(miFecha);

console.log(`Han trasncurrido ${fechaActual.getFullYear() - miFecha.getFullYear()} años`);

/*
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la fecha de tu cumpleaños, formatéala y muestra su resultado de
 * 10 maneras diferentes. Por ejemplo:
 * - Día, mes y año.
 * - Hora, minuto y segundo.
 * - Día de año.
 * - Día de la semana.
 * - Nombre del mes.
 * (lo que se te ocurra...)
 */

function fullDate(date) {
  return `Dia: ${date.getDate()} Mes: ${date.getMonth() + 1} Año: ${date.getFullYear()}`
}

function fullTimeBorn(date) {
  return `Hora: ${date.getHours()} Minutos: ${date.getMinutes()} Segundos: ${date.getSeconds()}`
}

function dayDate(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  return dayOfYear;
}

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function zodiacSings(date) {
  const month = months[date.getMonth()];
  const day = date.getDate();
  
  if (month === 'Marzo' && day > 20 || month === 'Abril' && day < 20) {
    return 'Aries'
  }
  if (month === 'Abril' && day > 20 || month === 'Mayo' && day < 21) {
    return 'Tauro'
  }
  if (month === 'Mayo' && day > 21 || month === 'Junio' && day < 21) {
    return 'Geminis'
  }
  if (month === 'Junio' && day > 21 || month === 'Julio' && day < 23) {
    return 'Cáncer'
  }
  if (month === 'Julio' && day > 22 || month === 'Agosto' && day < 23) {
    return 'Leo'
  }
  if (month === 'Agosto' && day > 22 || month === 'Septiembre' && day < 23) {
    return 'Virgo'
  }
  if (month === 'Septiembre' && day > 22 || month === 'Octubre' && day < 23) {
    return 'Libra'
  }
  if (month === 'Octubre' && day > 22 || month === 'Noviembre' && day < 22) {
    return 'Escorpio'
  }
  if (month === 'Noviembre' && day > 21 || month === 'Diciembre' && day < 22) {
    return 'Sagitario'
  }
  if (month === 'Diciembre' && day > 21 || month === 'Enero' && day < 20) {
    return 'Capricornio'
  }
  if (month === 'Enero' && day > 19 || month === 'Febrero' && day < 19) {
    return 'Acuario'
  }
  if (month === 'Febrero' && day > 18 || month === 'Marzo' && day < 21) {
    return 'Piscis'
  }
}

function comparationAge(ageOne, ageTwo){
  // Datos del año
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate()

  // Datos primera persona
  let yearOne = currentYear - ageOne.getFullYear();
  let monthOne = currentMonth - ageOne.getMonth();
  let dayOne = currentDay - ageOne.getDate();

  // Datos segunda persona
  let yearTwo = currentYear - ageTwo.getFullYear();
  let monthTwo =currentMonth -  ageTwo.getMonth();
  let dayTwo = currentDay - ageTwo.getDate();
  console.log(dayOne)
  console.log(dayTwo)

  if(monthOne < 0 || (monthOne === 0 && dayOne < 0)){
    yearOne--;
  }

  if(monthTwo < 0 || (monthTwo === 0 && dayTwo < 0)){
    yearTwo--;
  }

  if(yearOne === yearTwo){
    return 'Ambas personas tienen la misma edad';
  }
  return yearOne > yearTwo
  ? `La primera persona es mayor que la segunda`
  : `La segunda persona es mayor que la primera`
}

function comparationDate(dateOne, dateTwo){
  const diff = dateOne - dateTwo;
  const diffDay = diff/ (1000 * 3600 * 24);
  return `${Math.floor(diffDay)} días.`
}

function missingDays(dateOne, days){
  dateOne.setDate(dateOne.getDate() + days)
  return `La fecha actual más ${days} días es: ${dateOne}`
}

function isLeapYear(year){
  return (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0));
}

console.log(fullDate(miFecha));
console.log(fullTimeBorn(miFecha));
console.log(`Con año biciesto: ${dayDate(miFecha)}`);
console.log(`Sin año biciesto: ${dayDate(miFecha) - 1}`);
console.log(`Día de la semana: ${miFecha.getDay() + 1}`);
console.log(months[miFecha.getMonth()]);
// Saber el signo zodical
console.log(zodiacSings(miFecha));
// Saber que persona es mayor
let persona1 = new Date('Febrary 31, 1956');
let persona2 = new Date('December 3, 1956');
console.log(comparationAge(persona1, persona2));
console.log(comparationDate(persona1, persona2))
// Sumar días a una fecha
const date = new Date('August 4, 1998');
console.log(missingDays(date, 31))
// Formato ISO
console.log(miFecha.toISOString());
// Formato Date Default
console.log(miFecha.toString())

// año
const year = 2028;
console.log(isLeapYear(year))