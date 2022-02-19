/* querySelector */

/* const Heading = document.querySelector('.header__texto h2');/*querySelector() retorna 0 o un elementos del html*/
/* Heading.classList.add(nueva-clase); */
/* Heading.textContent = 'Nuevo Heading'; */
/* QuerySelectorAll */

/* const enlaces = document.querySelectorAll('.navegacion a');

console.log(enlaces[1]);
enlaces[1].textContent = 'Nuevo Texto para enlace';
enlaces[1].classList.add('nueva-clase');
enlaces[1].classList.remove('navegacion__enlace'); */
/* GetElementByid */

/* manera vieja de seleccionar elementos en el html */

const heading2 = document.getElementById('heading');

/* Como generar codigo a  HTML*/
/* generamos nuevo enlace desde JS */

const nuevoEnlace = document.createElement('A');

/* Agregamos un HREF al nuevo enlace */
/* nuevoEnlace.href = 'nuevo-enlace.html'; */

/* Agregamos un texto al nuevo enlace */
/* nuevoEnlace.textContent = "Tienda Virtual"; */

/* Agregamos una clase al nuevo enlace */

/* nuevoEnlace.classList.add('navegacion__enlace'); */

/* Agregarlo al Documento HTML */

/* const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); *//* con appendChild podemos agregar una variable e insertarla en otro lugar del documento HTML */

/* Eventos en JAVASCRIPT */

console.log(1);

window.addEventListener('load', imprimir()); /* load espera a que el JS y los archivos que dependen del HTML 
    esten listos incluye imagenes y hojas de estilos*/

/* manera diferente de hacerlo */
window.onload = function () {
    console.log(4);
};

document.addEventListener('DOMContentLoaded', function () { /* Solo espera a que se descargue el HTML, no espera imagenes ni hojas de estilo */
    console.log(3);
});

console.log(5);

function imprimir() {
    console.log(2);
}

window.onscroll = function () {
    console.log('Scrolling...');
}


/* Seleccionar elementos y asociarles un evento */

const btnEnviar = document.querySelector('.boton--primario');

/* btnEnviar.addEventListener('click', function (e) {
    console.log(e);
    e.preventDefault();
    /*preventDefault() es especialmente util para un formulario previniendo que se cargue la pagina para poder ver en consola todo lo que sucede*/
//console.log('enviando Formulario...');
//}); 


/* Eventos cuando se escribe en formularios */
/* Eventos de los inputs y TextArea */

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

/* manera de estructurar el documento js\

    primero las variables,
    luego los eventos
    y luego las funciones
    */

const nombreFormulario = document.querySelector('#nombre');
const emailFormulario = document.querySelector('#email');
const mensajeFormulario = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

/* con el evento 'change' nos damos cuenta si en el campo hay texto */
/* con el evento 'input' nos damos cuenta lo que se escribe en el input */
nombreFormulario.addEventListener('input', leerTexto);
emailFormulario.addEventListener('input', leerTexto);
mensajeFormulario.addEventListener('input', leerTexto);



/* Evento submit en formularios */
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Validar el Formulario */

    /* vamos a extraer los valores de ese objeto utilizando la tecnica destructuring
    destructuring permite extraer los valores de un objeto de un arreglo pero tambien crear las variables
    todo en un mismo paso  
    */
    const { nombre, email, mensaje } = datos;

    if (nombre == '' || email == '' || mensaje == '') {
        mostrarAlerta('Todos los campos son obligatorios',true);
        return; /* Esto lo que hace es cortar la ejecucion del codigo */
    } 
    /* Enviar el formulario */

    mostrarAlerta('Se envio con Exito');

    console.log('Enviando Formulario');
});


/* Aqui refactorizamos las 2 funciones por una sola */
function mostrarAlerta(mensaje,error= null){
const alerta = document.createElement('p');/* Creamos el elemento html */
alerta.textContent = mensaje;/* aqui le pasamos el contenido que queremos mostrar a ese elemento */

if(error){/* Entonces si error es verdadero */

    alerta.classList.add('error');/* Creamos una clase CSS para darle un diseño */
}else{
    alerta.classList.add('enviado');/* Creamos una clase CSS para darle un diseño */
}

formulario.appendChild(alerta);/* aqui lo agregamos al HTML */
setTimeout(() => {
    enviado.remove();/* para desaparecer un objeto HTML*/
}, 5000);
}





function leerTexto(e) {
    /*  console.log(e.target.value); */
    datos[e.target.id] = e.target.value;

    console.log(datos);

}







