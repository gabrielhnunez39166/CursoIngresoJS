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
	let mensaje;
	
	/* Asigno el valor a la variable. */
	destinoIngresado = document.getElementById("txtIdDestino").value;
	mensaje = "";

	/* Declaro la sentencia Switch para los destinos. */
	switch (destinoIngresado)
	{
		case "Bariloche":
			mensaje = destinoIngresado + " se encuentra en el Este.";
			break;
		case "Cataratas":
			mensaje = destinoIngresado + " se encuentra en el Norte.";
			break;
		case "Mar del plata":
			mensaje = destinoIngresado + " se encuentra en el Oeste.";
			break;
		case "Ushuaia":
			mensaje = destinoIngresado + " se encuentra en el Sur.";
			break;
	}
	alert(mensaje);
}