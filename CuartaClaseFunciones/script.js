//FUNCIONES
//Agrupacion de codigo

// Funcion regular
// Primera aplicacion de funciones de javascript
// Funcion fecha
// En la version ExmasScript 6+
// Funcion anonima
// En la version ExmasScript 6+

// // Sintaxis de una funcion regular (POO, para programacion orientada a objetos-This)
// function nombreFuncion(){

// }
// function-Palabra reservada del lenguaje

// 1-la definicion o construccion de la funcion , encapsulacion del codigo
// 2-llamado de la funcion

// function calcularSuma(){
//     console.log(25+25);
// }
// calcularSuma();

// function calcularSalario(){
//     let valorHora=Number(prompt("Ingrese el valor de la hora: "));
//     let cantidadHoras=Number(prompt("Ingrese la cantidad de horas: "));
//     let salario=valorHora*cantidadHoras;
//     console.log(salario)
// }

// //Para repetir varias veces una funcion
// for(let i=0; i<5;i++){
//     calcularSalario();
// }

// for(let i=0; i<10;i++){
//     calcularSalario();
// }

function sumar(numeroUno, numeroDos) {//Parametros de una funcion 
  console.log(numeroUno + numeroDos);
}
function restar(numeroUno, numeroDos) {
  console.log(numeroUno - numeroDos);
}
function dividir(numeroUno, numeroDos) {
  if (numeroDos > 0) {
    console.log(numeroUno / numeroDos);
  } else console.log("No se puede dividir por cero");
}
function multiplicar(numeroUno, numeroDos) {
  console.log(numeroUno * numeroDos);
}

let repetir = true;
let opcion;
while (repetir) {
    let numeroUno = Number(prompt("Ingrese un numero: "));
    let numeroDos = Number(prompt("Ingrese un numero: "));

  opcion = Number(
    prompt(
      "Seleccione: \n1-Sumar \n2-Restar \n3-Multiplicar \n4-Dividir \n5-Todas \n6-Salir"
    )
  );
  switch (opcion) {
    case 1:
      sumar(numeroUno, numeroDos);//Argumentos de la funcion. 
      break;
    case 2:
      restar(numeroUno, numeroDos);
      break;
    case 3:
      multiplicar(numeroUno, numeroDos);
      break;
    case 4:
      dividir(numeroUno, numeroDos);
      break;
    case 5:
      sumar(numeroUno, numeroDos);
      restar(numeroUno, numeroDos);
      multiplicar(numeroUno, numeroDos);
      dividir(numeroUno, numeroDos);
      break;
    case 6:
      repetir = false;
      break;

    default:
      console.log("Ingrese un numero de opcion valido");
  }
}

//Funciones trabajan con parametros y argumentos.
// Argumentos los ingreso al LLAMADO DE LA FUNCION 
// los parametros en el desarrollo de las funciones.



//FUNCIONES CON RETORNO 
//extraer un VALOR de una funcion para ser usado por fuera de la funcion. 
//No hay alcance de variables que aplique en este caso 
// Debo usar return(NOMBRE DE LA FUNCION). 
//NO puedo sacar variables especificas, solo el entero a no ser de realizar lo siguiente: 

// function mostrarNombre(){
//     var nombreCompleto="jaime Zapata";
//     var edad=1; 
//     var profesion=Desarrollador; 
//     return nombreCompleto;
// }
// console.log(mostrarNombre()); 
//Las funciones deben ser cortas y precisas  
// function calcularHorasExtra(cantidadHoras){
//     let horasExtra=0; 
//     if(cantidadHoras>=96){
//         horasExtra=cantidadHoras-96;
//     }else{
//         return horasExtra; 
//     }
//     return horasExtra;
// }

// function calcularSalarioEmpleado(cantidadHoras,valorHoras,calcularHorasExtra){
//  console.log((cantidadHoras-cantidadHorasExtra)*valorHoras)+
            
//  +(valorHoras*cantidadHorasExtra*0.25);
// }

// let cantidadHoras=Number(prompt("Ingrese la cantidad de horas laboradas: "))
// let valorHoras=Number(prompt("Ingrese la cantidad de horas : "))
// let cantidadHorasExtra=calcularHorasExtra(cantidadHoras);
// calcularSalarioEmpleado(cantidadHoras,valorHoras,calcularHorasExtra); 
// calcularHorasExtra(cantidadHoras); 





//FUNCIONES FLECHA(Para los objetos literales-that)
const funcionFlecha=()=>{
    console.log("esto es una funcion flecha")
}
funcionFlecha(); 
//Funcionan de la misma manera que las regulares 
