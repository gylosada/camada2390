//var imdb = (function(){

	//// constructor de pelis
	function ConstructorPelis(elTitulo, elId){
		this.titulo = elTitulo
		this.id = elId
	}
	
	//// creación de pelis
	var peli1 = new ConstructorPelis("Gran Pez", 1)
	var peli2 = new ConstructorPelis("Spiderman", 2)
	var peli3 = new ConstructorPelis("Gran Torino", 3)
	var peli4 = new ConstructorPelis("Rocky", 4)
	var peli5 = new ConstructorPelis("Star Wars", 5)
	
	//// array de pelis
	var peliculasSubidas = []

	//// subo las pelis al array
	var peliculasSubidas.push(peli3, peli2, peli1, peli5, peli4)

//})();

