/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
	var preciouno;
	var preciodos;
	var preciotres;
	var suma;

	preciouno=parseInt(document.getElementById("PrecioUno").value);
	preciodos=parseInt(document.getElementById("PrecioDos").value);
	preciotres=parseInt(document.getElementById("PrecioTres").value);

	suma=preciouno+preciodos+preciotres;

	alert(suma);
	
}
function Promedio () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var promedio;

	preciouno=parseInt(document.getElementById("PrecioUno").value);
	preciodos=parseInt(document.getElementById("PrecioDos").value);
	preciotres=parseInt(document.getElementById("PrecioTres").value);
	
}
function PrecioFinal () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var suma;
	var porcentaje;
	var preciofinal;

	preciouno=parseInt(document.getElementById("PrecioUno").value);
	preciodos=parseInt(document.getElementById("PrecioDos").value);
	preciotres=parseInt(document.getElementById("PrecioTres").value);
	
	suma=preciouno+preciodos+preciotres;
	preciofinal

}