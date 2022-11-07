var parrafo = new Array("Hay", 3, "elementos", "importantes", "en", 1, "cocina");

function mostrarNros(arreglo) {
    console.log(arreglo);
    //RRECORRIDO TRADICIONAL
    for (i = 0; i < arreglo.length; i++) {
        if (!isNaN(arreglo[i])) {
            console.log(arreglo[i]);
        }
    }
    //RRECORRIDO CON metodop del array 
    arreglo.forEach(palabra => {
        if(!isNaN(palabra)) {
            console.log(palabra);
        }
    });
}

mostrarNros(parrafo);
var elem=prompt("del arreglo ***"+parrafo+"***,que elemento quiere borrar");
var cant=prompt("cuantos elementos quierre borrarr");
parrafo.splice(elem,1);
alert("resultado: ***"+parrafo+"***");