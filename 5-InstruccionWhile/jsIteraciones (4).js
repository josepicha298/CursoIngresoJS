function mostrar()
{

	/*var numero=parseInt(prompt("Ingrese un numero entre 0 y 9"));
	while(!(numero>=0 && numero<10))
	{
		numero=parseInt(prompt("Error. ingres un numero entre 0 y 9"));
	}
	document.getElementById("Numero").value=numero;*/

	var numero = parseInt(prompt("ingrese un número entre 0 y 9."));
	var valordeverdad=isNaN(numero);
	//while(numero>=0 && numero<10) mal forma logica de if
	//while(!(numero>=0 && numero<10))  Funciona profe usa 3 veces el procesador
	while (isNaN(numero) || numero<0 || numero>9)
	 {
		
		numero = parseInt(prompt("Error. Ingrese un número entre 0 y 9."));
	}
	
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN