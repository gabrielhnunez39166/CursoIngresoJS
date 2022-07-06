/* 
Nuñez Hugo Gabriel
Ejercicio E/S 07

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt), realizar la operación correcta y mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar()
{	
	let numeroUno = document.getElementById("txtIdNumeroUno").value;
	let numeroDos = document.getElementById("txtIdNumeroDos").value;
	let suma = parseInt(numeroUno) + parseInt(numeroDos);
	
	alert ("La suma es: " + suma + ".");	
}

function restar()
{
	let numeroUno = document.getElementById("txtIdNumeroUno").value;
	let numeroDos = document.getElementById("txtIdNumeroDos").value;
	let resta = parseInt(numeroUno) - parseInt(numeroDos);
	
	alert ("La resta es: " + resta + ".");	
}

function multiplicar()
{ 
	let numeroUno = document.getElementById("txtIdNumeroUno").value;
	let numeroDos = document.getElementById("txtIdNumeroDos").value;
	let multiplicar = parseInt(numeroUno) * parseInt(numeroDos);
	
	alert ("La multiplicacion es: " + multiplicar + ".");		
}

function dividir()
{
	let numeroUno = document.getElementById("txtIdNumeroUno").value;
	let numeroDos = document.getElementById("txtIdNumeroDos").value;
	let dividir = parseInt(numeroUno) / parseInt(numeroDos);
	
	alert ("La division es: " + dividir + ".");
}