function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var contadorNumerosPares;
	var contadorNumerosImpares;
	var contadorCeros;
	var numeroPositivos;
	var contadorPositivos;
	var promedioNumeroPostitivo=0;
	var numeroNegativos;
	var numeromaximo;
	var contador;
	var letraMaxima;
	var numerominimo;
	var letraMinimo;

	contadorNumerosPares=0;
	contadorNumerosImpares=0;
	contadorCeros=0;
	numeroPositivos=0;
	contadorPositivos=0;
	numeroNegativos=0;
	contador=0;

	respuesta="s";

	while(respuesta=="s")
	{
		letra=prompt("Ingrese letra");
		while(!isNaN(letra))
		{
			letra=prompt("Ingrese letra");
		}

		numero=prompt("Ingrese numero entre -100 y 100");
		numero=parseInt(numero);
		while(isNaN(numero) || numero<-100 || numero>100)
		{
			numero=prompt("Ingrese numero entre -100 y 100");
			numero=parseInt(numero);
		}

		if(numero%2==0)
		{
			contadorNumerosPares++;
		}else
			{
				contadorNumerosImpares++;
			}
		if(numero==0)
		{
			contadorCeros++;
		}

		if(numero>0)
		{
			numeroPositivos=numeroPositivos+numero
			contadorPositivos++;
		}	

		if(numero<0)
		{
			numeroNegativos=numeroNegativos+numero;
		}

		contador++;
		if(contador==1 || numero>numeromaximo)
    	{
    		numeromaximo=numero; 
    		letraMaxima=letra;   			
    	}
    	if(contador==1 || numero<numerominimo)
    	{
    		numerominimo=numero;
    		letraMinimo=letra;
    	}

		respuesta=prompt("s");
	}//fin del while

	promedioNumeroPostitivo=numeroPositivos/contadorPositivos;

	if(contadorPositivos==0)
	{
		promedioNumeroPostitivo=0;
	}

	document.write("<br>La cantidad de números pares es: "+contadorNumerosPares);
	document.write("<br>La cantidad de números impares es: "+contadorNumerosImpares);
	document.write("<br>La cantidad de ceros es: "+contadorCeros);
	document.write("<br>El promedio de todos los números positivos ingresados es: "+promedioNumeroPostitivo);
	document.write("<br>La suma de todos los números negativos es: "+numeroNegativos);
	document.write("<br>El número máximo es: "+numeromaximo+" y la letra maxima es: "+letraMaxima);
	document.write("<br>El numero minimo es: "+numerominimo+" y la letra minima es: "+letraMinimo);

}
