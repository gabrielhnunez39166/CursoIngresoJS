/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno = document.getElementById("txtIdPrecioUno").value;
    let precioDos = document.getElementById("txtIdPrecioDos").value;
    let precioTes = document.getElementById("txtIdPrecioTres").value;
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTes = parseInt(precioTes);

    let suma = precioUno + precioDos + precioTes;
    
    let mensaje = "Total de la suma: $" + suma.toFixed(2);
    alert(mensaje);
}

function Promedio () 
{
	let precioUno = document.getElementById("txtIdPrecioUno").value;
    let precioDos = document.getElementById("txtIdPrecioDos").value;
    let precioTes = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTes = parseInt(precioTes);

    let promedio = (precioUno + precioDos + precioTes) / 3;

    let mensaje = "El promedio es: " + promedio.toFixed(2);
    alert(mensaje);
}

function PrecioFinal () 
{
	let precioUno = document.getElementById("txtIdPrecioUno").value;
    let precioDos = document.getElementById("txtIdPrecioDos").value;
    let precioTes = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTes = parseInt(precioTes);
    
    let iva = (precioUno + precioDos + precioTes) * .21;
    let precioFinal = (precioUno + precioDos + precioTes) + iva;

    let mensaje = "Precio final: $" + precioFinal.toFixed(2);
    alert(mensaje)
}