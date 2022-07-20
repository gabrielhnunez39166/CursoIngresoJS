/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 05

Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	/* Declaro las variables. */
	let horaDelDia;
	let mensaje;
	
	/* Asigno el valor a la variable y la parseo 
	ya que voy a trabajar con enteros. */
	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);
	mensaje = "";

	/* Con la sentencia Switch si se cumple la condicion del enunciado
	muestro por pantalla el mensaje. */
	switch (horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			break;
		default:
			mensaje = "La hora ingresada no existe.";
	}
	alert(mensaje);
}