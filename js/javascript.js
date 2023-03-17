function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2023 - fecha;

  var bienvenida = document.querySelector("#bienvenida");

  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida 

  var mensajeFormulario;
  var mensaje;

  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad

  if (edad > 30) {
    mensajeFormulario = " y te llaman maduro";
  }  else if (edad < 30) {
    mensajeFormulario = " ya queda menos";
  } else {
    mensajeFormulario = " ¡Trapella!"; 
  }

  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene

  if (nombre == ""){
    alert("Introduce tu nombre")
    return false;
  }
  if (fecha == ""){
    alert("Introduce tu año de nacimiento")
    return false;
  }


  // EJERCICIO: Realiza la composició del mensaje final y cárgalo
  // en la variable que hayas preparado

  mensaje = 
    "<p> Hola, " +
    nombre +
    ", tienes " +
    edad +
    " años" +
    mensajeFormulario +
    "</p>";

  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida

  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
