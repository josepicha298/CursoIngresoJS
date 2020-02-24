function mostrar()
{

	var numero;
	var contador=0;
	var respuesta="si";
	var positivo;
	var negativo;
	var sumaNegativo=0;
	var sumaPositivo=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCero=0;

	while(respuesta=="si")
	{
		numero=parseInt(prompt("ingreso un numero"));

		
		if(numero<0)
		{
			negativo=numero;
			sumaNegativo=sumaNegativo-negativo;
			contadorNegativo=contadorNegativo+1;
			
		}
		else if(numero>0)
			{
				positivo=numero;
				sumaPositivo=sumaPositivo+positivo;
				contadorPositivo=contadorPositivo+1;
			}

			if(numero==0)
			{
				contadorCero++;
			}
		
		respuesta=prompt("Quiere ingresar otro numero escriba si");
	}
	document.write("La suma de los numeros positivos es: "+sumaPositivo);
	document.write(" <br> "); 
	document.write("La suma de los numeros negativos es: "+sumaNegativo+" <br> ");
	document.write("La cantidad de numeros positivos ingresado es: "+contadorPositivo+" <br> ");
	document.write("La cantidad de numeros negativos ingresado es: "+contadorNegativo+" <br> ");
	document.write("La cantidad de ceros ingresado es: "+contadorCero+" <br> ");


}//FIN DE LA FUNCIÓN