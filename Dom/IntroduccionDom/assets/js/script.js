/*DOM (Document object model)Modelo de objetos del documento 

Selectores de javascript 
-getElement 
nombre 
.clase
#id


-querySelector
nombre 
.clase
#id
*/

//EJEMPLO UNO 
// let parrafo= document.getElementsByTagName('p'); 
// console.log(parrafo[0]); 
// console.log(parrafo[1]); 

//Seleccion por clase
// let parrafo = document.getElementsByClassName("parrafo"); 
// console.log(parrafo); 

//Seleccion por id 

// let parrafo= document.getElementById("parrafo"); 
// console.log(parrafo); 
// if(false) {
//     parrafo.textContent='Parrafo desde javscript';
// }
// let parrafo2=document.getElementById("parrafo2"); 
// console.log(parrafo2); 

//TEXT COTENT Es la propiedad que permite manipular el contenido visible para el cliente en TODAS las etiquetas de tipo texto (parrafos, enlaces,contenedores..etc menos los input)
//VALUE es la propiedad que permite manipular el contenido visible a TODOS los input 

function agregarInformacion(){
    let nombre=document.getElementById('inputUno')
    let profesion=document.getElementById('inputDos')
    let informacion=document.getElementById('informacion');  
    informacion.textContent=nombre.value+profesion.value; 
} 

function limpiar(){
    let nombre=document.getElementById('inputUno')
    let profesion=document.getElementById('inputDos')
    let informacion=document.getElementById('informacion');  
    informacion.textContent=null; 
    nombre.value=null;
    profesion.value=null; 

}
