'use strict'

let nombres = new Array; // valores originales

nombres[0] = prompt("primer nombre: ?");
nombres[1] = prompt ("segundo nombre: ?");
nombres[2] = prompt ("tercer  nombre: ?");
nombres[3] = prompt ("cuarto  nombre: ?");


let nombresC = new Array; // valores purificados

var auxiliar;

for (let i=0;i<nombres.length;i++) {
    nombresC[i]=nombres[i].toUpperCase();
}


for (let tope=nombres.length;tope>=0;tope--) { 
    for (let indice=tope;indice>=0;indice--) {
        if (nombres[indice]>nombres[indice+1]) {
            auxiliar = nombres[indice];
            nombres[indice]=nombres[indice+1];
            nombres[indice+1]=auxiliar;
        }
    }
}

console.log('array ordenado: '+nombres);


