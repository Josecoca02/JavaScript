'use strict'
/*
categorias a asignar:
- alevin menores de 10 años
- junior menores de 20 años
- primera menores de 30 años
- senior mayores o iguales que 40 años
- si edad es -1 entonces anular la operacion
usar math.trunc() en el switch para obtener numeros enteros

*/

var edad;

edad = parseInt(prompt("Ingrese su edad"));


while (edad > 120 || edad <= 0) {
    window.alert("Edad incorecta");
    edad = parseInt(prompt("Ingrese su edad"));
}

mensaje="Edad para categoría ";
switch (edad) {
    case 
}