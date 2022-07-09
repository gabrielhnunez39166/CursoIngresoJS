/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 02

al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	/* Declaro las variables. */
	let mesDelAnio;	
	
	/* Asigno el valor correspondiente a las variables */
	mesDelAnio= document.getElementById("txtIdMes").value;

	/* Declaro la sentencia Switch y a cada mes le agrego el mensaje a
	mostrar por pantalla. */
	switch (mesDelAnio) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
		case "Septiembre":
			alert("Abrigate que hace frio.");
			break;
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	}
}