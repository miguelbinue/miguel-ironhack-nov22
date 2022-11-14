

// Ejemplo - Object
const myBio = {
    firstName: "Miguel",
    lastName: "Binué",
    age: 23,
    hobby: ["surfear", "nadar", "dormir", "viajar"]
}

for (let i = 0; i < myBio.hobby.length; i ++) {
    console.log("Hola mi nombre es " + `${myBio.firstName}` + " " + `${myBio.lastName}` + ", tengo " + `${myBio.age}` + " años y me gusta mucho " + `${myBio.hobby[i]}`)
}

//1.
let num = 8;
let str = "8";

console.log(num == str);
console.log(num === str);
console.log(num < 18);
console.log(num > 18);
console.log(num >= 18);

const user = "";

if (user <= 5) {
    console.log("Gratis");
} else if (user < 15) {
    console.log("tienes un 20%");
} else if (user >= 15 && user <= 60) {
    console.log("Pagan regular");
} else {
    console.log("40% descuento");
}