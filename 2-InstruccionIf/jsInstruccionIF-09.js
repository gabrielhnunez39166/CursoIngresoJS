/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 09

Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.
*/

function mostrar()
{
	/* Declaro las variables. */
	let numerosAleatorios;

	/* Con la siguiente linea de codigo agrego un valor aleatorio entre
	1 y 10 a la variable numerosAletorios. */
	numerosAleatorios =	Math.floor(Math.random() * 10) + 1;

	/* Con alert muestro por pantalla el numero aleatorio. */
	alert(numerosAleatorios);
}