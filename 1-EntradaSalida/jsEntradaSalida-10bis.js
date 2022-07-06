/* 
Nuñez Hugo Gabriel
Ejercicio E/S 10bis

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

E/S 10 bis: Se pedirá el importe del descuento por prompt.
Además se deberá mostrar por alert el siguiente mensaje:
"Ud obtuvo un descuento de $xx"

PARA LOGRAR QUE EL EJERCICIO FUNCIONE MODIFIQUE EL ARCHIVO
EntradaSalida-10.html LINEA 15 PARA QUE TOME EL EJERCICIO 09bis.
*/

function mostrarAumento()
{
	let importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	let importeDescuento = prompt("Ingrese el importe del descuento: ");
	importeDescuento = importe * parseInt(importeDescuento) / 100;

	let resultado = importe -  importeDescuento;
	document.getElementById("txtIdResultado").value = "Total a pagar $" + resultado.toFixed(2);

	let mensaje = "Ud obtuvo un descuento de $" + importeDescuento.toFixed(2);
	alert(mensaje)
}