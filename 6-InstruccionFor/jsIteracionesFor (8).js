/*para la gestion de un hotel, ingresar los siguientes datos validados  de una reserva
nombre del huesped
cantida de personas
cantida de dia de estadia
forma de pago(efectivo, tarjeta o QR)

informar al huesped que trajo mas personas en una sola reserva.
la cantidad de personas que se quedaron mas dias
la forma de pago mas utilizada.
el promedio de cantidad de dias por reserva*/
function mostrar()
{

	var nombre;
	var nombreDelhuesped;
	var cantidadDepersonas;
	var cantidadDediadeEstadia;
	var formaDepago;
	var respuesta="si";
	
	var maximocantidadDepersonas;
	var maximocantidadDehuesped;
	var maximodedias;
	var maximodediascantidaddepersonas;
	var contadorDereserva=0;
	var contadorfete=0;
	var contadorQR=0;
	var contadorTarjeta=0;
	var acumuladordedias=0;
	var promedio;
	var formadepagomasUsada;

	contadorDereserva=0;
	//nombre=prompt("Ingrese nombre");
	

	while(respuesta=="si")
	{
		/*nombre=prompt("ingrese nombre");
		while(!isNaN(nombre))*/
		{
			nombre=prompt("ingrese nombre");
		}
		cantidadDepersonas=parseInt(prompt("Ingrese cantidad de personas"));
		while(isNaN(cantidadDepersonas) || cantidadDepersonas<0)
		{
			cantidadDepersonas=parseInt(prompt("Ingrese cantidad de personas"));
		}

		cantidadDediadeEstadia=parseInt(prompt("Ingrese cantidad de dias"));
		while(isNaN(cantidadDediadeEstadia) || cantidadDediadeEstadia<0)
		{
			cantidadDediadeEstadia=parseInt(prompt("Ingrese cantidad de dias"));
		}

		formaDepago=prompt("Forma de pago");
		while(!(isNaN(formaDepago) || formaDepago!="efectivo" && formaDepago!="tarjeta" && formaDepago!="QR"))
		{
			formaDepago=prompt("forma de pago");
		}

		if(contadorDereserva==1 || maximocantidadDepersonas<cantidadDepersonas)
		{
			maximocantidadDepersonas=cantidadDepersonas;
			maximocantidadDehuesped=nombre;

		}

		if(contadorDereserva==1 || maximodedias<cantidadDediadeEstadia)
		{
			maximodedias=cantidadDediadeEstadia;
			maximocantidadDepersonas=cantidadDepersonas;

		}
		switch(formaDepago)
		{
			case"QR":
			contadorQR=contadorQR +1;
			break;

			case"efectivo":
			contadorfete++;
			break;

			 default:
			 contadorTarjeta++;
			 break;
		}
		respuesta=prompt("quiere hacer otra resercva si no");
		acumuladordedias=acumuladordedias+cantidadDediadeEstadia;

	}// fin de while

	promedio=acumuladordedias/contadorDereserva;
	
	if(contadorQR> contadorfete && contadorQR>contadorTarjeta)
	{
		formadepagomasUsada="QR";
	}else
	{
		if(contadorTarjeta>contadorfete)
		{
			formadepagomasUsada="tarjeta";	
		}
		else
		{
			formadepagomasUsada="efectivo";
		}
	}
	document.write("la forma de pago mas utilizada es: "+formadepagomasUsada+"<br>"+"el promedio de cantidad de dias por reserva es: "+promedio);
	
	/*while(contador<cantidadDepersonas)
	{
			contador++;
		    nombreDelhuesped=prompt("Ingrese nombre");
						
	}
	cantidadDediadeEstadia=parseInt(prompt("Ingrese la cantidad de dias"));
	cantidadDediadeEstadia=
	formaDepago=prompt("Ingrese forma de pago. efectivo, tarjeta o QR");*/


}//FIN DE LA FUNCIÓN