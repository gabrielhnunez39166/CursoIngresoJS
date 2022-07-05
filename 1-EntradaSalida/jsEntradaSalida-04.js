/* 
Nuñez Hugo Gabriel
Ejercicio E/S 04

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	let datoIngresado = prompt("Ingrese un dato: ");
	document.getElementById("txtIdNombre").value = datoIngresado;
}