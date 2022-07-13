/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 06

Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18
años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar() {
	//Declaro las variables necesarias para el ejercicio.
	let edad;
	let mayorDeEdad;
	let adolescente;
	let ninio;

	//Asigno el valor a las variables y hago el parseo correspondiente.
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/*Los siguientes son los mensajes que se mostraran en el alerta ya que me
	parece "mejor o mas legible" a la hora de escribir el if*/
	mayorDeEdad = "La edad ingresada corresponde a una persona mayor de edad.";
	adolescente = "La edad ingresada corresponde a una persona adolescente.";
	ninio = "La edad ingresada corresponde a un niño";

	/*En vez de utilizar varios if por separado los dejo como if else para ordenar el codigo.*/
	if (edad >= 18) {
		alert(mayorDeEdad);

	} else if (edad >= 13 && edad <= 17) {
		alert(adolescente);

	} else
		alert(ninio);
}