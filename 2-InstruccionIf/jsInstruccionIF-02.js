/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 02
*/

function mostrar()
{
	//Declaro las variables.
	let edad;
	let mayorDeEdad;
	
	//Asigno el valor a las variables.
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	mayorDeEdad = "Usted es mayor de edad.";

	/*Mediante un If si la edad es mayor o igual a 18, muestro el mensaje
	de la variable mayorDeEdad*/
	if (edad >= 18) {
		alert(mayorDeEdad);	
	}
}