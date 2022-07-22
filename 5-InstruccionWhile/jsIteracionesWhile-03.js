/*
Al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/
function mostrar()
{
	//Declarar variables.
	let claveIngresada;

	//Asigno valor a la variable.
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750" )
	{
		console.log("La clave ingresada es incorrecta!!!");
		claveIngresada = prompt("ingrese el número clave.");
	}
}//FIN DE LA FUNCIÓN