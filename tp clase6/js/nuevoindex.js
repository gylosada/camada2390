/*-El array de peliculas tendra que ser privado del modulo

El modulo tendra que poder agregar una pelicula (ID y titulo)

Validar que la pelicula ingresada no se encuentre y en caso
de encontrarla mostrar un mensaje advirtiendo el error

El modulo tendra que eliminar una pelicula por I

El modulo tendra que ordernar su array de pelicuas en base a una
propiedad enviada por paramentro y mostrarlo en consola

El modulo tendra que persistir el array de peliculas en session o
local storage para que luego se pueda recuperar y seguir agregando o eliminando


función(){
	-var arrayPeliculas
	-agregar pelicula / ID, TITULO // validarla
	-eliminar pelicula (por id)
	-ordernar por parámetro
}
-*/



var agregarPeli = document.getElementById("agregarForm")

var eliminarPeli = document.getElementById("eliminarForm")
	


var moduloIMBD = (function(){

	//// array de pelis subidas
	var arrPelis = []

	//// constructor de películas
	function ConstructorPelis(elTitulo, elId){
		this.titulo = elTitulo
		this.id = elId
	}

	//// peliculas ejemplo ya creadas
	var peli1 = new ConstructorPelis("Gran Pez", 1)
	var peli2 = new ConstructorPelis("Spiderman", 2)
	var peli3 = new ConstructorPelis("Gran Torino", 3)
	var peli4 = new ConstructorPelis("Rocky", 4)
	var peli5 = new ConstructorPelis("Star Wars", 5)

	//// subo pelis ejemplo prearmadas
	arrPelis.push(peli1, peli2, peli3, peli4, peli5)

	//// subo al LS las pelis prearmadas
	for(var i=0; i<arrPelis.length; i++){
		localStorage.setItem(i, JSON.stringify(arrPelis[i]))
	}
	


	//// pido un nuevo titulo y valido si el título existe 
	peliRepetida = true

	while(peliRepetida){
		
		var tituloNuevo = prompt("Ingrese un título", "Rocky")
		var tituloCorrecto = true
		
		for(var i=0; i<arrPelis.length; i++){
			peliLS = JSON.parse(localStorage.getItem(localStorage.key(i)))

			if(tituloNuevo == peliLS.titulo){
				alert("Esa película ya está agregada")
				tituloCorrecto = false
			}
		}
		if(tituloCorrecto){
			peliRepetida = false
		}
	}
	
	var agregarPeli = new ConstructorPelis(tituloNuevo, (arrPelis.length+1))
	arrPelis.push(agregarPeli)
	localStorage.setItem((arrPelis.length), JSON.stringify(arrPelis[i]))

}());


agregarPeli.onsubmit = function(event){

	var peliIngresada = agregarPeli[0].value

	peliRepetida = true

	while(peliRepetida){
		
		var tituloCorrecto = true
		
		for(var i=0; i<arrPelis.length; i++){
			peliLS = JSON.parse(localStorage.getItem(localStorage.key(i)))

			if(peliIngresada == peliLS.titulo){
				alert("Esa película ya está agregada")
				tituloCorrecto = false
			}
		}
		if(tituloCorrecto){
			peliRepetida = false
		}else{
			var tituloNuevo = prompt("Ingrese otro título", "Spiderman")

		}
	}
	
	var agregarPeli = new ConstructorPelis(tituloNuevo, (arrPelis.length+1))
	arrPelis.push(agregarPeli)
	localStorage.setItem((arrPelis.length), JSON.stringify(arrPelis[i]))

	event.preventDefault();

}

eliminarPeli.onsubmit = function(){
	var idIngresado= eliminarPeli[0]

	for(var i=0; i<localStorage.length; i++){

	}
	
	event.preventDefault()

}


















/*-

var ordenarPelis = function(arrAOrdenar){
	arrAOrdenar.sort(function(a,b){
			if(a.id > b.id){
				return 1
			} if(a.id < b.id){
				-1
			} else{
				return 0
			}
		}
	)
	return arrAOrdenar
}
-*/


/*--

//// elimino pelicula por ID
var eliminarPeli = function(idIngresado){
	var peliNoEncontrada = true
	for (i=0; i<peliculasSubidas.length; i++) {
		if(peliculasSubidas[i].id === idIngresado){
			peliNoEncontrada = false
			peliculasSubidas.splice(i, 1)
			console.log("Se eliminó la película " + peliculasSubidas[i].titulo)
		}
	}
	if(peliNoEncontrada){
		console.log("Esa película no está ingresada")
	}
}
//eliminarPeli(2)-*/