// mostrar de la api de star wars PERSONAJES(people)
//name, cumpleaños, peliculas, especie,

//separar cada petición y hacer una función que recolecte los resultados
//pedir personaje_name y personaje_birth JUNTOS
//pedir pedir peli
//pedir especie



var pidoPersonaje = function(){
	for (var i = 1; i < 10; i++){ // agregar la verficación de null en última página
		var paginaActual = "https://swapi.co/api/people/?page=" + [i]
		$.ajax({
			url: paginaActual,
			type: "get",
			dataType: "json",
			success: function(info){
				var arrPersonajes = info.results
				for (var valor in arrPersonajes){
					var infoPersonaje = arrPersonajes[valor]
					console.log(infoPersonaje)
					return infoPersonaje
				}
			},
			error: function(info){
				console.log("la api se rompió");
			}
		})
	}
}


var pidoPeli = function (){
	for (var i = 1; i < 10; i++){ // agregar la verficación de null en última página
		var paginaActual = "https://swapi.co/api/people/?page=" + [i]

		$.ajax({
			url: paginaActual,
			type: "get",
			dataType: "json",
			success: function(info){
				var arrPelis = info.results
				for (var valor in arrPelis){
					var infoPelis = arrPelis[valor]
					
					return infoPelis
					console.log(infoPelis)
				}
			},
			error: function(info){
				console.log("algo salió mla")
			}
		})
	}
}();


var muestroTodo = function(personaje,peli){
	/*-var agregarDatosTabla = function(personaje,peli){
		$("#container").append("<tr>"+
		"<td>"+pidoPersonaje(infoPersonaje.name)+"</td>"+
		"<td>"+pidoPersonaje(infoPersonaje.birth_year)+"</td>"+
		"<td>"+pidoPeli(infoPersonaje.films)+"</td>"+
		//"<td>"+infoPersonaje.species+"</td>"+
		"</tr>"
		)
	}();-*/
}();




/*_
var buscoPelis = function(pelis){
	var arrPelis = pelis

	for (var i= 0; i < arrPelis.length; i++){
		$.ajax({
			url: arrPelis[i],
			type: "get",
			dataType: "json",
			success: function(pelis){
				console.log(pelis.title)
				return pelis.title
			},
			error: function(info){
			//	console.log("cargó mal el título")
			}
		})
	}
}
-*/

/*-
var mostrarPersonajes = function(){
	for (var i = 1; i < 10; i++){
		var paginaActual = "https://swapi.co/api/people/?page=" + [i]
		$.ajax({
			url: paginaActual,
			type: "get",
			dataType: "json",
			success: function(info){
				var arrPersonajes = info.results
				for (var valor in arrPersonajes){
					var infoPersonaje = arrPersonajes[valor];
					var agregarDatosTabla = function(){
						$("#container").append("<tr>"+
						"<td>"+infoPersonaje.name+"</td>"+
						"<td>"+infoPersonaje.birth_year+"</td>"+
						"<td>"+buscoPelis(infoPersonaje.films)+"</td>"+
						//"<td>"+infoPersonaje.species+"</td>"+
						"</tr>"
						)
					}();
				}
			},
			error: function(info){
				console.log("salió todo mal");
			}
		})	
	}
}();
-*/

