/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 04
*/

function mostrar()
{
	//Declaro las variables.
	let edad;
	let edadAdolescente;

	//Asigno el valor correspondiente a las variables.
	edad = document.getElementById("txtIdEdad").value;
	edadAdolescente = "La edad ingresada corresponde a una persona adolescente.";

	//Declaro un If para dar solucion al ejercicio.
	if (edad >= 13 & edad <= 17) {
		alert(edadAdolescente);	
	}
}