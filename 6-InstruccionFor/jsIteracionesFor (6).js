function mostrar()
{

	var numeroIngresado=parseInt(prompt("Ingrese un numero"));
	var i;
	var bandera=0;
	
	for(i=2;i<numeroIngresado;i++)
	{
		console.log(i);
		if(numeroIngresado%i==0)
		{
			bandera=1;
		}
	}
	if(bandera==0)
	{
		alert("Es primo el numero: "+numeroIngresado);
	}


}//FIN DE LA FUNCIÓN