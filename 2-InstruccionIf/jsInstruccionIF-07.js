/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 07
*/

function mostrar()
{
	/*Declaro las variables necesarias para el ejercicio.*/
	let edad;
	let estadoCivil;
	let mensaje;

	/*Asigno valores a las variables y en el caso de ser necesario
	hago el parseo.*/
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;
	mensaje = "Es muy pequeño para NO ser soltero."

	/*Declaro un If para cumplir con la consigna del ejercicio y
	muestro por un alert el mensaje indicado.*/
	if (edad < 18 & estadoCivil != "Soltero") {
		alert(mensaje)
	}
}