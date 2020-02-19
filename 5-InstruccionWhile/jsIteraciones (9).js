function mostrar()
{


	var contador=0;
	var maximo;
	var minimo;
	var respuesta="si";

	while(respuesta!="no")
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(contador==1)
		{
			maximo=numeroIngresado;
			maximo=numeroIngresado;
		}else
		{
			if(numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
			if(numeroIngresado>minimo)
			{
				minimo=numeroIngresado;
			}

		}
		respuesta=prompt("Ingrese no, para salir");
	}
	document.getElementById("")

	/*var contador=0;
	// declarar variables
	
	var respuesta="s";


	var numero;
	var maximo;
	var minimo;

	do
	{ 
	numero =parseInt(prompt("Ingrese un numero"));
	contador++;


	if ( contador == 1)
	{
	 maximo = numero;
	 minimo = numero;
    }
	if(numero >maximo)
	{
	maximo = numero;
    }
	if( numero < minimo)
	{
	minimo = numero;
    }
    respuesta = prompt("Desea continuar?");
    } while(respuesta == "s");
			
    document.getElementById("maximo").value = maximo;
    document.getElementById("minimo").value = minimo;*/

}//FIN DE LA FUNCIÓN