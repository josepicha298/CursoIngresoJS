/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingresoSueldo;
	var resultado;

	ingresoSueldo=document.getElementById("sueldo").value;
	ingresoSueldo=parseInt(ingresoSueldo);

	resultado=ingresoSueldo*10/100;
	resultado=ingresoSueldo+resultado;
	document.getElementById("resultado").value=resultado;
	
	
}
