/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 04

al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	/* Declaro la variable. */
	let mesDelAnio;
	
	/* Asigno el valor correspondiente a la variable */
	mesDelAnio = document.getElementById("txtIdMes").value;

	/* Declaro la sentencia Switch y agrupo los meses segun la cantidad
	de dias para asignarle el mensaje que se mostrara por pantalla. */
	switch (mesDelAnio) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias.");
			break;
		case "Febrero":
			alert("Este mes tiene 28 dias o 29 en año bisiesto.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias.");
			break;
	}
}