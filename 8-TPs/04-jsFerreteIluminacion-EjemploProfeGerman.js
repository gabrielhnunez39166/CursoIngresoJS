 /*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

 function CalcularPrecio ()
 {
  var precioBaseLamparas;
  var marcaElegida;
  var cantidadLamparas;
  var precioCompra;
  var impuestoBruto;
  var descuento;
  var precioConDescuento;
  var precioTotal;

  // valores iniciales
  precioBaseLamparas = 35;
  descuento = 0;
  impuestoBruto = 0;

  cantidadLamparas = document.getElementById ("txtIdCantidad").value;
  marcaElegida = document.getElementById ("Marca").value;

  cantidadLamparas = parseInt (cantidadLamparas);

  precioCompra = precioBaseLamparas * cantidadLamparas;


  if (cantidadLamparas > 5)
  {
      descuento = 0.5;
  }
  else
  {
    if (cantidadLamparas == 5)
	{
	  if (marcaElegida == "ArgentinaLuz")
	  {
	      descuento = 0.4;
	  }
	  else
	  {
	      descuento = 0.3;
	  }

	}
    else
	{
	  if (cantidadLamparas == 4)
	  {

	    if (marcaElegida == "ArgentinaLuz" || marcaElegida == "FelipeLamparas")
		{
		  descuento = 0.25;
		}
	    else
		{
		  descuento = 0.2;
		}
      }			
	  else		
	  {
	    if (cantidadLamparas == 3)
		{

		  if (marcaElegida == "ArgentinaLuz")
	      {
		      descuento = 0.15;
	      }
		  else
	      {
	        if (marcaElegida == "FelipeLamparas")
			{
			  descuento = 0.1;
			}
	        else
			{
			  descuento = 0.05;
			}
	      }
		}
      }
	}
  }

  precioConDescuento = precioCompra - (precioCompra * 0);

  if (precioConDescuento > 120)
  {
	  impuestoBruto = precioCompra / 100 * 10;

	  alert ("Usted pago " + impuestoBruto + " de IIBB");
  }
  precioTotal = precioConDescuento + impuestoBruto;
  document.getElementById ("txtIdprecioDescuento").value = precioTotal;

}