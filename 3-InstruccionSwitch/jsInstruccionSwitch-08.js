/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 08

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	/* Declaro la variable. */
	let destinoIngresado;
	
	/* Asigno el valor a la variable. */
	destinoIngresado = document.getElementById("txtIdDestino").value;

	/* Declaro la sentencia Switch para los destinos. */
	switch (destinoIngresado) {
		case "Mar del plata":
		case "Cataratas":
			alert("En " + destinoIngresado + " hace CALOR.");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("En " + destinoIngresado + " hace FRIO.");
			break;
	}
}