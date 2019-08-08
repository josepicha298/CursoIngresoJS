function mostrar()
{	
	var numero;
	var contador = 0;
	var acumulador = 0;
	var respuesta = "s";
	do
	{
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador++;
		respuesta=prompt("quiere ingresar otro numero");
	} 
	while(respuesta=="s")

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN