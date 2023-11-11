// //Condicional simple 
// if(true){
//     console.log("Esto es verdadero");
// }
// if(5>1){
//     console.log("Es verdadero"); 
// }
// //Condicional simple 
// var edad=Number(prompt("Somos novios?"))
// if(edad==1){
//     console.log("Te amo");
// }else{
//     console.log("Te odio")
// }

// //Definiendo datos de entrada
// var horas=Number(prompt("Ingrese la cantidad de horas trabajadas: "));
// var valorHoras=Number(prompt("Ingrese el valor de la hora: "));

// //Definiendo datos de proceso
// if(horas>96){
//     var horasExtra=horas-96; 
// }else{
//     horasExtra=0; 
// }
// var valorHorasExtra=horasExtra*valorHoras*0.25; 
// var salarioOrdinario=valorHoras*(horas-96); 
// var salarioEmpleado=(valorHoras*horas)+horasExtra; 
// //Definiendo datos de salida
// console.log(salarioEmpleado)

//Condicional anidado

// var usuario=prompt("Ingrese su usuario"); 
// var contraseña=prompt("Ingrese su contraseña")



// if(usuario=="Jaime" ){
//      if(contraseña=="123"){
//         console.log("Inicó sesion correctamente");}
//         else{
//             console.log("Error en la contraseña")
//         }
//      }else{
//      console.log("Error en el usuario");
//      }

//   var edad=Number(prompt("Ingrese su edad")) 
  
//   if(edad<5){
//     console.log("Usted pertenece a primera infancia")
//   } else if( edad<11){
//     console.log("Usted pertenece a la infancia")
//   }else if( edad<18){
//     console.log("Usted pertenece a la adolescencia")
//   }else if( edad<27){
//   console.log("Usted pertenece a la juventud")
//   }else {
//     console.log("Usted pertenece a la tercera edad")
//   }



// var edad=prompt("Ingrese su edad");
// var imc=0;
// if(edad>=19 && edad<=45){
//     var peso=Number(prompt("Ingrese su peso: "));
//     var altura=Number(prompt("Ingrese su altura"));
//    imc=peso/(altura*altura);
//     console.log("Su indice de masa corporal es de " + imc);

// }else{
//     console.log("Edad invalida");
// }


var parcial=Number(prompt("Ingrese la nota de su parcial")); 
var final=Number(prompt("Ingrese la nota final"))
var tallerUno=Number(prompt("Ingrese la nota del taller 1")); 
var tallerDos=Number(prompt("Ingrese la nota del taller 2 ")); 
var promedioTaller=(tallerUno+tallerDos)/2;
var promUno=parcial*0.40;
var promDos=final*0.40; 
var promTres=promedioTaller*0.20; 
var total=(promUno+promDos+promTres); 

if(total>=3.5){
    console.log("El estudiante ha aprobado con una nota de: " + total)
}else{
    console.log("El estudiante no logró aprobar :(")
}
