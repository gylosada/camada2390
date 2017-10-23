
/////////////////////
/*-
var val1 = prompt()
var val2 = prompt()

alert("Sumados dan: " + (Number(val1) + Number(val2)) )

alert("Restados dan: " + (Number(val1) - Number(val2)) )

alert("Multiplicados dan: " + (Number(val1) * Number(val2)) )

alert("Divididos dan: " + (Number(val1) / Number(val2)) )
-*/
////////////////////

var val1 = Number(prompt())
var val2 = Number(prompt())
function sumar(a, b){return a + b}
function restar(a, b){return a - b}
function dividir(a, b){return a / b}
function multiplicar(a, b){return a * b}

alert("Sumados dan: " + sumar(val1, val2))
alert("Restados dan: " + restar(val1, val2))
alert("Divididos dan: " + dividir(val1, val2))
alert("Multiplicados dan: " + multiplicar(val1, val2))