/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar()
{
    let notaIngresada;
    let sexoIngresado;

    notaIngresada = prompt("Ingrese una nota entre 0 y 10");
    notaIngresada = parseInt(notaIngresada);

    while(isNaN(notaIngresada) == true || notaIngresada < 0 || notaIngresada > 10)
    {
        notaIngresada = prompt("Ingrese una nota entre 0 y 10");
        notaIngresada = parseInt(notaIngresada);
        iteraciones++;
    }


    sexoIngresado = prompt("Ingrese el sexo. Masculino (M) o Femenino (F)");

    while (sexoIngresado != "M" && sexoIngresado != "F")
    {
        sexoIngresado = prompt("Ingrese el sexo. Masculino (M) o Femenino (F)");
    }


    promedioNotasTotales = notaIngresada + notaIngresada;
}
