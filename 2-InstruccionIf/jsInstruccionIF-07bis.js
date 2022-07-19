/*
Nuñez Hugo Gabriel
Ejercicio 07 BIS V1
*/

function mostrar() {
	//Declaro las variables.
	let edadIngresada;
	let mensaje;

	//Asigno valores a las variables
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	
	if (edadIngresada < 13)
	{
		mensaje = "Feliz día";
	} 
	else 
	{
		if (edadIngresada < 18) 
		{
			mensaje = "Usted es adolescente";

			if (edadIngresada == 17)
			{
				mensaje += " último año!!!";
			}
		}
		else
		{
			if (edadIngresada > 17)
			{
				mensaje = "Tenes edad de laburar!!";

				if (edadIngresada == 33)
				{
					mensaje += " como cristo!!";
				}
				else 
				{
					if (edadIngresada > 60)
					{
						mensaje += " A jubilarse!!";
					}
					else 
					{
						if (edadIngresada == 88)
						{
							mensaje += " Lindo número!!";
						}
					}
				}
			}
		}
	}
	
	if (edadIngresada%2 == 0)
	{
		mensaje += " sos par!!!";
	}

	alert(mensaje);
} //Fin de la funcion principal.