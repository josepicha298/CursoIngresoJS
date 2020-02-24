function mostrar()
{	
	/*var numero;
	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	do
	{
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador++;
		respuesta=prompt("quiere ingresar otro numero");
	} 
	while(respuesta=="si")

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;*/

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numeroIngresado;
	while(respuesta=="si")
	{
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		respuesta=prompt("quiere ingresar otro numero escriba si");
		acumulador=acumulador+numeroIngresado;
		contador++;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN