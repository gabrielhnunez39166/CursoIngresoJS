/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 10

Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000
por cada estadia como base, se pide el ingreso de una estacion del año y
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un
descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un
aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un
aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el
precio sin descuento
*/

function mostrar()
{
	/* Declaro la variable. */
	let destinoIngresado;
	let estacionIngresada;
	let mensaje;

	/* Asigno el valor a la variable. */
	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	mensaje = "";


	/* Declaro la sentencia Switch para los destinos y las estaciones. */
	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					mensaje = "Se viaja.";
					break;

				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "No se viaja.";
					break;
			}
			break;
		
		case "Verano":
			switch (destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja.";
					break;
				
				case "Bariloche":
				case "Cordoba":
					mensaje = "No se viaja.";
					break;
			}
			break;

		case "Otoño":
			switch (destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja.";
					break;
			}
			break;
		
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja.";
					break;
				
				case "Bariloche":
					mensaje = "No se viaja.";
					break;
			}
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN