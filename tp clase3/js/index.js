//// VALORES INGRESADOS
var primerNumero = Number(prompt("Ingrese el primer número", 20))
var segundoNumero = Number(prompt("Ingrese el segundo número", 2))
var operacionIngresada = prompt("Ingrese una operación","SUMA").toLowerCase()

//// OPERACIONES
var opSuma = function(a, b){
	return a + b
}
var opResta = function(a, b){
	return a - b
}
var opMulti = function(a, b){
	return a * b
}
var opDivi = function(a, b){
	return a / b
}

//// BÚSQUEDA DE LA OPERACIÓN + EJECUCIÓN
switch(operacionIngresada){
	case "suma" :
		console.log(opSuma(primerNumero,segundoNumero));
		break
	case "resta" :
		console.log(opResta(primerNumero,segundoNumero));
		break
	case "multiplicación":
		console.log(opMulti(primerNumero,segundoNumero));
		break
	case "división":
		console.log(opDivi(primerNumero,segundoNumero));
		break			
	default :
		alert("Esa operación no existe");
		break
}
