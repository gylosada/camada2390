/////////// LLAMO COSAS DEL HTML

// llamo al id del formulario
var formulario = document.getElementById("formulario")

// llamo al id de eliminar todo
var eliminarTodo = document.getElementById("eliminarTodo")

// llamo al id de ordenar az
var ordenar = document.getElementById("ordenarAZ")

// llamo al id de ordenar az
var ordenarReverse = document.getElementById("ordenarZA")

//llamo al id del formulario buscador y el boton buscar tarea
var buscardor = document.getElementById("buscador")
var buscarTarea = document.getElementById("buscar")

//llamo al id de mostrar todo
var mostrarTodo = document.getElementById("mostrar")

// llamo al div de tareas
var idCajaTareas= document.getElementById("cajaTareas")



// creo el constructor de tareas
var CrearTarea = function(tituloIngresado,descripcionIngresada){
	//this.id = Date.now()
	this.titulo = tituloIngresado
	this.descripcion = descripcionIngresada
	this.estado = false
	this.visible= true
}




////////// funcion que busca por titulo
buscador.onsubmit = function(event){
	
	var busquedaIngresada = buscador[0].value
	var arrTareas = []
	
	// subo el LS al array y voy borrando el LS
	for(var i=0; i < localStorage.length; i){
		arrTareas.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
		localStorage.removeItem(localStorage.key(i))
	}


	// itero comparando busqueda con título
	for(var i=0; i < arrTareas.length; i++){
		//si el dif se oculta
		if(busquedaIngresada !== arrTareas[i].titulo){
			arrTareas[i].visible = false
		}
	}

	//subo array modificado al LS
	var suboAlLocalStorage = function(){
		for(var i=0; i<arrTareas.length; i++){
			//guardar en el localstorage
			localStorage.setItem(Date.now(), JSON.stringify(arrTareas[i]))
		}
	}();

	location.reload();
}


////////// funcion que sube los datos al html
var mostrarTareaHecha = function(){

	for (var i = 0; i < localStorage.length; i++) {

		if (JSON.parse(localStorage.getItem(localStorage.key(i))).visible){
			//creo la tarea formateada
			var tareaFormateada = JSON.parse(localStorage.getItem(localStorage.key(i)))

			// Creo y lleno los espacios para el html
			var cajaTarea = document.createElement("div")
			cajaTarea.setAttribute("id", localStorage.key(i));
			idCajaTareas.appendChild(cajaTarea)

			//https://stackoverflow.com/questions/407048/accessing-variables-from-other-functions-without-using-global-variables

			// llamo al h3 y lo lleno
			var tituloTarea = document.createElement("h3")
			var textoDelTitulo = document.createTextNode(tareaFormateada.titulo)
			tituloTarea.appendChild(textoDelTitulo)
			cajaTarea.appendChild(tituloTarea)

			// llamo al p y lo lleno
			var descripcionTarea = document.createElement("p")
			var descAAgregar= document.createTextNode(tareaFormateada.descripcion)
			descripcionTarea.appendChild(descAAgregar)
			cajaTarea.appendChild(descripcionTarea)
			
			///// Creo y lleno los tres botones
			var linkBorrarTarea = document.createElement("button")
			linkBorrarTarea.setAttribute("id", localStorage.key(i));
			cajaTarea.appendChild(linkBorrarTarea)

			var linkEditarTarea = document.createElement("button")
			linkEditarTarea.setAttribute("id", localStorage.key(i));
			cajaTarea.appendChild(linkEditarTarea)

			var linkEstadoTarea = document.createElement("button")
			linkEstadoTarea.setAttribute("id", localStorage.key(i));
			cajaTarea.appendChild(linkEstadoTarea)


			///// le agrego las clases para ver los íconos
			linkBorrarTarea.classList.add("ion-close-round")
			linkEditarTarea.classList.add("ion-edit")
			linkEstadoTarea.classList.add("ion-checkmark-round")
		

			//les agrego los eventos onclick
			linkBorrarTarea.addEventListener("click", function(){
				localStorage.removeItem(event.currentTarget.id)
				location.reload();
			})

			linkEstadoTarea.addEventListener("click", function(){
				cajaTarea.classList.add("completa")//event.currentTarget.id
			})
		}
	}
}



