/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//Definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBrutoIngresado;
	let numeroDeLegajoIngresado;
	let nacionalidadIngresada;

	//Edad
	edadIngresada = prompt("Ingresar edad, entre 18 y 90 años inclusive.");
	edadIngresada = parseInt(edadIngresada);

	while (isNaN(edadIngresada) == true || edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("Ingresar edad, entre 18 y 90 años inclusive.");
		edadIngresada = parseInt(edadIngresada);
	}


	//Sexo
	sexoIngresado = prompt("Ingresar sexo, “M” para masculino y “F” para femenino");

	while (sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt("Ingresar sexo, “M” para masculino y “F” para femenino");
	}


	//Estado civil
	estadoCivilIngresado = prompt("Ingrese el Estado civil 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(isNaN(estadoCivilIngresado) == true || estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
	{
		estadoCivilIngresado = prompt("Ingrese el Estado civil 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}


	//Sueldo bruto
	sueldoBrutoIngresado = prompt("Ingresar Sueldo bruto, no menor a 8000.");
	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);

		while(isNaN(sueldoBrutoIngresado) == true || sueldoBrutoIngresado < 8000)
		{
			sueldoBrutoIngresado = prompt("Ingresar Sueldo bruto, no menor a 8000.");
			sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
		}


	//Numero de legajo
	numeroDeLegajoIngresado = prompt("Ingresar número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	numeroDeLegajoIngresado = parseInt(numeroDeLegajoIngresado);

	while(isNaN(numeroDeLegajoIngresado) == true || numeroDeLegajoIngresado < 999 || numeroDeLegajoIngresado > 9999)
	{
		numeroDeLegajoIngresado = prompt("Ingresar número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
		numeroDeLegajoIngresado = parseInt(numeroDeLegajoIngresado);
	}


	//Nacionalidad
	nacionalidadIngresada = prompt("Ingresar Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" &&nacionalidadIngresada != "N")
	{
		nacionalidadIngresada = prompt("Ingresar Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}


	//Mostrar datos
	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBrutoIngresado;
	document.getElementById("txtIdLegajo").value = numeroDeLegajoIngresado;
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}