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
	nombre=prompt("Ingrese nombre");
	

	while(respuesta=="si")
	{
		nombre=prompt("ingrese nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("ingrese nombre");
		}
		cantidadDepersonas=parseInt(prompt("Ingrese cantidad de personas"));
		while(isNan(cantidadDepersonas) || cantidadDepersonas<0)
		{
			cantidadDepersonas=parseInt(prompt("Ingrese cantidad de personas"));
		}

		cantidadDediadeEstadia=parseInt(prompt("Ingrese cantidad de personas"));
		while(isNan(cantidadDediadeEstadia) || cantidadDediadeEstadia<0)
		{
			cantidadDediadeEstadia=parseInt(prompt("Ingrese cantidad de personas"));
		}

		formaDepago=parseInt(prompt("Ingrese cantidad de personas"));
		while(isNan(formaDepago) || formaDepago<0)
		{
			formaDepago=prompt("forma de pago");
		}

		if(contadorDereserva==1 || maximocantidadDepersonas<cantidadDepersonas)
		{
			maximocantidadDepersonas=cantidadDepersonas;
			maximocantidadDepersonas=nombre;

		}

		if(contadorDereserva==1 || maximodedias<cantidadDediadeEstadia)
		{
			maximodedias=cantidadDediadeEstadia;
			maximocantidadDepersonas=cantidadDepersonas;

		}
		switch(formaDepago)
		{
			case"qr":
			contadorQR=contadorQR +1;
			break;

			case"efectivo":
			contadorfeta++;
			break;

			 default;
			 contadorTarjeta++;
			 break;
		}

	}
	promedio=acumuladordedias/contadorDereserva;
	if(contadorQR> contadorfete && contadorQR>contadorTarjeta)
	{
		formadepagomasUsada="tarjeta";
	}else
	{
		formadepagomasUsada="efectivo";
	}
	
	/*while(contador<cantidadDepersonas)
	{
			contador++;
		    nombreDelhuesped=prompt("Ingrese nombre");
						
	}
	cantidadDediadeEstadia=parseInt(prompt("Ingrese la cantidad de dias"));
	cantidadDediadeEstadia=
	formaDepago=prompt("Ingrese forma de pago. efectivo, tarjeta o QR");*/


}//FIN DE LA FUNCIÓN