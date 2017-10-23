/*
XMLHttpRequest es un objeto JavaScript que fue diseñado por Microsoft y adoptado por Mozilla, Apple y Google. Actualmente es un estándar de la W3C. Proporciona una forma fácil de obtener información de una URL sin tener que recargar la página completa. Una página web puede actualizar sólo una parte de la página sin interrumpir lo que el usuario está haciendo. XMLHttpRequest es ampliamente usado en la programación AJAX.
 */

 // Creamos instancia de XMLHttpRequest

 var req = new XMLHttpRequest()

 // Podemos realizar una solicitud Síncrona o Asíncrona

 /*
 Nota: No deberias usar XMLHttpRequests síncronas porque, dada la naturaleza inerentemente asíncrona de las redes, hay multiples formas en que la memoria y eventos se puedan perder usando solicitudes síncronas.
 */

 //Iniciamos una solicitud con el tipo de peticion GET y le indicamos el segundo parametro FALSE para indicar que es sincrona
 req.open('GET', 'https://swapi.co/api/people/1/', false)

 // Enviamos la solicitud con el parametro NULL indicando que no tiene contenido a enviar
 req.send(null)

 debugger
 //Verificamos que la respuesta de STATUS sea OK (codigo 200) y utilizamos el contenido de la respuesta
 if (req.status == 200) {
     console.log(req.responseText)
 }else if( req.status == 404){
     console.log('tenemos un error')
 }