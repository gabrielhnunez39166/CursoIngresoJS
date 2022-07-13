/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 08

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
NO HACER NADA, pero si no es asi, y es soltero y no es menor, mostrar el
siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar() {
	/*Declaro las variables necesarias para el ejercicio.*/
	let edad;
	let estadoCivil;
	let mensaje;

	/*Asigno valores a las variables y en el caso de ser necesario
	hago el parseo.*/
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;
	estadoCivilSoltero = "Soltero";
	mensaje = "Es soltero y no es menor."

	/*Declaro un If para cumplir con la consigna del ejercicio y
	muestro por un alert el mensaje indicado.*/
	if (edad >= 18 && estadoCivil == estadoCivilSoltero) {
		alert(mensaje)
	}
}