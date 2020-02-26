function mostrar()
{
    
    /*for(i=0;  ; i++)
    {
	    if(1%2==0)
	    continue;
	    console.log(i)
	    if(i==100)
	    break;
    }*/

    var contador;
    var numeroIngreso=parseInt(prompt("Ingrese numero de repeticiones"));
	for(contador=0;contador<10;contador++)
	{
		console.log("Numero: "+contador);
		if(9==numeroIngreso)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN