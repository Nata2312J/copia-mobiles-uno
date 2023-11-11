let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

/*
Validaciones front 
Listeners 
Eventos 

VALIDACIONES 
Confirmacion de datos 
  front->Representacion grafica 
     Expresiones regulares :
  Back-> Representacion logica 
  Datos->Representacion de bases de datos 

  Ciclos de repeticion 
  map -> Metodo que recorre un arreglo y retorna un nuevo arreglo
  forEach -> Metodo que recorre un arreglo 
  for of ->Metodo que recorre un arreglo 
  for
  NO malo , no me manosees ,cochino , lindo feo . 

  FUNCION ANONIMA(Funcion sin nombre) 
  Solo se ejecuta donde fue definida 
  Puede ser una funcion regular o funcion flecha 

 */
let campos=document.querySelectorAll('input'); 
campos.forEach((campo)=>{
campo.addEventListener('keyup',validarCampos)
})
function validarCampos(e){
    // if(e.target.value==f){
    //     console.log("Nada");
    // }
    switch(e.target.name){
        case 'usuario': 
        if(usuario.test(e.target.value)){
            document.getElementById('usuario').classList.add('correcto');  
            document.getElementById('usuario').classList.remove('incorrecto'); 
        }else{
            document.getElementById('usuario').classList.add('incorrecto'); 
            document.getElementById('usuario').classList.remove('correcto'); 
        }
        break; 
        case 'contraseña': 
        if(contraseña.test(e.traget.value)){
            document.getElementById('contraseña').classList.add('correcto');  
            document.getElementById('contraseña').classList.remove('incorrecto'); 
        }else{
            document.getElementById('contraseña').classList.add('incorrecto'); 
            document.getElementById('contraseña').classList.remove('correcto'); 
        }
        break; 
        case 'correo': 
        if(correo.test(e.traget.value)){
            document.getElementById('correo').classList.add('correcto');  
            document.getElementById('correo').classList.remove('incorrecto'); 
        }else{
            document.getElementById('correo').classList.add('incorrecto'); 
            document.getElementById('correo').classList.remove('correcto'); 
        }
        default: 
        break; 

    }
     
}
// let numeros=[1,2,3,4]
// let letras=['A','B','C']
// let suma=[...numeros,...letras]
// console.log(suma); 






