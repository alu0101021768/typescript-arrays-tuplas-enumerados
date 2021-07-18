// Tipo de datos enum: permite definir un conjunto de etiquetas, cada una de ellas con una constante numérica asociada
// Internamente se procesa así:

// declare enum ActivityTypes {
//     SUPERMARKET = 0,
//     MORTGAGE = 1,
//     TRANSPORT = 2
// }

// ----------------------------------------------------------
// enum ActivityTypes { SUPERMARKET, MORTGAGE, TRANSPORT };

// type BankActivity = [ActivityTypes, number];

// let bankActivities: BankActivity[] =
//   [[ActivityTypes.SUPERMARKET, 23.45], [ActivityTypes.TRANSPORT, 15.43]];

// bankActivities.forEach((activity) => {
//   switch (activity[0]) {
//     case ActivityTypes.SUPERMARKET:
//       console.log(`I spent ${activity[1]} euros in the supermarket`);
//       break;
//     case ActivityTypes.MORTGAGE:
//       console.log(`I spent ${activity[1]} euros for my mortgage`);
//       break;
//     case ActivityTypes.TRANSPORT:
//       console.log(`I spent ${activity[1]} euros in transport`);
//       break;
//   }
// });
// ----------------------------------------------------------

// Podría darse el caso en el que no queramos que las constantes numéricas asociadas a las etiquetas del enumerado comenzaran por cero.
// Para ello, podemos asignar un valor explícitamente a la primera etiqueta.El resto de etiquetas tomarán valores consecutivos:

// enum ActivityTypes {SUPERMARKET = 7, MORTGAGE, TRANSPORT};

// type BankActivity = [ActivityTypes, number];

// let bankActivities: BankActivity[] =
//   [[ActivityTypes.SUPERMARKET, 23.45], [ActivityTypes.TRANSPORT, 15.43]];

// bankActivities.forEach((activity) => {
//   switch (activity[0]) {
//     case ActivityTypes.SUPERMARKET:
//       console.log(`I spent ${activity[1]} euros in the supermarket`);
//       break;
//     case ActivityTypes.MORTGAGE:
//       console.log(`I spent ${activity[1]} euros for my mortgage`);
//       break;
//     case ActivityTypes.TRANSPORT:
//       console.log(`I spent ${activity[1]} euros in transport`);
//       break;
//   }
// });

// ----------------------------------------------------------
// Problemas con esto
// Si queremos asignar arbitrariamente mas de un valor,pero no todos, hay que tener cuidado con los que el compilador asigna,
// porque por ejemplo como el ultimo valor asignado en el siguiente enum es 6, el compilador asiganará 7 a TRANSPORTS, creando
// un problema puesto que comparte numero con SUPERMARKET, entonces, cuidadito con eso.

// enum ActivityTypes {SUPERMARKET = 7, MORTGAGE = 6, TRANSPORT};

// type BankActivity = [ActivityTypes, number];

// let bankActivities: BankActivity[] =
//   [[ActivityTypes.SUPERMARKET, 23.45], [ActivityTypes.TRANSPORT, 15.43]];

// bankActivities.forEach((activity) => {
//   switch (activity[0]) {
//     case ActivityTypes.SUPERMARKET:
//       console.log(`I spent ${activity[1]} euros in the supermarket`);
//       break;
//     case ActivityTypes.MORTGAGE:
//       console.log(`I spent ${activity[1]} euros for my mortgage`);
//       break;
//     case ActivityTypes.TRANSPORT:
//       console.log(`I spent ${activity[1]} euros in transport`);
//       break;
//   }
// });

// Salida:
// I spent 23.45 euros in the supermarket
// I spent 15.43 euros in the supermarket

// ----------------------------------------------------------
// Además de asignar constantes numéricas a las etiquetas de un enumerado, también se pueden asignar
// cadenas de caracteres, e incluso, combinaciones de cadenas de caracteres y números(esto no es muy común),
//   tal y como se puede observar en el siguiente ejemplo:

// enum ActivityTypes {SUPERMARKET = "SPR", MORTGAGE = 6, TRANSPORT};

// Una ventaja de utilizar cadenas de caracteres como valores asociados a las etiquetas de un enumerado es que, por ejemplo,
// el proceso de depuración se hace más legible que utilizando valores numéricos.

// Por último, mencionar que también se pueden utilizar las propias etiquetas de un enumerado como cadenas de caracteres,
//   siempre y cuando dichas etiquetas tengan asociadas constantes numéricas:

// enum ActivityTypes {SUPERMARKET, MORTGAGE, TRANSPORT};

// type BankActivity = [ActivityTypes, number];

// let bankActivities: BankActivity[] =
//   [[ActivityTypes.SUPERMARKET, 23.45], [ActivityTypes.TRANSPORT, 15.43]];

// bankActivities.forEach((activity) => {
//   switch (activity[0]) {
//     case ActivityTypes.SUPERMARKET:
//       console.log(`I spent ${activity[1]} euros in the ${ActivityTypes[activity[0]]}`);
//       break;
//     case ActivityTypes.MORTGAGE:
//       console.log(`I spent ${activity[1]} euros for my ${ActivityTypes[activity[0]]}`);
//       break;
//     case ActivityTypes.TRANSPORT:
//       console.log(`I spent ${activity[1]} euros in ${ActivityTypes[activity[0]]}`);
//       break;
//   }
// });