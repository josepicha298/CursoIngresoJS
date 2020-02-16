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
	var cantidadlamparas=document.getElementById('Cantidad').value;
	var marca=document.getElementById('Marca').value;
	var preciodescuento;
 	var preciolamparas=35;
 	var descuento;
 	var importefinal;
 	
 	if(cantidadlamparas>5)
 	{
 		descuento=cantidadlamparas*preciolamparas*50/100;
 	}

 	if(cantidadlamparas==5 && marca=="ArgentinaLuz")
 	{
 		descuento=cantidadlamparas*preciolamparas*40/100;
 	}
 	else if(cantidadlamparas==5 && marca!="ArgentinaLuz")
 	{
 		descuento=cantidadlamparas*preciolamparas*30/100;
 	}

 	if((cantidadlamparas==4 && marca=="ArgentinaLuz")  || (cantidadlamparas==4 && marca=="FelipeLamparas"))
 	{
 		descuento=cantidadlamparas*preciolamparas*25/100;
 	}
 	else if((cantidadlamparas==4 && marca!="ArgentinaLuz")  || (cantidadlamparas==4 && marca!="FelipeLamparas"))
 	{
 		descuento=cantidadlamparas*preciolamparas*20/100;
 	}

 	if(cantidadlamparas==3 && marca=="ArgentinaLuz")
 	{
 		descuento=cantidadlamparas*preciolamparas*15/100;
 	}
 	else if(cantidadlamparas==3 && marca=="FelipeLamparas")
 	{
 		descuento=cantidadlamparas*preciolamparas*10/100;
 	}
 	else if((cantidadlamparas==3 && marca!="ArgentinaLuz")  || (cantidadlamparas==3 && marca!="FelipeLamparas"))
 	{
 		descuento=cantidadlamparas*preciolamparas*5/100;
 	}
 	preciodescuento=(cantidadlamparas*preciolamparas)-descuento;
 	document.getElementById('precioDescuento').value=preciodescuento;

 	if(preciodescuento>120)
 	{
 		importefinal=(preciodescuento*10/100)+preciodescuento;
 		alert(importefinal);
  	}

}
