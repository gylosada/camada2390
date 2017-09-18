//// array de pelis subidas
var peliculasSubidas = []

//// constructor de películas
function ConstructorPelis(elTitulo, elId){
	this.titulo = elTitulo
	this.id = elId
}

//// peliculas ya creadas
var peli1 = new ConstructorPelis("Gran Pez", 1)
var peli2 = new ConstructorPelis("Spiderman", 2)
var peli3 = new ConstructorPelis("Gran Torino", 3)
var peli4 = new ConstructorPelis("Rocky", 4)
var peli5 = new ConstructorPelis("Star Wars", 5)

//// Películas en el array
peliculasSubidas.push(peli3, peli2, peli1, peli5, peli4)


//// Nueva pelicula a subir
var peli6 = new ConstructorPelis("Harry Potter", 6)


//// Subo y chequeo la película
var subidorPelis = function (pelicula){
	var peliRepetida = false
	for(i=0; i < peliculasSubidas.length ; i++ ){
		if(peliculasSubidas[i].id === pelicula.id){
			var peliRepetida = true
		}
	}
	if (peliRepetida === false){
		peliculasSubidas.push(pelicula)
		console.log("Se subió la película " + pelicula.titulo)
	}else{
		console.log("Esta película ya está subida")
	}
}




//// ordeno las películas





//// elimino pelicula por ID
var eliminarPeli = function (id){
	var indexAEliminar = -1
	for(i=0; i<peliculasSubidas.length; i++){
		if(peliculasSubidas[i].id === id){
			indexAEliminar = i
		}
	}
	if(indexAEliminar>=0){
		console.log("Se ha eliminado " + peliculasSubidas[indexAEliminar].titulo)
		peliculasSubidas.splice(indexAEliminar, 1)
	} else{
		console.log("Esa película no está ingresada")
	}
}

//eliminarPeli(2)