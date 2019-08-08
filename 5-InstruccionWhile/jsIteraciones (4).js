function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	//while(numero<0 || numero>10)
	while(!(numero>=0 && numero<10))
	{
		numero = prompt("error, ingrese un número entre 0 y 10.");
	}
	document.getElementById("Numero").value=numero;

	/*var numero = parseInt(prompt("ingrese un número entre 0 y 9."));
	while (numero < 0 || numero >9 || isNaN(numero) ) {
		
		numero = parseInt(prompt("Error. Ingrese un número entre 0 y 9."));
	}
	
	document.getElementById("Numero").value = numero;*/

}//FIN DE LA FUNCIÓN