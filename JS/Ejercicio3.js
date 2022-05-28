//Elaborar un programa que permita identificar si un numero es primo.

var numero = prompt("Ingrese un numero: ");
var esPrimo = true;

for (var i = 2; i < numero; i++) {
    if (numero % i == 0) {
        esPrimo = false;
    }
}

if (esPrimo) {
    alert("El numero " + numero + " es primo");
} else {
    alert("El numero " + numero + " no es primo");
}
