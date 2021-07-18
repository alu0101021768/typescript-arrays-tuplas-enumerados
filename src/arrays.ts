// Los arrays en typescript son como los de Javascript, ambos pueden contener elementos de cualquier tipo y además son de tamaño variable.
// Lo que pasa que en javascript si tenemos un array asi, no pasa nada: let arr = ["airito", true, 2, 1.0, { "hola": "adios"}]

// Si lo hacemos en typescript tampoco pasaría nada, pero si tenemos activada la opcion de noImplicitsAny, el compilador dará un error,
// porque como hay tantos tipos distintos en ese array, el infiere que el array es de tipo any, lo que es como si al declararlo lo tiparamos 
// así: let arr: any[] = [...]

// Por lo tanto, como sabemos que esa opcion nos hace falta para hacer buen codigo, la tendremos puesta, nos dará el error y necesitaremos tipar
// nuestros arrays adecuadamente.

// function add(firstNum: number, secondNum: number): number {
//   return firstNum + secondNum;
// }

// function printNumber(myNum: number): void {
//   console.log(`Number = ${myNum}`);
// }

// En esta linea podriamos evitarnos poner que el array es de tipo number, puesto que la funcion add siempre devuelve number, 
// y el compilador inferirá correctamente el tipo

// let myAdditions: number[] = [add(8, 9), add(1, 7), add(20, 43)];

// printNumber(myAdditions[0]);
// printNumber(myAdditions[1]);
// printNumber(myAdditions[2]);
// ----------------------------------------------------------
// Sin embargo, si ese array tuviera algun elemento distinto a number
// Por ejemplo: let myAdditions: number[] = [add(8, 9), add(1, 7), add(20, 43), "17"];

// El compilador nos dará un error porque estamos tipandolo como array de strings, sin embargo el compilador vé que uno de los 
// elementos es un "17", osea un string, así que dá error.

// La solucion facil seria tipar el array como any[] de modo que permitimos cualquier tipo, pero ya sabemos que eso puede llevar a errores
// así que no nos renta. Así que otra solucion posible sería ampliar el tipo de datos que puede contener el array, tipandolo como
// (number | string)[] , indicando asi que el array puede contener strings y numeros, pero esto nos conlleva que estamos haciendo una 
// union de tipos, así que al probar el codigo necesitaremos un guardian de tipos, para controlar el flujo de ejecucion, ya que por ejemplo nuestra
// funcion print solo imprime numeros, porque es el tipo de datos que espera por parametro segun le indicamos.

// function add(firstNum: number, secondNum: number): number {
//   return firstNum + secondNum;
// }

// function printNumber(myNum: number): void {
//   console.log(`Number = ${myNum}`);
// }

// let myAdditions: (number | string)[] =
//   [add(8, 9), add(1, 7), add(20, 43), "17"];

// myAdditions.forEach((item: number | string) => {
//   if (typeof item === "number") {
//     printNumber(item);
//   }
// });

// En este caso concreto si no indicamos el tipo de dato del array, el compilador lo infiere correctamente.+

// ----------------------------------------------------------
// Arrays vacios
// ----------------------------------------------------------
// Especial cuidado hay que tener a la hora de declarar arrays vacíos, sobre todo en el caso de que
// no se usen anotaciones de tipo explícitas para los mismos:

// function add(firstNum: number, secondNum: number): number {
//   return firstNum + secondNum;
// }

// function printNumber(myNum: number): void {
//   console.log(`Number = ${myNum}`);
// }

// let myAdditions = [add(8, 9), add(1, 7), add(20, 43), "17"];

// let myEmptyArray = [];
// myEmptyArray.push(17);
// myEmptyArray.push("17");
// myEmptyArray.push(true);


// myAdditions.forEach((item) => {
//   if (typeof item === "number") {
//     printNumber(item);
//   }
// });

// En este caso concreto el compilador no se queja cuando hacemos push, porque al no haber tipado el array, el infiere que este
// es de tipo any, ya que contiene numeros, strings y booleanos tras los push.

// Pero lo aconsejable es tipar correctamente los arrays