'use strict'

let nombres = new Array; // valores originales
let nombresC = new Array; // valores purificados
let ordenados = new Array; // valores ordenados

// creamos la lista de nombres originales
for (let i=0;i<4;i++) {
       
    nombres[i] = prompt('nombre '+(i+1)+' de 5: ?');
    nombresC[i]=nombres[i].toUpperCase();
}

var posicion;


// ordenamos con una sola pasada
// generando el array ordenados

for (nombre in nombresC) {
    // en nombre tenemos el elemnto original
    // buscamos en qué posición insertalo
    posicion = 0;
    while ((posicion < ordenados.length)&&(nombre<ordenados[posicion])) {
        posicion++;

    }
    ordenados.splice(posicion,0,nombre);


}

// mostramos el resultado por consola
console.log('array ordenado: '+ordenados);


