// Las tuplas son un tipo de datos proporcionado por el compilador de TypeScript que, en tiempo de ejecución,
//   son gestionados por JavaScript como arrays regulares.En concreto, son arrays de longitud fija donde
// cada elemento puede ser de diferente tipo.

// Primer contacto con las tuplas, en este caso tenemos un array bidimensional, uno principal que contiene a los otros, y dentro de este, 
// cada array contiene dos valores, un string y un numero, pero esto no tiene por que ser asi siempre, es un caso concreto para ilustrar la 
// sintaxis

// let bankActivities = [["Trail Shop", 23.45], ["Coffee Shop", 15.43]];

// bankActivities.forEach((activity) => {
//   console.log(`I spent ${activity[1]} euros at ${activity[0]}`);
// });

// Operacions sobre la tupla, ¿Qué cambios produce?

// bankActivities[0] = ["Supermarket"];
// bankActivities[1][1] = "15.43";
// bankActivities.push(["Pub", "Tons of beers", 15, 16]);

// Si ejecutas el codigo hasta la linea de abajo, verás cual es el output
// console.log(bankActivities)
// ----------------------------------------------------------

// Si lo tipamos de la siguiente manera, estamos indicando que especificamente se espera un array de tuplas de especificamente dos elementos,
// donde el primero sea de tipo string y el segundo de tipo number

// let bankActivities: [string, number][] =
//   [["Trail Shop", 23.45], ["Coffee Shop", 15.43]];

// bankActivities.forEach((activity) => {
//   console.log(`I spent ${activity[1]} euros at ${activity[0]}`);
// });

// Estas sentencias darán error puesto que no cumplen con lo indicado en el tipo
// bankActivities[0] = ["Supermarket"];
// bankActivities[1][1] = "15.43";
// bankActivities.push(["Pub", "Tons of beers", 15, 16]);

// Una forma de simplificar nuestro codigo sería usar alias de tipos, como vimos en los temas anteriores
// type BankActivity = [string, number];

// let bankActivities: BankActivity[] =
//   [["Trail Shop", 23.45], ["Coffee Shop", 15.43]];

// bankActivities.forEach((activity) => {
//   console.log(`I spent ${activity[1]} euros at ${activity[0]}`);
// });