/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 01

al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	/* Declaro las variables. */
	let mesDelAnio;	
	
	/* Asigno el valor correspondiente a las variables */
	mesDelAnio= document.getElementById("txtIdMes").value;

	/* Declaro la sentencia Switch para los meses que deben
	mostrar mensajes por pantalla. */
	switch (mesDelAnio) {
		case "Enero":
			alert("Que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("A clases!!!.");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
		default:
			/* Como default podria agregar un alert(mesDelAnio);
			pero el enunciado no me lo pide.*/
			break;
	}
}