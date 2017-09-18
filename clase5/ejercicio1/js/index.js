function CreadorAutos (elpeso, lapatente, carga){
	this.peso = elpeso
	this.patente = lapatente
	this.cargaMax = carga
}

//// EL CAMIÓN
var camion = new CreadorAutos(1000,10, 1000)

//// MIS AUTOS CREADOS
var autoNuevo = new CreadorAutos(500,1)
var autoNuevo2 = new CreadorAutos(200,2)
var autoNuevo3 = new CreadorAutos(300,3)

//// ARRAY DE AUTOS A SUMAR 
var autosCreados = [autoNuevo, autoNuevo2, autoNuevo3]

var autosSumar = autosCreados.peso








//// CARGADOR DE AUTOS
var subeAutos = function (espacio, listaPesos){
	for (var i =0; i < camion.cargaMax; i++) {
		console.log("Se subió un auto")
		if(listaPesos < espacio){
			var espacioRestante = espacio - listaPesos
			console.log(espacioRestante)
		} else{
			console.log("No hay espacio")
		}
	}
}

subeAutos(camion.cargaMax, autosCreados.peso)


//camion.cargaMax 

/*-
for () {
	 [i]
}-*/