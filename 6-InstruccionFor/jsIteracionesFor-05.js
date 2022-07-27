/*
Nuñez Hugo Gabriel
Ejercicio For 05

al presionar el botón repetir el pedido de número hasta
que ingresemos el 9.
*/


function mostrar()
{
	//Declaro las variables
	let contador;
	let mensaje;
	let cantidad;

	//Asigno valores a las variables
	mensaje = "";
	cantidad = prompt("Ingrese un numero: ")
	cantidad = parseInt(cantidad);

	//For
	for(contador = 0; ; contador++)
	{
		if(contador != 9)
		{
			cantidad = prompt("Ingrese un numero: ")
			cantidad = parseInt(cantidad);
		}
		else
		{
			if(contador == 9)
			{
				break;
			}
		}
	}
}//FIN DE LA FUNCIÓN