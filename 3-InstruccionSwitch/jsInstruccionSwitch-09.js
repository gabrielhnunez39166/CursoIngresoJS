/*
Nuñez Hugo Gabriel
Ejercicio InstruccionSwitch 09

Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000
por cada estadia como base, se pide el ingreso de una estacion del año y
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un
descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un 
aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un
aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio
sin descuento
*/

function mostrar()
{
	/* Declaro la variable. */
	let destinoIngresado;
	let estacionIngresada;
	let precioBaseEstadia;
	let precioFinal;
	let descuento;
	let aumento;
	let mensaje;

	/* Asigno el valor a la variable. */
	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	precioBaseEstadia = 15000;
	precioFinal = 0;
	descuento = 0;
	aumento = 0;

	/* Declaro la sentencia Switch para los destinos y las estaciones. */
	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					aumento = precioBaseEstadia * 20 / 100;
					precioFinal = precioBaseEstadia + aumento;
					break;

				case "Cataratas":
				case "Cordoba":
					descuento = precioBaseEstadia * 10 / 100;
					precioFinal = precioBaseEstadia - descuento;
					break;

				case "Mar del plata":
					descuento = precioBaseEstadia * 20 / 100;
					precioFinal = precioBaseEstadia - descuento;
					break;
			}
		break;

		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					descuento = precioBaseEstadia * 20 / 100;
					precioFinal = precioBaseEstadia - descuento;
					break;
				
				case "Cataratas":
				case "Cordoba":
					aumento = precioBaseEstadia * 10 / 100;
					precioFinal = precioBaseEstadia + aumento;
					break;

				case "Mar del plata":
					aumento = precioBaseEstadia * 20 / 100;
					precioFinal = precioBaseEstadia + aumento;
					break;
			}
			break

		case "Otoño":
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = precioBaseEstadia * 10 / 100;
					precioFinal = precioBaseEstadia + aumento;
					break;

				case "Cordoba":
					precioFinal = precioBaseEstadia;
					break;
			}
			break;
	}
	
	mensaje = "El precio final del viaje es de $" + precioFinal;
	alert(mensaje);
}