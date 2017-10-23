/**
 En este caso, recibiras una llamada de regreso cuando se hallan recibido los datos, lo cual permite al navegador continuar trabajando con normalidad mientras se maneja tu solicitud.
 */

 let reqAsinc = new XMLHttpRequest()

  //Iniciamos una solicitud con el tipo de peticion GET y le indicamos el segundo parametro TRUE para indicar que es asincrona

 reqAsinc.open('GET', 'https://swapi.co/api/people/', true)

 // Creamos un metodo para manejar los eventos y quedamos a la espera de una respuesta que depende del ReadyState

 reqAsinc.onreadystatechange = function (event) {
     if(reqAsinc.readyState === 4){
         if (reqAsinc.status === 200) {
             console.log(reqAsinc.responseText)
         }else{
             console.log('error ', reqAsinc.status)
         }
     }
 }

// El valor de reqAsinc.readyState puede ser de 0 a 4:
/**
 * 0 no se llamo al metodo open()
 * 1 no se llamo al metodo send()
 * 2 se ejecuto send
 * 3 descargando reqAsinc.responseText (informacion parcial)
 * 4 se termino la operacion
 */
 reqAsinc.send(null)