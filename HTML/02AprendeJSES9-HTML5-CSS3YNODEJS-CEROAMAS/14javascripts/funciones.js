/* Funciones */
document.write(`
<pre>
--------------------------------------------
                  Funciones
--------------------------------------------
</pre>
`) //las funciones se pueden ejecutar vartias veces 

function sumar(a, b) {

    let z = a + b;
    let x = a - b;
    document.write("La suma de a + b es :" + z);
    document.write("<br>");
    document.write("La resta de a - b es :" + x);
    document.write("<br>");
    document.write("<hr>");
}
let sum = Number(prompt("Ingrese un numero 1 :", 0));
let res = Number(prompt("Ingrese un numero 2 :", 0));

sumar(sum, res);
sumar(sum, res);
sumar(sum, res);
sumar(sum, res);
/* callbacks */
function sumaremos(q, w, e) {

    let resultado = q + w;
    e(resultado)

}

function callback(result) {
    console.log(result);
}
//callback(result)
sumaremos(2, 5, callback);
/* fat arrow fuction */
let fat = (a, b) => a + b;
console.log(fat(1, 2));