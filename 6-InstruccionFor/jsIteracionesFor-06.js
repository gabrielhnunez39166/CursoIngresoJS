/*
Nuñez Hugo Gabriel
Ejercicio For 06

Al presionar el botón pedir un número. mostrar los
numeros pares desde el 1 al número ingresado, y mostrar
la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	//Declarar las variables
	let numeroIngresado;
	let contador;
	let mensaje;
	let cantidadDeNuemrosPares;
	let mensajePares;

	//Asignacion
	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);
	mensaje = "";
	cantidadDeNuemrosPares = 0;
	mensajePares = "La cantidad de numeros pares es: ";

	//for
	for(contador = 1; contador <= numeroIngresado; contador = contador + 1)
	{
		if(contador%2 == 0)
		{
			cantidadDeNuemrosPares = cantidadDeNuemrosPares + 1;
			mensaje = mensaje + "<br>" + contador;
		}
	}

	//Mostrar
	document.write(mensajePares + cantidadDeNuemrosPares);
	document.write(mensaje);
	
}//Fin de la funcion.