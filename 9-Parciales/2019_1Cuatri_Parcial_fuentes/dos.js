/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días      maximoDeDias, maximoDeDiasCantidadDePersonas
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDePersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfete;
	var formaDePagoMasUtilizado;

	respuesta="si";
	contador=0;
	contadorQR=0;
	contadorTarjeta=0;
	contadorEfete=0;
	acumulador=0;

	while(respuesta=="si")
	{
		nombre=prompt("ingrese nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("ingrese nombre");
		}
		
		cantidadDePersonas=prompt("Ingrese cantida de personas");
		cantidadDePersonas=parseInt(cantidadDePersonas);
		while(isNaN(cantidadDePersonas) || cantidadDePersonas<1)
		{
			cantidadDePersonas=prompt("Ingrese cantida de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}

		cantidadDeDias=prompt("Ingrese cantida de dias");
		cantidadDeDias=parseInt(cantidadDeDias);
		while(isNaN(cantidadDeDias) || cantidadDeDias<1)
		{
			cantidadDeDias=prompt("Ingrese cantida de dias");
			cantidadDeDias=parseInt(cantidadDeDias);
		}

		formaDePago=prompt("forma de pago");
		while(!isNaN(formaDePago) || formaDePago!="tarjeta" && formaDePago!="qr" && formaDePago!="efectivo")
		{
			formaDePago=prompt("forma de pago");
		}
			console.log("personas "+cantidadDePersonas);
			console.log("dias "+cantidadDeDias);
			console.log("forma de pago es: "+formaDePago);

		
		if(contador==0 || maximoDePersonas<cantidadDePersonas)
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonasNombre=nombre;
		}/*else
			{
				if(maximoDePersonas<cantidadDePersonas)
				{
					maximoDePersonas=cantidadDePersonas;
					maximoDePersonasNombre=nombre;
				}
			}*/
		if(contador==0 || maximoDeDias<cantidadDeDias)
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadDePersonas=cantidadDePersonas;
		}	

		switch(formaDePago)
		{
			case "efectivo":
				contadorEfete++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			default:
				contadorQR++;
				break;		
		}

		acumulador=acumulador+cantidadDeDias;
		contador++;	
		respuesta=prompt("Desea continuar");
	}//termina el while

	//forma de pago más utilizada
	if(contadorEfete>contadorTarjeta && contadorEfete>contadorQR)
	{
		formaDePagoMasUtilizado="efectivo";
	}else
		{
			if(contadorQR>contadorTarjeta)
			{
				formaDePagoMasUtilizado="qr";
			}else
				{
					formaDePagoMasUtilizado="tarjeta";
				}
		}
	promedio=acumulador/contador;

	console.log("El huesped que trajo más personas en una sola reserva es: "
	+maximoDePersonasNombre);
	console.log("Cantidad de personas que se quedaron mas dias es: "+maximoDeDiasCantidadDePersonas);
	console.log("La forma de pago más utilizada es: "+formaDePagoMasUtilizado);

	document.write("<br> nombre del huesped con mas invitados: "+maximoDePersonasNombre);
	document.write("<br> La cantidad: "+maximoDeDiasCantidadDePersonas);
	document.write("<br> forma de pago: "+formaDePagoMasUtilizado);
	document.write("<br> promedio: "+promedio);
  
}
