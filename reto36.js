/*
 * EJERCICIO:
 * Cada 1 de septiembre, el Hogwarts Express parte hacia la escuela
 * de programación de Hogwarts para magos y brujas del código.
 * En ella, su famoso sombrero seleccionador ayuda a los programadores
 * a encontrar su camino...
 * Desarrolla un programa que simule el comportamiento del sombrero.
 * Requisitos:
 * 1. El sombrero realizará 10 preguntas para determinar la casa del alumno.
 * 2. Deben existir 4 casas. Por ejemplo: Frontend, Backend, Mobile y Data.
 *    (Puedes elegir las que quieras)
 * Acciones:
 * 1. Crea un programa que solicite el nombre del alumno y realice 10
 *    preguntas, con cuatro posibles respuestas cada una.
 * 2. Cada respuesta asigna puntos a cada una de las casas (a tu elección).
 * 3. Una vez finalizado, el sombrero indica el nombre del alumno
 *    y a qué casa pertenecerá (resuelve el posible empate de manera aleatoria,
 *    pero indicándole al alumno que la decisión ha sido complicada).
 */

const rl = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

require("colors");

const houses = {
  backend: 0,
  frontend: 0,
  mobile: 0,
  data: 0,
};

const questions = [
  {
    question: "Qué te gusta desarrollar en una aplicación?",
    answer: [
      {
        option:
          "Crear la lógica y funciones que hacen que la aplicación trabaja detrás de escenas",
        house: "backend",
      },
      {
        option:
          "Diseñar las pantallas y la experiencia visual de la aplicación para que se vea más bonita y sea fácil de usar",
        house: "frontend",
      },
      {
        option:
          "Crear aplicaciones que funcionen en dispositivos móviles, como teléfonos y tablets",
        house: "mobile",
      },
      {
        option:
          "Trabajar con datos, encontrar patrones y hacer predicciones a partir de la información que tenemos",
        house: "data",
      },
    ],
  },
  {
    question: "Qué actividad te parece mas interesante?",
    answer: [
      {
        option:
          "Diseñar el aspecto visual de una página web o una aplicación para que se vea atractiva y funcione bien en cualquier dispositivo.",
        house: "frontend",
      },
      {
        option:
          "Desarrollar una app que funcione tanto en Android como en iOS, utilizando una sola base de código.",
        house: "mobile",
      },
      {
        option:
          "Crear sistemas que gestionen datos, como bases de datos, y hacer que todo funcione correctamente",
        house: "backend",
      },
      {
        option:
          "Analizar datos y encontrar patrones o tendencias para ayudar a tomar mejores decisiones en una empresa",
        house: "data",
      },
    ],
  },
  {
    question: "Qué tipo de tecnologías te gustan más?",
    answer: [
      {
        option: "Sql, Python, R, Apache Spark, Hadoop",
        house: "data",
      },
      {
        option: "Python, Node.js, Ruby, Vue",
        house: "backend",
      },
      {
        option: "Html, Css, Javascript, Reac, Vue",
        house: "backend",
      },
      {
        option: "Swift, Kotlin, Flutter, React Native",
        house: "mobile",
      },
    ],
  },
  {
    question: "Qué prefieres aprender más?",
    answer: [
      {
        option: "Tecnologías web, frameworks y diseño visual",
        house: "frontend",
      },
      {
        option: "Análisis de datos, machine learning y algoritmos",
        house: "data",
      },
      {
        option: "Desarrollo de apps nativas y optimización y rendimiento",
        house: "mobile",
      },
      {
        option: "Arquitectura de servidores, bases de datos y APIs",
        house: "backend",
      },
    ],
  },
  {
    question: "Cómo te describirías en términos de trabajo?",
    answer: [
      {
        option: "Analítico y con mentalidad de optimización de sistemas",
        house: "backend",
      },
      {
        option: "Curioso, detallista y enfocado en resolver problemas de datos",
        house: "data",
      },
      {
        option: "Creativo y enfocado en la interacción del usuario",
        house: "frontend",
      },
      {
        option: "Orientado a la funcionalidad y usabilidad móvil",
        house: "mobile",
      },
    ],
  },
  {
    question: "Qué herramientas prefieres usar para desarrollar?",
    answer: [
      {
        option: "Visual Studio Code, Figma, Sketch",
        house: "frontend",
      },
      {
        option: "VS Code, Docker, PostgreSQL",
        house: "backend",
      },
      {
        option: "Xcode, Android Studio, React Native",
        house: "mobile",
      },
      {
        option: "Jupyter, Pandas, Tableau",
        house: "data",
      },
    ],
  },
  {
    question:
      "Dónde te gustaría que tus soluciones se ejecutaran principalmente?",
    answer: [
      {
        option: "En dispositivos móviles como teléfonos y tabletas",
        house: "mobile",
      },
      {
        option: "En entornos de procesamiento de datos y análisis",
        house: "data",
      },
      {
        option: "En un navegador web accesible desde cualquier dispositivo",
        house: "frontend",
      },
      {
        option: "En servidores de alto rendimiento y nubes",
        house: "backend",
      },
    ],
  },
  {
    question: "Si tienes un desafío, ¿cuál prefieres resolver?",
    answer: [
      {
        option:
          "Cómo asegurar que la información se procese de forma eficiente y segura",
        house: "backend",
      },
      {
        option:
          "Cómo hacer que los usuarios disfruten la interacción con una app o página",
        house: "frontend",
      },
      {
        option: "Cómo encontrar patrones en grandes volúmenes de datos",
        house: "data",
      },
      {
        option:
          "Cómo optimizar una app para que funcione perfectamente en distintos dispositivos",
        house: "mobile",
      },
    ],
  },
  {
    question: "Cómo te describirías en términos de trabajo?",
    answer: [
      {
        option: "Curioso, detallista y enfocado en resolver problemas de datos",
        house: "data",
      },
      {
        option: "Orientado a la funcionalidad y usabilidad móvil",
        house: "mobile",
      },
      {
        option: "Analítico y con mentalidad de optimización de sistemas",
        house: "backend",
      },
      {
        option: "Creativo y enfocado en la interacción del usuario",
        house: "frontend",
      },
    ],
  },
  {
    question: "Si trabajas en equipo, ¿en qué rol te sentirías más cómodo?",
    answer: [
      {
        option: "Como responsable de la infraestructura y la lógica backend",
        house: "backend",
      },
      {
        option:
          "Como experto en interpretación de datos y generación de informes",
        house: "data",
      },
      {
        option: "Como diseñador o responsable de la experiencia del usuario",
        house: "frontend",
      },
      {
        option: "Como responsable de la aplicación en dispositivos móviles",
        house: "mobile",
      },
    ],
  },
];

