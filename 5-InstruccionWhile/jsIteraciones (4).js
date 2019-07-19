function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	//while(numero<0 || numero>10)
	while(!(numero>0 && numero<10))
	{
		numero = prompt("error, ingrese un número entre 0 y 10.");
	}
	console.log(numero);

}//FIN DE LA FUNCIÓN