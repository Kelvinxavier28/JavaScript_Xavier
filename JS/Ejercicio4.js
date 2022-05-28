//Programa que permita a traves de funciones, desarrollar la suma, resta, multiplicacion y division de dos numeros enteros.

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

var numero1 = parseInt(prompt("Ingrese el primer numero: "));
var numero2 = parseInt(prompt("Ingrese el segundo numero: "));
var operacion = prompt("Ingrese la operacion que desea realizar (sumar, restar, multiplicar, dividir): ");

if (operacion == "sumar") {
    alert(sumar(numero1, numero2));
} else if (operacion == "restar") {
    alert(restar(numero1, numero2));
} else if (operacion == "multiplicar") {
    alert(multiplicar(numero1, numero2));
} else if (operacion == "dividir") {
    alert(dividir(numero1, numero2));
} else {
    alert("Operacion invalida");
}