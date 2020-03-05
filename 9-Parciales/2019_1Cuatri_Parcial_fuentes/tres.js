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
	var cantidaDePersonas;
	var cantidadDeDia;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDeDias;
	var contador;
	var contadorQR;
	var contadorEfectivo;
	var contadorTarjeta;
	var formaDePagoMasUtilizado;
	var maximoDePersonasNombre;

	contador=0;
	contadorQR=0;
	contadorEfectivo=0;
	contadorTarjeta=0;

	respuesta="si";

	while(respuesta=="si")
	{
		nombre=prompt("ingresar nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("ingresar nombre");
		}

		cantidaDePersonas=prompt("ingresar cantida de personas");
		cantidaDePersonas=parseInt(cantidaDePersonas);
		while(isNaN(cantidaDePersonas) || cantidaDePersonas<1)
		{
			cantidaDePersonas=prompt("ingresar cantida de personas");
			cantidaDePersonas=parseInt(cantidaDePersonas);
		}

		cantidadDeDia=prompt("ingresar cantida de dia");
		cantidadDeDia=parseInt(cantidadDeDia);
		while(isNaN(cantidadDeDia) || cantidadDeDia<1)
		{
			cantidadDeDia=prompt("ingresar cantida de dia");
			cantidadDeDia=parseInt(cantidadDeDia);
		}

		formaDePago=prompt("ingresar forma de pago");
		
		while(!isNaN(formaDePago) || formaDePago!="qr" && formaDePago!="tarjeta" && formaDePago!="efectivo")
		{
			formaDePago=prompt("ingresar forma de pago");
		}

		contador++;
		if(contador==1 || maximoDePersonas<cantidaDePersonas)
		{
			maximoDePersonas=cantidaDePersonas;
			maximoDePersonasNombre=nombre;
		}

		if(contador==1 || maximoDeDias<cantidaDePersonas)
		{
			maximoDeDias=cantidaDePersonas;
		}

		switch(formaDePago)
		{
			case "qr":
				contadorQR++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			default:
				contadorEfectivo++;
				break;		
		}
		respuesta=prompt("si");
	}//fin del while

	if(contadorQR>contadorTarjeta && contadorQR>contadorEfectivo)
	{
		formaDePagoMasUtilizado="QR";
	}else
		{
			if(contadorTarjeta>contadorEfectivo)
			{
				formaDePagoMasUtilizado="tarjeta";
			}else
				{
					formaDePagoMasUtilizado="efectivo";
				}
		}

	    
		document.write("<br> nombre del huesped con mas invitados: "+maximoDePersonasNombre);
	    document.write("<br> la cantidad de personas que se quedaron más días es: "+maximoDeDias);
		document.write("<br> forma de pago: "+formaDePagoMasUtilizado);
		document.write("<br> promedio: "+promedio);

}
