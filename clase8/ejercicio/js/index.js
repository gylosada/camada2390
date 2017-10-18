
//contar espacios y puntos > cantidadEspaciosPuntos

//contar letras > cantidadLetras



//// crear texto
var texto = "lorem ipsum dolor sit amet, consectetur adipiscing elit.morbi vel gravida diam, ultricies interdum libero.etiam tempor, nunc eu dignissim rutrum, erat enim blandit magna, ut pretium risus nulla a sem.sed ut augue est.quisque pellentesque condimentum ligula vulputate tempus.curabitur non ex vitae urna vehicula gravida sit amet sit amet quam.phasellus et scelerisque sapien.donec finibus ac odio ac consectetur.integer ligula eros, posuere ac mauris non, pretium euismod elit.fusce porttitor sem quis neque varius ultricies.sed elementum blandit faucibus.donec nisi est, tempor eu neque eget, tempus dignissim libero.ut porttitor sapien eget placerat tristique.ut lacus sem, pulvinar et accumsan vitae, tristique quis sem.lorem ipsum dolor sit amet, consectetur adipiscing elit.nulla facilisi.suspendisse feugiat tempus lectus, ut venenatis lacus.sed et urna purus.morbi tincidunt volutpat consectetur.praesent vel diam efficitur, rhoncus lacus sit amet, feugiat mi.praesent egestas dignissim bibendum.ut congue porta est non maximus.vivamus quis imperdiet risus.cras vitae feugiat leo.fusce bibendum leo eu nisl cursus, quis tempor mi pulvinar.cras vel semper ante.aliquam tristique mauris sit amet viverra hendrerit"


//// cant caracteres
var cantidadCaracteres = texto.length


//// separar por oraciones
///no pude usar el pop() para sacar el último
var arrOraciones = texto.split(".")


//// hacer mayusculas y puntos
var hacerMayusYPuntos = function(oraciones){
	for(i=0; i<arrOraciones.length; i++){
		var mayuscula = arrOraciones[i].substring(0,1).toUpperCase()
		var resto = arrOraciones[i].substring(1).concat(". ")
		arrOraciones[i]=mayuscula.concat(resto)
	}
}

hacerMayusYPuntos(arrOraciones)



//// cantidad de espacios y puntos POR TERMINAR
var textoFinal = arrOraciones.join("")

var cantidadEspaciosPuntos = function(texto){
	for(i=0; i<textoFinal.length; i++){
		var espacios = textoFinal.split(" ")
		var puntos = textoFinal.split(".")
		var comas = textoFinal.split(",")
	}
	//var espaciosYPuntos = (espacios.length-1) + puntos.length
	//console.log(espaciosYPuntos)
	//var letras = textoFinal.length - espacios - puntos - comas
}

cantidadEspaciosPuntos(textoFinal)

//// cantidad letras













/////////// Mostrar Párrafo


var nuevoParrafo = document.createElement("p")
var nuevoTexto = document.createTextNode(texto)

nuevoParrafo.appendChild(nuevoTexto)
document.body.appendChild(nuevoParrafo)


/////////// Mostrar texto modificado
var contenedorTituloParrafo = document.createElement("h2")
var tituloParrafo = document.createTextNode("Párrafo corregido")

contenedorTituloParrafo.appendChild(tituloParrafo)
document.body.appendChild(contenedorTituloParrafo)

var parrafoCorregido = document.createElement("p")
var textoCorregido = document.createTextNode(textoFinal)

parrafoCorregido.appendChild(textoCorregido)
document.body.appendChild(parrafoCorregido)




/////////// Mostrar Cant Caracteres
var contenedorTituloCaracteres = document.createElement("h2")
var tituloCaracteres = document.createTextNode("Cantidad de caracteres: ")

contenedorTituloCaracteres.appendChild(tituloCaracteres)
document.body.appendChild(contenedorTituloCaracteres)


var spanCaracteres = document.createElement("span")
var caracteres = document.createTextNode(cantidadCaracteres)

spanCaracteres.appendChild(caracteres)
document.body.appendChild(spanCaracteres)


/////////// Mostrar Cant Caracteres