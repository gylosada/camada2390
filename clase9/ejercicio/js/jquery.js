//Crear una variable llamada *texto* con el siguiente string

var $('textoIngresado') = $("input[name=texto]")


var contarLetras = function(textoIng){
	var cantCaract = textoIng.toString().length()
	return(cantCaract)
	console.log(cantCaract)
}

var corregirTexto = function(textoIng){
	var textoMayus = textoIng.toUppercase()
	return(textoMayus)
	console.log("El texto fue corregido")
}


$("input[name=btn]").on("click", function(){
	contarLetras($("textoIngresado"))
	corregirTexto($("textoIngresado"))
	
	$("#ponerTxt").text("Acá irían los resultados")
	event.preventDefault();
})

