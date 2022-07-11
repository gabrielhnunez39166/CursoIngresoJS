/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 05
*/

function mostrar()
{
	//Declaro las variables.
	let edad;
	let edadNoEsAdolescente;

	//Asigno los valores correspondientes a las variables.
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	edadNoEsAdolescente = "La edad ingresada NO corresponde a una persona adolescente.";

	/*En vez de utilizar varios If por separado los dejo como If else ya que
	es una "tecnica" para ordenar el codigo.*/
	if (edad <= 12 & edad >= 18) {
		alert(edadNoEsAdolescente);	
	} else if (edad >= 18) {
		alert(edadNoEsAdolescente);	
	}
}