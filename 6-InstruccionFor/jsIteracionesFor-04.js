/*
Nuñez Hugo Gabriel
Ejercicio For 04

Al presionar el botón repetir hasta que utilizamos
'BREAK'.
*/


function mostrar()
{
	//Declaro las variables
	let contador;
	let mensaje;
	let cantidad;

	//Asigno valores a las variables
	mensaje = "";
	cantidad = prompt("Ingrese la cantidad de veces que se repite el for.")
	cantidad = parseInt(cantidad);


	//For
	for(contador = 0; ;contador = contador + 1)
	{
		mensaje = mensaje + contador + "<br>";
		if(contador == cantidad)
		{
			break;
		}
	}

	//Mostrar
	document.write(mensaje);

}//FIN DE LA FUNCIÓN