////////// funcion que ejecuta el formulario de agregar tarea
formulario.onsubmit = function(event){

	// llamó las variables ingresadas en el formulario
	var tituloIngresado= formulario[0].value
	var descripcionIngresada= formulario[1].value

	// funcion que agrega tarea
	var agregarTarea = function(tituloIngresado,descripcionIngresada){
		
		for (var i = 0; i < localStorage.length; i++) {
			var tareaFormateada = JSON.parse(localStorage.getItem(localStorage.key(i)))

			if(tituloIngresado === tareaFormateada.titulo){
				return "ya existo"
			}
		}
		var tareaAgregada = new CrearTarea(tituloIngresado,descripcionIngresada)
		
		//guardar en el localstorage
		localStorage.setItem(Date.now(), JSON.stringify(tareaAgregada))

	}
	agregarTarea(tituloIngresado,descripcionIngresada)
}


////////// funcion que elimina todas las tareas
eliminarTodo.onclick = function(event){
	//borro el local storage
	localStorage.clear()

	location.reload()
}


mostrarTodo.onclick = function(event){

	var arrTareas = []
	
	// subo el LS al array y voy borrando el LS
	for(var i=0; i < localStorage.length; i){
		arrTareas.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
	}

	// itero el arr para poner todo en true
	for(var i=0; i < arrTareas.length; i++){
		arrTareas[i].visible = true
	}

	//subo array modificado al LS
	var suboAlLocalStorage = function(){
		for(var i=0; i<arrTareas.length; i++){
			//guardar en el localstorage
			localStorage.setItem(Date.now(), JSON.stringify(arrTareas[i]))
		}
	}();

	location.reload();
}


////////// funcion que ordena AZ
ordenar.onclick = function(event){
		
	var arrTituloTareas = []

	// itero el localStorage para cargar tareas en mi array
	for(var i=0; i<localStorage.length; i++){
		arrTituloTareas.push(JSON.parse(localStorage.getItem(localStorage.key(i))).titulo)
	}

	arrTituloTareas.sort()
	
	// creo un arr nuevo para poner las tareas
	var arrOrdenado = []

	var reconstruyoMiObj = function(){
		// comparo el array con el LS
		for(var i=0; i<arrTituloTareas.length; i++){
			for(var j=0; j<localStorage.length; j++){
				if(arrTituloTareas[i] == JSON.parse(localStorage.getItem(localStorage.key(j))).titulo){
					//le subo las tareas ordenadas
					arrOrdenado.push(JSON.parse(localStorage.getItem(localStorage.key(j))))
					localStorage.removeItem(localStorage.key(j))
				}
			}
		}
	}();
	
	suboAlLocalStorage = function(){
		for(var i=0; i<arrOrdenado.length; i++){
			console.log(arrOrdenado[i])
			//guardar en el localstorage
			localStorage.setItem(Date.now(), JSON.stringify(arrOrdenado[i]))
		}
	}();

	location.reload();
}


////////// funcion que ordena ZA
ordenarReverse.onclick = function(event){
		
	var arrTituloTareas = []

	// itero el localStorage para cargar tareas en mi array
	for(var i=0; i<localStorage.length; i++){
		arrTituloTareas.push(JSON.parse(localStorage.getItem(localStorage.key(i))).titulo)
	}

	arrTituloTareas.sort()
	arrTituloTareas.reverse()
	
	// creo un arr nuevo para poner las tareas
	var arrOrdenado = []

	var reconstruyoMiObj = function(){
		// comparo el array con el LS
		for(var i=0; i<arrTituloTareas.length; i++){
			for(var j=0; j<localStorage.length; j++){
				if(arrTituloTareas[i] == JSON.parse(localStorage.getItem(localStorage.key(j))).titulo){
					//le subo las tareas ordenadas
					arrOrdenado.push(JSON.parse(localStorage.getItem(localStorage.key(j))))
					localStorage.removeItem(localStorage.key(j))
				}
			}
		}
	}();
	
	suboAlLocalStorage = function(){
		for(var i=0; i<arrOrdenado.length; i++){
			console.log(arrOrdenado[i])
			//guardar en el localstorage
			localStorage.setItem(Date.now(), JSON.stringify(arrOrdenado[i]))
		}
	}();

	location.reload();
}


