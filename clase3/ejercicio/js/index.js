////////////////// NOMBRE Y APELLIDO
/*-
var nombre = prompt("Ingrese un nombre") + " "

var apellido = prompt("Ingrese un apellido")

var mostrarnombre = function (a, b){
	console.log(a+b)
	return a + b
}

mostrarnombre(nombre, apellido)
-*/




///////////////////// DÍAS HABILES


var arrayDias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
var diaUsuario= "lunes"

var compararDias = function (listadodias, dia){
	for (var i = 0; i < listadodias.length; i++){
	console.log(listadodias[i])
	} if(listadodias[i] === dia){
		if(i > 4){
			return "es fin de semana"
		} else{
			return "Es día de semana"
		}
	}
}

var respuesta = compararDias(arrayDias, diaUsuario)

console.log("hoy es dia", respuesta)

//bajar archivo de slack