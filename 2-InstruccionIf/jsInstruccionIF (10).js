function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.floor(Math.random()*11)+1;
	
	/*if(numero == 9 || numero ==10)
	  {
	     alert("EXCELENTE "+numero);
      }
	 else if(numero > 4) 
	 {
		 alert("APROBÓ "+numero);
	 }
	 else
	 {
		 alert("la proxima se puede "+numero);
	 }*/

	if(numero>8)
	{
		alert("EXCELENTE "+numero);
	}
	else if(numero>4)
	{
		alert("APROBÓ "+numero);
	} 
	else
	{
		alert("Vamos, la proxima se puede "+numero);
	}
	

}//FIN DE LA FUNCIÓN