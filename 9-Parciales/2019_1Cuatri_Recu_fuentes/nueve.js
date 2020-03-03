function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var notaFinal;
	var respuesta;
	var contadorDeVaronesAprobado;
	var promedioDeNotasMenoresEdad
	

	contadorDeVaronesAprobado=0;
	respuesta="si"

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("Ingrese nombre");
		}

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad) || edad<0 || edad>100)
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese sexo f o m");
		while(!isNaN(sexo) || sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese sexo");
		}

		notaFinal=prompt("Ingrese nota");
		notaFinal=parseInt(notaFinal);
		while(isNaN(notaFinal) || notaFinal<0 || notaFinal>10)
		{
			notaFinal=prompt("Ingrese nota");
			notaFinal=parseInt(notaFinal);
		}

		if(sexo=="f" && notaFinal>5)
		{
			contadorDeVaronesAprobado++;
		}

		if(edad<13)
		{
			
		}
		
		respuesta=prompt("si");

	}//termina while
	

		console.log(nombre);
		console.log(edad);
		console.log(sexo);
		console.log(notaFinal);
		console.log("contador"+contadorDeVaronesAprobado);
		document.write("La cantidad de varones aprobados son: "+contadorDeVaronesAprobado);		

}
