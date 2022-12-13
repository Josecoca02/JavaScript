'use strict'

    // Sistema de votaciones.
    // INICIALIZAR LOS CONTADORES DE VOTOS
    var tabla = new Array;
   /*  tabla[0]['juana',0,0];  // una option para inicializar array con jv
    tabla[1]['Julio',0,0]; */

    let candidatos = document.querySelector("#candidato");
    candidatos.options.array.forEach(candidatos,i)  {
        tabla[i]=[this.IDBCursorWithValue,0,0];
    }


    //FUNCIONALIDA DEL BOTON EMITIR EL VOTO
    var votar= document.getElementById('votar');
    votar.addEventListener('click',()=>{
        let. canditado = document.querySelector("#candidato");
        console.log('candidato: '+canditado.options.selectedIndex);
        let indice=canditado.options..selectedIndex
    } 