function prompt(ask) {
  return new Promise((resolve) => {
    rl.question(ask.green, resolve);
  });
}

function pointHouse(answerUser) {
  for (const house in houses) {
    if (house === answerUser) {
      return houses[house]++;
    }
  }
}

async function sortingHat() {
  const filterHouses = [];
  const name = await prompt("Cuál es tu nombre? ");

  for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].question.green);
    questions[i].answer.forEach((answer, i) => {
      console.log(`${i + 1} ${answer.option.blue}`);
    });

    let answerUser = await prompt("Escoge una opción del 1 al 4 ");
    answerUser = parseInt(answerUser) - 1;
    if (answerUser < 0 || answerUser > 3) {
      console.log("Opción inválida!".red);
      return rl.close();
    }
    pointHouse(questions[i].answer[answerUser].house);
  }

  const valuesHouses = Object.values(houses);
  const houseUser = Math.max(...valuesHouses);

  for (const house in houses) {
    if (houses[house] === houseUser) {
      filterHouses.push(house);
    }
  }

  if (filterHouses.length > 1) {
    const randomNumber = Math.floor(Math.random() * filterHouses.length);
    console.log(`${name} tu casa es...`.blue);
    return setTimeout(() => {
      rl.close();
      console.log(`${filterHouses[randomNumber]}!`.toUpperCase().green);
    }, 4000);
  }

  console.log(`${name} tu casa es...`.blue);
  return setTimeout(() => {
    rl.close();
    console.log(`${filterHouses[0]}!`.toUpperCase().green);
  }, 2000);
}

try {
  console.log(
    `Bienvenido a Hogwarts Academy, donde te convertiras en un verdadero programador!`
      .blue
  );
  sortingHat();
} catch (error) {
  console.log(error);
}
