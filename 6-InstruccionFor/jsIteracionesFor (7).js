function mostrar()
{
	var cantidadDePersonas;
	var contador;
	var respuesta;
	var maximo;
	var minimo;

	contador=0;
	respuesta="si";

	

	while(respuesta=="si")
	{
		contador++;
		cantidadDePersonas=prompt("Ingrese cantidad de personas");
		cantidadDePersonas=parseInt(cantidadDePersonas);
		while(isNaN(cantidadDePersonas) || cantidadDePersonas<0)
		{
			cantidadDePersonas=prompt("Ingrese cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}
		if(contador==1)
		{
			maximo=cantidadDePersonas;
			minimo=cantidadDePersonas;
		}else
			{
				if(maximo<cantidadDePersonas)
				{
					maximo=cantidadDePersonas;
				}else
					{
						minimo=cantidadDePersonas;
					}
			}
		respuesta=prompt("Quiere volver a ongresar cantidad de persona escriba si");
	}
	document.write("La cantidad de personas ingresadas son: "+cantidadDePersonas +"<br>"+
		"la cantidad maxima de personas ingresadas es: "+maximo+"<br>"+
		"la cantidad minima de personas ingresadas es: "+minimo);


}//FIN DE LA FUNCIÓN