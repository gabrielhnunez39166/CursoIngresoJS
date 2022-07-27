/*
Nuñez Hugo Gabriel
Ejercicio For 02

al presionar el botón mostrar 10 repeticiones con
números , desde el 10 al 1.
*/


function mostrar()
{
	//Declaro las variables
	let numero;
	let mensaje;

	//Asigno las variables
	mensaje = "";


	for(numero = 10; numero > 0; numero = numero - 1)
	{
		mensaje = mensaje + "<br>" + (numero);
	}

	document.write(mensaje);
}