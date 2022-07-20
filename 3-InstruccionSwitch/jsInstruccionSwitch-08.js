/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 08

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	/* Declaro la variable. */
	let destinoIngresado;
	let mensaje;
	
	/* Asigno el valor a la variable. */
	destinoIngresado = document.getElementById("txtIdDestino").value;
	mensaje = "";

	/* Declaro la sentencia Switch para los destinos. */
	switch (destinoIngresado)
	{
		case "Mar del plata":
		case "Cataratas":
			mensaje = "En " + destinoIngresado + " hace CALOR.";
			break;
		default:
			mensaje = "En " + destinoIngresado + " hace FRIO.";
			break;
	}
	alert(mensaje);
}