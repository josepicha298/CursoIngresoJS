function mostrar()
{
	var color;
	var numero;
	var respuesta;
	var contadorDeRojo;
	var contadorDeRojoMayor500;
	var contadorDeVehiculoMenor5000;
	var promedioVehiculoIngresado;
	var acumuladorVehiculoIngresado;
	var contador;
	var maximoAuto;
	var colorMasCaro;

	contadorDeRojo=0;
	contadorDeRojoMayor500=0;
	contadorDeVehiculoMenor5000=0;
	acumuladorVehiculoIngresado=0;
	contador=0;

	respuesta="s";

	while(respuesta=="s")
	{
		color=prompt("color");
		while(!isNaN(color) || color!="rojo" && color!="verde" && color!="amarrillo")
		{
			color=prompy("color");
		}

		numero=prompt("Ingrese valor entre 0 y 10000");
		numero=parseInt(numero);
		while(isNaN(numero) || numero<0 || numero>10000)
		{
			numero=prompt("Ingrese valor entre 0 y 10000");
			numero=parseInt(numero);
		}

		switch(color)
		{
			case "rojo":
				contadorDeRojo++;
				break;

		}

		if(color=="rojo" && numero>5000)
		{
			contadorDeRojoMayor500++;
		}else if(numero<5000)
			{
				contadorDeVehiculoMenor5000++;
			}
		contador++;
		acumuladorVehiculoIngresado=acumuladorVehiculoIngresado+numero;	

		if(contador==1 || numero>maximoAuto)
		{
			maximoAuto=numero;
			colorMasCaro=color;
		}

		respuesta=prompt("s");
	}//fin del while

	promedioVehiculoIngresado=acumuladorVehiculoIngresado/contador;

	document.write("La cantida de rojos es: "+contadorDeRojo);
	document.write("<br>La cantidad de rojos con precio mayor a 5000 es: "+contadorDeRojoMayor500);
	document.write("<br>La cantidad de vehiculos con precio inferior a 5000 es: "+contadorDeVehiculoMenor5000);
	document.write("<br>El promedio de todos los vehiculos ingresados es: "+promedioVehiculoIngresado);
	document.write("<br> El mas caro es: "+maximoAuto+" y su color es: "+colorMasCaro);

}
