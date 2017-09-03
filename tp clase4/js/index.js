//// CONSTRUCTOR DE PELÍCULAS
function CreadorPeliculas(idPeli, tituloPeli, descPeli, añoPeli, durPeli, actPeli, direcPeli){
	this.nId = idPeli
	this.titulo = tituloPeli
	this.descripcion = descPeli
	this.año = añoPeli
	this.duracion = durPeli
	this.actor = [actPeli]
	this.director = direcPeli
}

//// INGRESO DE DATOS
var tituloUsuario = prompt("Ingrese un titulo", "El Gran Pez")
var descUsuario = prompt("Ingrese una descripción", "Un hombre que posee una asombrosa capacidad para relatar")
var añoUsuario = prompt("Ingrese el año de estreno", "2003")
var duracionUsuario = prompt("Ingrese la duración", "126min")
var directorUsuario = prompt("Ingrese un director", "Tim Burton")
var actorUsuario = prompt("Ingrese un actor", "Ewan Mcgregor") 


//// CREACION DE PELICULA NUEVA
var peliculaNueva = new CreadorPeliculas(Math.round(Math.random()*1000), tituloUsuario, descUsuario, añoUsuario, duracionUsuario, actorUsuario, directorUsuario)

//// EDITO MÁS ACTORES
peliculaNueva.actor.push(prompt("Ingrese otro actor", " Albert Finney"))
peliculaNueva.actor.push(prompt("Ingrese otro actor más", " Helena Bonham Carter"))

//// MUESTRO LA INFO
console.log("ID: "+ peliculaNueva.nId +" | Título: " + peliculaNueva.titulo + " | Año: " + peliculaNueva.año + " | Duración: " + peliculaNueva.duracion + " | Director: " + peliculaNueva.director + " | Actores: " + peliculaNueva.actor + " | Sinopsis: " + peliculaNueva.descripcion)
