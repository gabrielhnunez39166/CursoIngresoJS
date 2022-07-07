/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = document.getElementById("txtIdLargo").value;
    let ancho = document.getElementById("txtIdAncho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    
    let perimetro = (largo * 2) + (ancho * 2);
    let cantidadAComprar = perimetro * 3;

    let mensaje = "La cantidad de alambre que debe comprar es: " + cantidadAComprar + "m";
    alert(mensaje);
}

function Circulo () 
{
    let radio = document.getElementById("txtIdRadio").value;

    let perimetro = 2 * 3.1416 * radio;
    let cantidadAComprar = perimetro * 3;

    let mensaje = "La cantidad de alambre que debe comprar es: " + cantidadAComprar + "m";
    alert(mensaje);
}

//FALTA ESTE EJERCICIO
function Materiales () 
{
    let largo = document.getElementById("txtIdLargo").value;
    let ancho = document.getElementById("txtIdAncho").value;
    let contrapiso = largo * ancho;
    let cemento = contrapiso * 2;
    let cal = contrapiso * 3;
    let mensaje = "Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.";
    alert(mensaje)
}