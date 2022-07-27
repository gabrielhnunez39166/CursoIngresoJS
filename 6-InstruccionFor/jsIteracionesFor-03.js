/*
Nuñez Hugo Gabriel
Ejercicio For 03

Al presionar el botón pedir la cantidad de veces que
quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{
	//Declaro las variables
	let repeticiones;
	let contador;
	let mostrar;
	let mensaje;

	//Asigno valor a las variables y el parseo correspondiente
	repeticiones = prompt("Ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);
	mostrar = "";
	mensaje = "Hola UTN FRA";

	//For
	for(contador = 0; contador < repeticiones; contador = contador + 1)
	{
		mostrar = mostrar + mensaje + "<br>";
	}

	//Mostrar
	document.write(mostrar);


}//FIN DE LA FUNCIÓN