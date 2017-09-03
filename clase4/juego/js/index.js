//LOS JUGADORES
function CreaJugadores(nombre, vida, golpe, turno){
	this.elnombre = nombre
	this.lavida = vida
	this.elgolpe = golpe
	this.elturno = turno
}

var jug1 = new CreaJugadores("juan", 300, 5, true)
var jug2 = new CreaJugadores("pedro", 150, 10, false)


//LA FUNCIÓN DE ATAQUE
var accionGolpear = function(vidaOp, golpeAtac){
	var resto = 
	console.log()
	return vidaOp - golpeAtac
}


//LOS TURNOS

if(jug1.elturno === true){
	jug2.vida = accionGolpear(jug2.vida, jug1.)	
}







/*-
//LOS ATAQUES
var vidaRestanteJug2 = function ataque(vida2, golpe1){
	return vida2 - golpe1
}
var vidaRestanteJug1 = function ataque(vida1, golpe2){
	return vida1 - golpe2
}-*/

//console.log(vidaRestanteJug1(jug2.lavida, jug1.elgolpe))
//console.log(vidaRestanteJug2(jug1.lavida, jug2.elgolpe))




do{
	console.log(vidaRestanteJug2(jug2.lavida, jug1.elgolpe))
	console.log(vidaRestanteJug1(jug1.lavida, jug2.elgolpe))
	break
}
while(jug1.lavida > 145 || jug2.lavida > 145)


