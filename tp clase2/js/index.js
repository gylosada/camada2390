var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sábado", "domingo"]
var diaIngresado = prompt("Ingrese un día", "SÁBADO").toLowerCase()

var queDiaEs = function (listadoDias, dia){
	for (var i=0; i<listadoDias.length; i++){
		console.log(listadoDias[i])
		if (listadoDias[i] === dia){
			if (i <5){
				return "un día hábil"
			} else{
				return "fin de semana"
			}
		}
	}
}

var diaFinal = queDiaEs(semana, diaIngresado)
console.log("hoy es", diaFinal)

