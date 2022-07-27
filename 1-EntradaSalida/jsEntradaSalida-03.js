/*
Nuñez Hugo Gabriel
Ejercicio E/S 03

Se ingresan dos notas (entre 1 y 10), el nombre y el genero ("M", "F", "NB"), 
y asistencias sobre un total de 20 clases.
de 5 estudiantes. 

Se pide:
1. El genero del estudiante con mayor promedio
2. El nombre de la estudiante que mas falto (solo puede ser una).
3. La cantidad de estudiantes de genero masculino o no binario, 
que hayan asistido a un total entre 15 y 20 clases.
4. Promedio de asistencias.
5. Porcentaje de estudiantes de cada genero.
*/


function mostrar()
{
	//Declarar variables
	let primerNota;
	let segundaNota;
	let nombreAlumno;
	let generoAlumno;
	let diasDeAsistencias;
	let cantidadDeAlumnos;
	let promedioDeNotas;
	let banderaDelPrimerPromedio;
	let mayorPromedioEstudiante;
	let generoMayorPromedioEstudiante;
	let banderaDelEstudianteQueMasFalto;
	let asistenciaDeLaQueMasFalto;
	let nombreAlumnaQueMasFalto;
	let cantidadDeAlumnosMasculinosONoBinarioAsistieron;
	let acumuladorAsistencias;
 	let promedioDeAsistencias;
	let porcentajeDeMasculinos;
 	let porcentajeDeFemeninos;
	let porcentajeDeNoBinarios;
	let cantidadDeMasculino;
	let cantidadDeFememnino;
	let cantidadDeNoBinario;



	//Asignacion de valores
	cantidadDeAlumnos = 5;
	banderaDelPrimerPromedio = false;
	cantidadDeAlumnosMasculinosONoBinarioAsistieron = 0;
	acumuladorAsistencias = 0;
	cantidadDeMasculino = 0;
	cantidadDeFememnino = 0;
	cantidadDeNoBinario = 0;



	while(cantidadDeAlumnos > 0)
	{
		//Ingreso datos del usuario
		primerNota = parseInt(prompt("Ingrese la primer nota: "));
		while(primerNota < 1 || primerNota > 10);
		{
			primerNota = parseInt(prompt("ERROR - Reingrese la primer nota: "));
		}

		segundaNota = parseInt(prompt("Ingrese la segunda nota: "));
		while(segundaNota < 1 || segundaNota > 10);
		{
			segundaNota = parseInt(prompt("ERROR - Reingrese la segunda nota: "));
		}

		nombreAlumno = prompt("Ingrese el nombre del alumno: ");
		while(nombreAlumno == "")
		{
			nombreAlumno = prompt("Reingrese el nombre del alumno: ");
		}

		generoAlumno = prompt("Ingrese el genero del alumno: ");
		while(generoAlumno != "M" && generoAlumno != "F" && generoAlumno != "NB")
		{
			generoAlumno = prompt("Rengrese el genero del alumno: ");
		}

		diasDeAsistencias = parseInt(prompt("Ingrese los dias de asistencia: "));
		while(diasDeAsistencias < 0 || diasDeAsistencias > 20)
		{
			diasDeAsistencias = parseInt(prompt("Reingrese los dias de asistencia: "));
		}
	

		cantidadDeAlumnos --;


		//Estudiante con mayor promedio de notas
		promedioDeNotas = (primerNota + segundaNota) / 2;

		if (banderaDelPrimerPromedio == false)
		{
			banderaDelPrimerPromedio = true;
			mayorPromedioEstudiante = promedioDeNotas;
			generoMayorPromedioEstudiante = generoAlumno;

		}
		else
		{
			if(mayorPromedioEstudiante < promedioDeNotas)
			{
				mayorPromedioEstudiante = promedioDeNotas;
				generoMayorPromedioEstudiante = generoAlumno;
			}
		}


		//Nombre de la estudiante que mas falto
		if(generoAlumno == "F")
		{
			if(banderaDelEstudianteQueMasFalto == false)
			{
				banderaDelEstudianteQueMasFalto = true;
				nombreAlumnaQueMasFalto = nombreAlumno;
				asistenciaDeLaQueMasFalto = diasDeAsistencias;
			}
			else
			{
				if(asistenciaDeLaQueMasFalto > diasDeAsistencias)
				{
					nombreAlumnaQueMasFalto = nombreAlumno;
				}
			}
		}
		else
		{
			if(diasDeAsistencias > 14)
			{
				cantidadDeAlumnosMasculinosONoBinarioAsistieron++;
			}
		}

		//Promedio de asistencias
		acumuladorAsistencias += diasDeAsistencias;

		switch(generoAlumno)
		{
			case "M":
				cantidadDeMasculino++;
				break;
			case "F":
				cantidadDeFememnino++;
				break;
			case "NB":
				cantidadDeNoBinario++;
				break;
		}

	}


	//Porcentaje de estudiantes de cada genero.
	porcentajeDeMasculinos = (cantidadDeMasculino / cantidadDeAlumnos) * 100;
	porcentajeDeFemeninos = (cantidadDeFememnino / cantidadDeAlumnos) * 100;
	porcentajeDeNoBinarios = (cantidadDeNoBinario / cantidadDeAlumnos) * 100;

	promedioDeAsistencias = acumuladorAsistencias / cantidadDeAlumnos;

	//Fin de procesamiento de datos
	
	

}