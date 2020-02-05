/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingresoImporte;
	var porcentaje=20;
	var reSultado;

	ingresoImporte=parseInt(document.getElementById("importe").value);

	reSultado=ingresoImporte*porcentaje/100;
	reSultado=ingresoImporte-reSultado;

	document.getElementById("resultado").value=reSultado;
	
	
}
