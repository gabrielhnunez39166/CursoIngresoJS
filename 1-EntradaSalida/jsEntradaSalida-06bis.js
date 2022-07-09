/* 
Nuñez Hugo Gabriel
Ejercicio E/S 06

Ingresar el valor del dólar oficial y el valor del dólar blue.
Mostrar la diferencia expresada en porcentaje entre una cotización y otra.*/

function sumar()
{
	//Agrego las variables que voy a utilizar para este ejercicio.
	let dolarOficial;
	let dolarBlue;
	let porcentaje;
	let mensaje;
	
	//Asigno los valores dolar y peso
	dolarOficial = document.getElementById("txtIdNumeroUno").value;
	dolarOficial = parseFloat(dolarOficial);

	dolarBlue = document.getElementById("txtIdNumeroDos").value;
	dolarBlue = parseFloat(dolarBlue);
	
	//Calculo el porcentaje entre ambas variables y se la asigno a porcentaje.
	porcentaje = ((dolarBlue - dolarOficial)/dolarOficial) * 100;

	//Asigno el valor de la variable mensaje y lo muestro por un alert.
	mensaje = "El porcentaje es del: " + porcentaje.toFixed(2); //toFixed(2) dos valores despues de la coma(,)
	alert (mensaje);
}