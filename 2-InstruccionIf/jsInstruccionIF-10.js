/*
Nuñez Hugo Gabriel
Ejercicio InstruccionIf 10

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	/* Declaro las variables. */
	let notaAleatoria;
	let notaExcelente;
	let notaAprobado;
	let notaDesaprobado;

	/* Con la siguiente linea de codigo agrego un valor aleatorio entre
	1 y 10 a la variable numerosAletorios. */
	notaAleatoria =	Math.floor(Math.random() * 10) + 1;

	/* Asigno a las variables faltantes el valor correspondiente. */
	notaExcelente = "EXCELENTE";
	notaAprobado = "APROBÓ";
	notaDesaprobado = "Vamos, la proxima se puede";

	/* Declaro el if y las condiciones para el ejercicio.
	Uso If Else anidado (no la considero esta tecnica como buena 
	practica, pero me queda comodo en este ejercicio ya que tampoco
	me gustan los If sueltos o separados por una linea vacia). */
	  if (notaAleatoria >= 9) {
		alert(notaExcelente + " (" + notaAleatoria + ").");
	  } else 
	  		if (notaAleatoria >= 5 & notaAleatoria <= 8) {
				alert(notaAprobado + " (" + notaAleatoria + ").");
	  } else
	  		if (notaAleatoria <= 4) {
				alert(notaDesaprobado + " (" + notaAleatoria + ").");
	  }
}