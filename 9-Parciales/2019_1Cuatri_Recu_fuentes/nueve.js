function mostrar()
{
		var nombre;
		var edad;
		var sexo;
		var notaFinal;
		var respuesta;
		var contadorDeVaronesAprobado;
		var promedioDeNotasMenoresEdad=0;
		var acumuladorNotaDeMenoresEdad;
		var contadorNotasMenoresDeEdad;
		var promedioDeNotasAdolecentes=0;
		var acumuladorNotaDeAdolecentes;
		var contadorDeNotasAdolecentes;
		var promedioDeNotasMayores;
		var contadorDeNotasMayores;
		var acumuladorNotaDeMayores;
		var promedioDeNotasMasculino=0;
		var contadorDeNotasMasculimo;
		var acumuladorNotaMasculino;
		var promedioDeNotasFemenino=0;
		var contadorDeNotasFemenino;
		var acumuladorNotaFemenino;

		contadorDeVaronesAprobado=0;
		contadorNotasMenoresDeEdad=0;
		acumuladorNotaDeMenoresEdad=0;
		contadorDeNotasAdolecentes=0;
		acumuladorNotaDeAdolecentes=0;
		contadorDeNotasMayores=0;
		acumuladorNotaDeMayores=0;
		contadorDeNotasMasculimo=0;
		acumuladorNotaMasculino=0;
		contadorDeNotasFemenino=0;
		acumuladorNotaFemenino=0;

		respuesta="s";

		while(respuesta=="s")
		{
			nombre=prompt("nombre");
			while(!isNaN(nombre))
			{
				nombre=prompt("nombre");
			}

			edad=prompt("edad");
			edad=parseInt(edad);
			while(isNaN(edad) || edad<1 || edad>100)
			{
				edad=prompt("edad");
			}	

			sexo=prompt("sexo");
			while(!isNaN(sexo) || sexo!="f" && sexo!="m")
			{
				sexo=prompt("sexo");
			}	

			notaFinal=prompt("nota final");
			notaFinal=parseInt(notaFinal);
			while(isNaN(notaFinal) || notaFinal<0 || notaFinal>10)
			{
				notaFinal=prompt("nota final");
			}

			if(sexo=="m" && notaFinal>5)
			{
				contadorDeVaronesAprobado++;
			}

			if(edad<18)
			{
				contadorNotasMenoresDeEdad++;
				acumuladorNotaDeMenoresEdad=acumuladorNotaDeMenoresEdad+notaFinal;
			}

			if(edad>12 && edad<18)
			{
				contadorDeNotasAdolecentes++;
				acumuladorNotaDeAdolecentes=acumuladorNotaDeAdolecentes+notaFinal;
			}

			if(edad>18)
			{
				contadorDeNotasMayores++;
				acumuladorNotaDeMayores=acumuladorNotaDeMayores+notaFinal;
			}

			if(sexo=="m")
			{
				contadorDeNotasMasculimo++;
				acumuladorNotaMasculino=acumuladorNotaMasculino+notaFinal;
			}else
				{
					contadorDeNotasFemenino++;
					acumuladorNotaFemenino=acumuladorNotaFemenino+notaFinal;
				}


			respuesta=prompt("s");

		}//fin del while

		if(acumuladorNotaDeMenoresEdad>0)
		{
			promedioDeNotasMenoresEdad=acumuladorNotaDeMenoresEdad/contadorNotasMenoresDeEdad;
		}
		if(acumuladorNotaDeAdolecentes>0)
		{
		promedioDeNotasAdolecentes=acumuladorNotaDeAdolecentes/contadorDeNotasAdolecentes;
		}
		if(acumuladorNotaDeMayores>0)
		{
			promedioDeNotasMayores=acumuladorNotaDeMayores/contadorDeNotasMayores;
		}
		if(acumuladorNotaMasculino>0)
		{
			promedioDeNotasMasculino=acumuladorNotaMasculino/contadorDeNotasMasculimo;
		}
		if(acumuladorNotaFemenino>0)
		{
		promedioDeNotasFemenino=acumuladorNotaFemenino/contadorDeNotasFemenino;
		}	
							
		document.write("<br>La cantidad de varones aprobados es: "+contadorDeVaronesAprobado)
		document.write("<br>El promedio de notas de los menores de edades: "+promedioDeNotasMenoresEdad);
		document.write("<br>El promedio de notas de los adolescentes es: "+promedioDeNotasAdolecentes);
		document.write("<br>El promedio de notas de los mayores es: "+promedioDeNotasMayores);
		document.write("<br>El promedio de notas de los masculinos es: "+promedioDeNotasMasculino);
		document.write("<br>El promedio de notas de las mujeres es: "+promedioDeNotasFemenino);


}
