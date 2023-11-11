//ESTRUCTURAS DE DATOS 
//Se dividen en objetos y arreglos 
/* 
Estructura que permite agrupar contenido de un mismo tipo (elemento)
Algo que se puede describir 
POO-Programacion orientada a objetos 
Paradigma que permite traer la vida real al codigo 

Clases - Objetos 
objeto=atributos,un valor para ese atributo.
*/

//Crear un objeto literal 
// for(let i=0; i<5; i++){
// let persona = {
//     nombre:prompt("Ingrese un nombre: "),
//     edad:+(prompt("Ingrese una edad: ")),
//     profesion:prompt("Ingrese una profesion: "),
//     caminar: function(){//METODO DEL OBJETO
//         console.log("Caminando...")
//     },
//     correr:()=>{
//         console.log("Corriendo...")
//     },
// }; 
// console.log(persona); 
// }
// console.log(persona.nombre)
// console.log(persona.caminar())
// console.log(persona.correr())

/*
ARREGLOS 
Espacio en memoria que permite almacenar informacion variada. 
Arrays o vectores , arreglos unidimensionales 
1-Tamaño -> la cantidad de elementos que tiene el arreglo expresado en n 
2-Posicion -> expresado segun el tamaño menos un elemento n-1
*/
// let personas=[1,2,true,'Jaime',function(){},{},[]]
// // console.log(personas); 
// // console.log(personas[3]);
// for(let i=0; i<7;i++){
//     console.log(personas[i]);
// }

//SIMULACION A BASE DE DATOS 
// let personas=[]; 
// let persona={}; 
// let repetir=true; 
// let opcion; 
// while(repetir){
//    opcion=+(prompt("Seleccione: \n1-Registrar \n2-Salir")); 
//    personas.push(persona); 
//    switch(opcion){
//     case 1: 
//     persona={
//     nombre:prompt("Ingrese su nombre: "),
//     edad:prompt("Ingrese su edad: ")
//     }
//     break; 
//     case 2: 
//     repetir=false; 
//     break; 
//     default:
//         console.log("Ingrese valor valido")
//    }
  
// }
// console.log(personas); 

//EJERCICIO EN CLASE 

let salarios=[]; 
let salario={}
let repetir=true; 
let opcion; 
let promedio; 
let salPer=0;
let suma=0;
while(repetir){
opcion=Number(prompt("Ingrese la opcion que desea realizar: \n1-Ingresar salario \n2-Salir " )); 
salarios.push(salario);
   switch(opcion){
    case 1:
   salario={
     salPer:Number(prompt("Ingrese su salario: ")),
     
   }
   suma=Per+salPer,
     promedio=(suma)/Array.length,
     console.log(promedio);
   console.log(salario.promedio);
    break;
    case 2: 
    repetir=false;
    break;

    default: 
    console.log("Ingrese un valor valido");
}
    
}
console.log(salario)



