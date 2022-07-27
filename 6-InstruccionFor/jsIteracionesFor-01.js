/*
Nuñez Hugo Gabriel
Ejercicio For 01

al presionar el botón mostrar 10 repeticiones con
números ASCENDENTE, desde el 1 al 10.
*/


function mostrar()
{
	//Declaro las variables
	let numero;
	let mensaje;

	//Asigno las variables
	mensaje = "";


	for(numero = 0; numero < 10; numero = numero + 1)
	{
		mensaje = mensaje + "<br>" + (numero + 1);
	}

	document.write(mensaje);
}