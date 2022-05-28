var cantidad_platos = 1
var precio_unitario
if (cantidad_platos = 30){
    precio_unitario = 150
}  
if (cantidad_platos >=31 && cantidad_platos <= 50){
    precio_unitario = 125
}
if (cantidad_platos > 51 && cantidad_platos <= 200){
    precio_unitario = 100
}
if (cantidad_platos > 201){
    precio_unitario = 75
}
if (cantidad_platos < 30){
    precio_unitario = 200
}

console.log("El precio total de tu compra es: ", cantidad_platos )
