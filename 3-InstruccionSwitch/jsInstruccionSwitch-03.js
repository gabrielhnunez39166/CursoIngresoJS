/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 03

al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	/* Declaro las variables. */
	let mesDelAnio;	
	
	/* Asigno el valor correspondiente a las variables */
	mesDelAnio= document.getElementById("txtIdMes").value;

	/* Declaro la sentencia Switch y sabiendo que a diferencia de febrero el
	resto de los meses tiene 30 o mas dias, a estos ultimos los declaro en default.*/
	switch (mesDelAnio) {
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
		break;
	}
}