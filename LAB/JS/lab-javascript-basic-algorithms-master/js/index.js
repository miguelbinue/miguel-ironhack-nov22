
// // Iteration 1: Names and Input
// //
// let hacker1 = "Pol";
// console.log("The driver's name is Pol");

// let hacker2 = "Joan";
// console.log("The navigator's name is Joan");
// // Iteration 2: Conditionals
// if (hacker2.length < hacker1.length) {
//     console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
// }

// else if (hacker1.length < hacker2.length){
//     console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
// } 

// else (`Wow, you both have equally long names, ${hacker2.length} characters!.`)

// // Iteration 3: Loops
// //3.1
// let reservedName = " ";
// for (i = 0; i < hacker1.length; i++) {
//     reservedName += hacker1[i].toUpperCase() + " ";
// }    
// console.log(reservedName);

// //3.2
// let reverseName = "";
// for (i = hacker1.length - 1 ; i > hacker1.length; i--) {
//     reverseName += hacker1[i];
// }
// console.log(reverseName);

// //3.3
// let names = [hacker2, hacker1];

// let sortedNames = names.sort();
// console.log(sortedNames);

// // Ejemplo complejo - SWITCH - COUNTRY CONTINET FINDER - CASOS MULTIPLES
// const countryOfOrigin = prompt("What country where you born?");
// switch (countryOfOrigin.toLowerCase(cd l)) {
//   case "venezuela":
//   case "volombia":
//   case "veuador":
//   case "brazil":
//     alert(`Cool, ${countryOfOrigin} is located in South America`);
//     console.log(`Cool, ${countryOfOrigin} is located in South America`);
//     break;
//   case "spain":
//   case "france":
//   case "portugal":
//   case "andorra":
//     alert(`Cool, ${countryOfOrigin} is locaded in Europe`);
//     console.log(`Cool, ${countryOfOrigin} is locaded in Europe`);
//     break;
//   default:
//     alert("you are not from this planet! go Invade somewhere else...");
//     console.log("you are not from this planet! go Invade somewhere else...");
// }

// // EJERCICIO #1
// // Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// // Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

// let name = "Miguel"
// let age = 9
// let livesIn = {
//     livesInCity: false,
//     livesInTown: true
// }

// console.log(ejfunction(name, age, livesIn)); 

// function ejfunction(name, age, livesIn) { 
//     if (livesIn.livesInCity && livesIn.livesInTown) {
//         return (`${name} tiene ${age} años y vive en la ciudad`);
//     }
//     else {
//         return (`${name} tiene ${age} años y vive en el pueblo`);
//     } 
// }

// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.

const array = ["a", 9, "Miguel"];
for (i = 0; i < array.length; i++) {
    console.log(typeof array[i]);
}

// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

let p1= "Ryan Reynolds"

let p2= "Misty"

let p3 = "Mr.Bean"

const array2 = [p1, p2, p3]

for (i = 0; i < array2.length; i++) {
    console.log(`${array2[i]} is so famous, i love them`);
}



