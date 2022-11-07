'use strict'
// var vale para todo el js y let solo para for o if lo que este
let nombre1 =prompt("primer nombre:?");
let nombre2 = prompt("segundo nombre:?");
let nombre3 = prompt("tercer nombre:?");

let nombre1c = nombre1.toUpperCase;
let nombre2c = nombre2.toUpperCase;
let cadena3c = nombre3.toUpperCase;

 if(nombre1c < nombre2c){
    auxiliar = nombre1c;
    nombre1c = nombre2c;
    nombre2c = auxiliar;
    auxiliar= nombre1;
    nombre1 = nombre2;
    nombre2 = auxiliar;
 }
 if(nombre2c < nombre3c){
    auxiliar = nombre2c;
    nombre2c = nombre3c;
    nombre3c = auxiliar;
    auxiliar= nombre2;
    nombre3 = nombre3;
    nombre2 = auxiliar;
 }
console.log('ordenados de mmayor a menor : '+nombre1+ '-' +nombre2+'-' +nombre3);
