/*
PASOS 
1.Identifique lo que quiere manipular o cmabiar(datos de entrada)
2. Seleccione lo que necesita (selectores de dom:getElement o queryselection) 
Una etiqueta html se convierte en un objeto 
3.Opere con el elemento seleccionado(Logica de programacion datos de proceso)
4.Mostrar el resultado en el html 

Manejo del DOM se realiza eventos: 
Evento es una accion del usuario 
Evento es una funcion 

Eventos: 
-Eventos del mouse: 
  onclick-> Detectar un click y ejecutar la funcion 
  ondblclick->Detecta dos clicks y ejecuta la funcion 
  onmouseenter->Detecta cuando paso el mouse por encima sin presionar 
  onmouseout->Detecta una salida del puntero en el elemento y ejecuta una funcion 
-Eventos del teclado: 

-Eventos del navegador : 

-Eventos del contenido: 

-Eventos del documento : 



*/ 


// function calcularSalario(){
//     let valorHora=document.getElementById('valorHora'); 
//     let cantidadHora=document.getElementById('cantidadHoras'); 
//     let salarios=document.getElementById('salarios'); 
//     let salario=document.createElement("p");//PARA CREAR NUEVO OBJETO 
//     salario.textContent=valorHora.value *cantidadHora.value //SOLO EL VALUE PARA LOS INPUT
//     salarios.append(salario); //Incluir un objeto dentro de otro objeto 
//     if(salario.textContent>=2000000){
//         salario.classList.add('amarillo'); 
//         salario.append(salario)
//     }else{
//         salario.style.color='white';
//         salarios.append(salario)
//     }
// }
function crearColor(){
let sectionUno=document.getElementById('cajasMedianasUno')
let sectionDos=document.getElementById('cajasMedianasDos')
let sectionTres=document.getElementById('cajasMedianasTres')

let colorUno=document.getElementsByClassName('coloresUno')
let colorDos=document.getElementsByClassName('coloresDos')
let colorTres=document.getElementsByClassName('coloresTres')

sectionUno.classList.add(); 
sectionDos.style.backgroundColor=colorDos.value; 
sectionTres.style.backgroundColor=colorTres.value; 

sectionUno.append(colorUno.value)
sectionDos.append(colorDos.value)
sectionTres.append(colorTres.value)
} 
