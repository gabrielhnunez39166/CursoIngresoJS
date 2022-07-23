/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/

function mostrar()
{
	//Declaro las variables
	let sexoIngresado;

	//Asigno valor a las variables
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("ingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
	
}//FIN DE LA FUNCIÓN