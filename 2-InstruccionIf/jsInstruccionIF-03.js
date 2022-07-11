/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 03
*/

function mostrar()
{
	//Declaro las variables.
	let edad;
	let mayorDeEdad;
	let menorDeEdad;

	//Asigo el valor correspondiente a las variables.
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	mayorDeEdad = "Usted es mayor de edad.";
	menorDeEdad = "Usted es menor de edad.";

	//Declaro un If para dar solucion al ejercicio.
	if (edad >= 18) {
		alert(mayorDeEdad);	
	} else
		alert(menorDeEdad);
}