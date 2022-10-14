//forma tradicional 
//var colores = ["red", "blue", "yellow"];

 // forma objetos
 var colores1 = new Array("red", "blue","yellow");

 console.log('Elemento yellow está en la posicion'+colores.indexOf+("yelow")+'del array');

 var nuevocolor = prompt ("añada un color al arrya");
 colores.push(nuevocolor);
 console.log('el elemento esta en la posicion '+colores.indexOf+(nuevocolor)+'del arrayy');

 var nuevocolor2 = prompt ("añada un color al arrya");
 colores.unshift(nuevocolor2);
 console.log('el elemento esta en la posicion '+colores.indexOf+(nuevocolor2)+'del arrayy');

