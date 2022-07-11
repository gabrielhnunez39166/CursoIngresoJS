/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 01
*/

function mostrar()
{
	//Declaro las variables.
	let edad;
	let mensaje;
	
	//Asigno el valor a las variables.
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	mensaje = "Niña bonita";

	/*Mediante un If si la edad ingresada es igual a 15, muestro por alert la variable mensaje.*/
	if (edad == 15) {
		alert(mensaje);	
	}
}