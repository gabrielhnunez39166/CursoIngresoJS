/* 
Nuñez Hugo Gabriel
Ejercicio E/S 06

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	let numeroUno = document.getElementById("txtIdNumeroUno").value;
	let numeroDos = document.getElementById("txtIdNumeroDos").value;
	let suma = parseInt(numeroUno) + parseInt(numeroDos);
	
	alert ("La suma es: " + suma + ".");
}