/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 07

Al selecionar un destino , indicar el punto cardinal de nuestro
pais en donde se encuentra Norte, Sur, Este u Oeste.
*/

function mostrar()
{
	/* Declaro la variable. */
	let destinoIngresado;
	
	/* Asigno el valor a la variable. */
	destinoIngresado = document.getElementById("txtIdDestino").value;

	/* Declaro la sentencia Switch para los destinos. */
	switch (destinoIngresado) {
		case "Bariloche":
			alert(destinoIngresado + " se encuentra en el Este.");
			break;
		case "Cataratas":
			alert(destinoIngresado + " se encuentra en el Norte.");
			break;
		case "Mar del plata":
			alert(destinoIngresado + " se encuentra en el Oeste.");
			break;
		case "Ushuaia":
			alert(destinoIngresado + " se encuentra en el Sur.");
			break;
	}
}