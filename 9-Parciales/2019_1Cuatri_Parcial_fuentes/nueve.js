function mostrar()
{
	var nombrePais;
	var cantidadHabitantes;
	var temperatura;
	var respuesta;
	var cantidadTemperaturaPares;
	var nombrePaisMenosHabitantes;
	var contador;
	var menorHabitantes;
	var cantidadPaisesSuperan40Grados;
	var promedioHabitantesPaises;
	var acumuladorPaisesIngresados;
	var temperaturaMinima;
	var temperaturaMinimaPais;

	cantidadTemperaturaPares=0;
	contador=0;
	cantidadPaisesSuperan40Grados=0;
	acumuladorPaisesIngresados=0;

	respuesta="s";

	while(respuesta=="s")
	{
		nombrePais=prompt("ingresar el nombre de un país");
		while(!isNaN(nombrePais))
		{
			nombrePais=prompt("ingresar el nombre de un país");
		}

		cantidadHabitantes=prompt("cantidad de habitantes en millones entre 1 y 7000");
		cantidadHabitantes=parseInt(cantidadHabitantes);
		while(isNaN(cantidadHabitantes) || cantidadHabitantes<1 || cantidadHabitantes>7000)
		{
			cantidadHabitantes=prompt("cantidad de habitantes en millones entre 1 y 7000");
			cantidadHabitantes=parseInt(cantidadHabitantes);
		}

		temperatura=prompt("temperaruta mínima que se registra en su territorio(entre -50 y 50");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura) || temperatura<-50 || temperatura>50)
		{
			temperatura=prompt("temperaruta mínima que se registra en su territorio(entre -50 y 50");
			temperatura=parseInt(temperatura);
		}

		if(temperatura%2==0)
		{
			cantidadTemperaturaPares++;
		}

		contador++;
		if(contador==1 || cantidadHabitantes<menorHabitantes)
		{
			menorHabitantes=cantidadHabitantes;
			nombrePaisMenosHabitantes=nombrePais;
		}

		if(temperatura>40)
		{
			cantidadPaisesSuperan40Grados++;
		}
		acumuladorPaisesIngresados=acumuladorPaisesIngresados+cantidadHabitantes

		if(contador==1 || temperatura<temperaturaMinima)
		{
			temperaturaMinima=temperatura;
			temperaturaMinimaPais=nombrePais
		}

		respuesta=prompt("s");

	}//fin de while

	promedioHabitantesPaises=acumuladorPaisesIngresados/contador;

		document.write("La cantidad de temperaturas pares es: "+cantidadTemperaturaPares);
		document.write("<br> El nombre del pais con menos habitantes es: "+nombrePaisMenosHabitantes);
		document.write("<br>cantidad de paises que superan los 40 grados son: "+cantidadPaisesSuperan40Grados);
		document.write("<br>el promedio de habitantes entre los paises ingresados es: "+promedioHabitantesPaises);
		document.write("<br>la temperatura mínima ingresada "+temperaturaMinima+", y nombre del pais que registro esa temperatura "+temperaturaMinimaPais);

}
