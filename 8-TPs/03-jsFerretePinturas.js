/*
Nuñez Hugo Gabriel
TP 3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
    let temperaturaIngresada;
    let fahrenheit;
    let fahrenheitCentigrados;
    let mensaje;

    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
    temperaturaIngresada = parseInt(temperaturaIngresada);
    fahrenheit = 32;
    fahrenheitCentigrados = (temperaturaIngresada - fahrenheit) * (5/9);
    mensaje = "La temperatura en Centigrados es: " + fahrenheitCentigrados;

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
    let temperaturaIngresada;
    let fahrenheit;
    let centigradosFahrenheit;
    let mensaje;

    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
    temperaturaIngresada = parseInt(temperaturaIngresada);
    fahrenheit = 32;
    centigradosFahrenheit = (temperaturaIngresada * (9 / 5)) + fahrenheit;
    mensaje = "La temperatura en Fahrenheit es: " + centigradosFahrenheit;
    
    alert(mensaje);
}