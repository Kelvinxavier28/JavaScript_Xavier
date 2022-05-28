// Elaborar un programa que permita ingresar los valores de coordenadas en el plano 
// para obtener  la pendiente de una recta.
// Determinar si la pendiente es positiva, negativa o cero.

var x1 = 2; 
var y1 = 5; 
var x2 = 4; 
var y2 = 2; 
var pendiente = (y2-y1)/(x2-x1);
console.log(pendiente); 

if(pendiente < 0){
    console.log("Pendiente es negativa", pendiente)
}else{
    console.log("Pendiente es positiva", pendiente)
}
