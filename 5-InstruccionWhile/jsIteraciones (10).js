function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var contadorPares;
	var negativo;
	var positivo;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var promedioPositivo;
	var promedioNegativo
	var diferenciaNegativosPositivos; 

	positivo=0;
	negativo=0;
	contadorPares=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	promedioPositivo=0;
	promedioNegativo=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(numeroIngresado<0)
		{
			negativo=negativo-numeroIngresado;
			cantidadNegativos++;
		}else if(numeroIngresado>0)
			{
				positivo=positivo+numeroIngresado;
				cantidadPositivos++;
			}else
				{
					cantidadCeros++;
				}

		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}

		respuesta=prompt("si");
	}//fin del while

	promedioPositivo=positivo/cantidadPositivos;
	promedioNegativo=negativo/cantidadNegativos;
	diferenciaNegativosPositivos=positivo+negativo;

	if(numeroIngresado==0)
	{
		contadorPares=0;
	}
	document.write("La suma de los numeros positivos es: "+positivo);
	document.write("<br> La suma de los numeros negativos es: "+negativo);
	document.write("<br>La cantidad de numeros positivos ingresado es: "+cantidadPositivos);
	document.write("<br>La cantidad de numeros negativos ingresado es: "+cantidadNegativos);
	document.write("<br>La cantidad de ceros ingresado es: "+cantidadCeros);
	document.write("<br> La cantidad de numeros pares ingresado es: "+contadorPares);
	document.write("<br>Promedio de los numeros positivos es: "+promedioPositivo);
	document.write("<br>Promedio de los numeros negativos es: "+promedioNegativo);
	document.write("<br>La diferencia de numeros negativos y positivos es: "+diferenciaNegativosPositivos);


	/*var numero;
	var contador=0;
	var respuesta="si";
	var positivo;
	var negativo;
	var sumaNegativo=0;
	var sumaPositivo=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCero=0;
	var contadorPar=0;
	var promedioPositivo;
	var promedioNegativo=0;
	var diferenciaNegativosPositivos;

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
		if(numero%2==0)
		{
			contadorPar++;
		}	
		
		promedioPositivo=sumaPositivo/contadorPositivo;
		promedioNegativo=sumaNegativo/contadorNegativo;

		respuesta=prompt("Quiere ingresar otro numero escriba si");

	}// Fin de while
		
	diferenciaNegativosPositivos=sumaPositivo+sumaNegativo;
	document.write("La suma de los numeros positivos es: "+sumaPositivo);
	document.write(" <br> "); 
	document.write("La suma de los numeros negativos es: "+sumaNegativo+" <br> ");
	document.write("La cantidad de numeros positivos ingresado es: "+contadorPositivo+" <br> ");
	document.write("La cantidad de numeros negativos ingresado es: "+contadorNegativo+" <br> ");
	document.write("La cantidad de ceros ingresado es: "+contadorCero+" <br> ");
	document.write("La cantidad de numeros pares ingresado es: "+contadorPar+" <br> ");
	document.write("Promedio de los numeros positivos es: "+promedioPositivo+" <br> ");
	document.write("Promedio de los numeros negativos es: "+promedioNegativo+" <br> "+
		"La diferencia de numeros negativos y positivos es: "+diferenciaNegativosPositivos);*/


	/*var contador=0;
    //declarar contadores y variables 
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var numeroIngresado;
    var cantidadNegativos = 0;
    var cantidadPositivos = 0;
    var cantidadCeros = 0;
    var cantidadNumerosPares = 0;
    var promedioNegativos;
    var promedioPositivos;
    var diferenciaNegativosPositivos;
    
    var respuesta="si";

    while(respuesta!="no")
    {

        numeroIngresado = prompt("Ingrese un numero ");
        numeroIngresado = parseInt(numeroIngresado);
        //validar que el dato este correcto
        while (isNaN(numeroIngresado)) {
            numeroIngresado = prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
            numeroIngresado = parseInt(numeroIngresado);
        }

        if(numeroIngresado>0){
            //es positivo
            acumuladorPositivos = acumuladorPositivos + numeroIngresado;
            cantidadPositivos++;
            var resto = numeroIngresado % 2;
            if(resto == 0){
                //es un numero par
                cantidadNumerosPares++;
            }
            console.log("Numero ingresado positivo: "+numeroIngresado);
        }else if (numeroIngresado<0){
            acumuladorNegativos = acumuladorNegativos + numeroIngresado;
            cantidadNegativos++;
            console.log("Numero ingresado negativo: "+numeroIngresado);
        }else{
            cantidadCeros++;
        }

        contador++;
        respuesta = prompt("Desea continuar? Si desea cancelar escriba no");
    
    }//terminamos el bucle


    //Se calculan los promedios
    promedioNegativos = acumuladorNegativos / cantidadNegativos;
    promedioPositivos = acumuladorPositivos / cantidadPositivos;
    diferenciaNegativosPositivos = acumuladorPositivos + acumuladorNegativos;

    document.write("El total de numeros positivos es de :"+acumuladorPositivos +"<br>"+
                    "El total de numeros negativos es de : "+acumuladorNegativos +"<br>"+
                    "El promedio de numeros negativos es de : "+promedioNegativos +"<br>"+
                    "El promedio de numeros positivos es de : "+promedioPositivos +"<br>"+
                    "La cantidad de ceros es de : "+cantidadCeros +"<br>"+
                    "La diferencia de numeros negativos y positivos : "+diferenciaNegativosPositivos);*/


}//FIN DE LA FUNCIÓN