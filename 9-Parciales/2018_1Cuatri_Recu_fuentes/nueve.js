
function mostrar()
{
	var nombreAnimal;
	var peso;
	var températura;
	var respuesta;
	var cantidadTemperatuPares;
	var maximoPesoAnimal;
	var contador;
	var nombreAnimalMaxPesado;
	var temperaturaMaximaAnimal
	var cantidadAnimalCeroGrado;
	var promedioPesoAnimales;
	var acumuladorPesoAnimales;

	cantidadTemperatuPares=0;
	contador=0;
	cantidadAnimalCeroGrado=0;

	respuesta="s";

	while(respuesta=="s")
	{
		nombreAnimal=prompt("nombre animal");
		while(!isNaN(nombreAnimal))
		{
			nombreAnimal=prompt("nombre animal");
		}

		peso=prompt("Ingrese peso el cual debe ser entre 1 y 1000 y");
		peso=parseInt(peso);
		while(isNaN(peso) || peso<1 || peso>1000)
		{
			peso=prompt("Ingrese peso el cual debe ser entre 1 y 1000 y");
			peso=parseInt(peso);
		}

		températura=prompt("Ingrese températura hábitat (entre -30 y 30)");
		températura=parseInt(températura);
		while(isNaN(températura) || températura<-30 || températura>30)
		{
			températura=prompt("Ingrese températura hábitat (entre -30 y 30)");
			températura=parseInt(températura);
		}

		if(températura%2==0)
		{
			cantidadTemperatuPares++;
		}

		contador++;
		if(contador==1 || peso>maximoPesoAnimal)
		{
			maximoPesoAnimal=peso;
			nombreAnimalMaxPesado=nombreAnimal;
			temperaturaMaximaAnimal=températura;
		}

		if(températura<0)
		{
			cantidadAnimalCeroGrado++;
		}

		acumuladorPesoAnimales=acumuladorPesoAnimales+peso

		
		respuesta=prompt("s");
	}//fin del while

		promedioPesoAnimales=acumuladorPesoAnimales/contador;

		document.write("<br>La cantidad de temperaturas pares "+cantidadTemperatuPares);
		document.write("<br>El nombre "+nombreAnimalMaxPesado+" y temperatura "+temperaturaMaximaAnimal+" del animal más pesado es:"+maximoPesoAnimal);
		document.write("<br>La cantidad de animales que viven a menos de 0 grados "+cantidadAnimalCeroGrado);
		document.write("<br>El promedio del peso de todos los animales "+promedioPesoAnimales);
		document.write("<br>El peso máximo "+maximoPesoAnimal+" y el minimo");

}
