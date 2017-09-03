var diassemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

var diausuario = toLowerCase.prompt()


switch(diassemana = diausuario){
	case 0: diassemana[0]
	case 1: diassemana[1]
	case 2: diassemana[2]
	case 3: diassemana[3]
	case 4: diassemana[4]
	break
	case 5:
		console.log("Sábado")
	case 6:
		console.log("Domingo")
	default:
		console.log("no es un dia de semana")

}

/*-
while(diassemana[0] <= 4){
	diassemana++
	console.log("hoy es" + diassemana)
}-*/






//toLowerCase.prompt()