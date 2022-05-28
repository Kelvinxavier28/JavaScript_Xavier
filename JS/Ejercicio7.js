var numero = 6
var div = 0
for (var i=1; i<numero; i++){
    if (numero % i == 0) div += i;
}
if (numero == div){                                                                                 
    console.log("el numero es perfecto")
} else {
    console.log("el numero no es perfecto")
}