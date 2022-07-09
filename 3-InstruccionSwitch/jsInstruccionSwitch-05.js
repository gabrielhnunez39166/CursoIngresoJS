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
	
	/* Asigno el valor a la variable y la parseo 
	ya que voy a trabajar con enteros. */
	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);

	/* Con la sentencia Switch si se cumple la condicion del enunciado
	muestro por pantalla el mensaje. */
	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.")
			break;
	}
}