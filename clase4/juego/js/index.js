//// CONSTRUCTOR DE JUGADORES
function CreaJugadores (elnombre,lavida,elgolpe,elturno){
	this.nombre = elnombre
	this.vida = lavida
	this.golpe = elgolpe
	this.turno = elturno
}


//// NOMBRE DE JUGADOR (por usuario)
var nombreUsuario1 = prompt("Ingrese el nombre de su personaje", "Deadpool")
var nombrePC= "Stan Lee"


//// CREACIÓN DE JUGADORES
var jugUsuario = new CreaJugadores(nombreUsuario1, 200, 10, true)
var jugPC = new CreaJugadores(nombrePC, 200, 10, false)





//// ATAQUES

var accionGolpear = function(vidaOponente, golpe){
	
}


//// GOLPES JUGADORES
//var golpeRandom = Math.round(Math.random()*100)
//var golpeFuerte = Math.round(Math.random()*100)



//// ATAQUE DE JUGADORES




//// RESULTADO PELEA
















/*-
var tipoDeGolpe = Number(prompt("Elija el tipo de golpe: RÁPIDO, CURVO, o MIXTO", "MIXTO")).toLowerCase()

switch (tipoDeGolpeo){
	case "rápido" :
		Math.round(Math.random()*10);
		break
	case "curvo" :
		Math.round(Math.random()*50);
		break
	case "mixto" :
		Math.round(Math.random()*100);
		break
}
-*/

