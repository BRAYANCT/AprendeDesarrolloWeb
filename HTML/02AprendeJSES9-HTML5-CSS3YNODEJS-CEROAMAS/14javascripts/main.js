/* alert("Hola Mundo");
console.log("Hola mundo");

document.write("Hola mundo<br>");
document.write("Tipos de datos en javascripts");

*/
//definicion de variables existen tres (var let const)
//el var el para definir global
//el let es para bloque
//el const es un dato fijo no se puede modificar

let letra = "letra"; //Esto es un (string,txt)
let numero = 123; //esto es un numero entero (int)
let decimal = 1.25 //esto es decimal (decimal,float)
let nulo = null; //valor nulo(null)
let indefinido; //valor indefinido(undefine)
let boleano = true; //esto es un valor boolean true o false
const Objeto = {} //objetoe s una agrupacion de datos los objetos tiene propiedades
const obj = {
    nombre: "bryan andres",
    apellido: "capcha taype",
    edad: 22
}
const aaray = [{
            nombre: "bryan andres",
            apellido: "capcha taype",
            edad: 22
        }, {
            nombre: "bryan andres",
            apellido: "capcha taype",
            edad: 22
        }, {
            nombre: "bryan andres",
            apellido: "capcha taype",
            edad: 22
        }, {
            nombre: "bryan andres",
            apellido: "capcha taype",
            edad: 22
        },
        { obj }
    ] //array conjunto de objetos 

letra = "letra cambiada";
//console.log(letra);
//console.log(numero);
//console.log(decimal);
//console.log(nulo);
//console.log(indefinido);
//console.log(JSON.stringify(obj));
//console.log(JSON.stringify(aaray));
//console.log(obj.unString);

//Operradores matematicos

let a = Number(prompt("ingrese un numero1", 0));
let b = Number(prompt("ingrese un numero2", 0));

a++;
let c = a + b;
let x = a - b;
let z = a * b;
let v = a / b;
let d = a % b;

c += 5;
x -= 5;
z *= 5;
v /= 5;
d %= 5;

//console.log("suma", c);
//console.log("resta", x);
//console.log("multiplicacion", z);
//console.log("division", v);
//console.log("residuos", d);

//operadores logicos ||(or,y) %% (and,o) not !(distinto)
//operadores de comparacion (< > == === !=)
/* if (a == Number || b == Number) {
 */
if (a > b) {
    document.write("a es mayor a c y su resp es :" + a);
} else if (a < b) {
    document.write("a es menor a c y su resp es :" + b);
} else if (a == b) {
    document.write("a y b son iguales :" + a)

}
/*
} else {
    alert("NO pusiste nungun numero")
    let a = Number(prompt("ingrese un numero1", 0));
    let b = Number(prompt("ingrese un numero2", 0));

} */
var dia1 = String(prompt("Que dia es hoy", "lunes"));
let dia;
switch (dia === dia1) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miercoles":
        console.log("Hoy es miercoles");
        break;
    default:
        console.log("no escibio nada o mal");
        break;
}

var numeros = [1, 2, 3, 4, 5, 6, "hola mundo", 7, 8, 9, 10];
numeros = "hola mundo";
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}