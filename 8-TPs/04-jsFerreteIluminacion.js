/*
Nuñez Hugo Gabriel
TP 4

4. Para el departamento de iluminación:
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
    //Declaro las variables del enunciado.
    let cantidadDeLamparas;
    let marca;
    let precioLamparas;
    let descuentoPorLampara;
    let TotalAPagar;
    let mensaje;

    //Asigno valor a las variables y hago el parseo correspondiente.
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    precioLamparas = 35;
    marca = document.getElementById("Marca").value;
    descuentoPorLampara = 0;
    TotalAPagar = 0;

    switch (cantidadDeLamparas)
    {
        case 5:
            switch (marca)
            {
                case "ArgentinaLuz":
                    descuentoPorLampara = cantidadDeLamparas * (precioLamparas * 40 / 100);
                    break;
                default:
                    descuentoPorLampara = cantidadDeLamparas * (precioLamparas * 30 / 100);
                    break;
            }
            break;

        case 4:
            switch (marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuentoPorLampara = cantidadDeLamparas * (precioLamparas * 25 / 100);
                    break;
                default:
                    descuentoPorLampara = cantidadDeLamparas * (precioLamparas * 20 / 100);
                    break;
            }
            break;

        case 3:
            switch (marca)
            {
                case "ArgentinaLuz":
                    descuentoPorLampara = cantidadDeLamparas * (precioLamparas * 15 / 100);
                    break;
                case "FelipeLamparas":
                    descuentoPorLampara = cantidadDeLamparas * (precioLamparas * 10 / 100);
                    break;
                default:
                    descuentoPorLampara = cantidadDeLamparas * (precioLamparas * 5 / 100);
            }            
            break;
        
        case 2:
        case 1:
        case 0:
            switch (marca)
            {
                default:
                    descuentoPorLampara =  cantidadDeLamparas * (precioLamparas * 0 / 100);
                    break;
            }
            break;
        
        default:
            switch (marca) {
                default:
                    descuentoPorLampara = cantidadDeLamparas * (precioLamparas * 50 / 100);
                    break;
            }
            break;
    }

    TotalAPagar = precioLamparas * cantidadDeLamparas - (descuentoPorLampara);

    if (TotalAPagar > 120)
    {
        TotalAPagar = TotalAPagar + (TotalAPagar * 10 / 100);
        mensaje = "IIBB Usted pago $" + TotalAPagar.toFixed(2);
        document.getElementById("txtIdprecioDescuento").value = mensaje;
    }
    else
    {
        mensaje = "Usted debe pagar la suma de $" + TotalAPagar.toFixed(2);
        document.getElementById("txtIdprecioDescuento").value = mensaje;
    }
} //Fin de la funcion.