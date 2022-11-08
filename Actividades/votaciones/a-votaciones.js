'use strict';

// sistema de votaciones
var votosJuana=0;
 var votosJulio=0;
 textocontador=0;

var juana = document.querySelector("#juana");

var julio = document.querySelector("#julio");

juana.addEventListener("click",contarVotosJuana,false);

function contarVotosJuana() {
    votosJuana++;
    console.log('juana ya tiene '+votosJuana+' votos.');
}

julio.addEventListener("click",contarVotosJulio,false);

function contarVotosJulio() {
    votosJulio++;
    console.log('julio ya tiene '+votosJulio+' votos.');
}

function escribrirTitulo () {
    var t=document.createElement("h2"); // CREAMOS EL TITULO
    t.append("VOTACIONES"); // LO RELLENAMOS
    document.getElementById("mensaje").appendChild(t); // lo colgamaos al DIV 

}


function  escribirTextoTotales() {
    textocontador="Hasta ahora , JUANA tiene "+votosJuana+" votos y Julio tiene " +votosJulio+" ";
    var p=document.createElement("p");
    t.append(textocontador);
    document.getElementById("mensaje").appendChild(p);

    }

    function borrarTextoTotales() {
        if (document.getElementById("mensaje").childNodes[1]!="undefined") {
            document.getElementById("mensaje");
        }
    }



























