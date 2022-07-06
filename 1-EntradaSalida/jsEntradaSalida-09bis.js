/* 
Nuñez Hugo Gabriel
Ejercicio E/S 09bis

Debemos lograr tomar el importe por ID.value ,
transformarlo a entero "parseInt()", luego mostrar
el importe con un aumento del 10 %. en el cuadro de
texto "txtIdResultado"

E/S 9 bis: Se pedirá el importe del aumento por prompt.

PARA LOGRAR QUE EL EJERCICIO FUNCIONE MODIFIQUE EL ARCHIVO
EntradaSalida-09.html LINEA 13 PARA QUE TOME EL EJERCICIO 09bis.
*/

function mostrarAumento()
{
	let sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	let porcentaje = prompt("Ingrese el importe del aumento: ");
	porcentaje = sueldo * parseInt(porcentaje) / 100;

	let resultado = sueldo + porcentaje;

	document.getElementById("txtIdResultado").value = resultado.toFixed(2);
}