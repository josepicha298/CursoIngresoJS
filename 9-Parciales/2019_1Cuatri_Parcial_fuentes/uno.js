
function mostrar()
{
	/*mostrar el número máximo y el número mínimo ingresado.*/
	var numeroMaximo;
    var numeroMinimo;
    var contador;

    contador++;
    	if(contador==1 || numeroMaximo<numero)
    	{
    		numeroMaximo=numero;
    			
    	}

    	if(contador==1 || numeroMinimo>numero)
    	{
    		numeroMinimo=numero;
    	}

    /*
	forma de pago(efectivo , tarjeta o QR)
	la forma de pago más utilizada.
	*/
	var formaDePago;
	var respuesta;
	var contadorQR;
	var contadorEfectivo;
	var contadorTarjeta;
	var formaDePagoMasUtilzada;

	contadorQR=0;
	contadorEfectivo=0;
	contadorTarjeta=0;

	respuesta="si";

	while(respuesta=="si")
	{
		formaDePago=prompt("forma de pago");
		while(!isNaN(formaDePago) || formaDePago!="qr" && formaDePago!="tarjeta" && formaDePago!="efectivo")
		{
			formaDePago=prompt("forma de pago");
		}

		switch(formaDePago)
		{
			case "qr":
				contadorQR++;
				break;
			case "efectivo":
				contadorEfectivo++;
				break;
			default:
				contadorTarjeta++;
				break;
		}

		if(contadorQR>contadorTarjeta && contadorQR>contadorEfectivo)
		{
			formaDePagoMasUtilzada="qr";
		}else
			{
				if(contadorTarjeta>contadorEfectivo)
				{
					formaDePagoMasUtilzada="tarjeta";
				}else
					{
						formaDePagoMasUtilzada="efectivo";
					}
			}

		respuesta=prompt("si");
	}//fin de while

	

}
