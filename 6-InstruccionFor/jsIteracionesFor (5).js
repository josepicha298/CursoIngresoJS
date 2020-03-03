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
    var numeroIngreso;
	for(contador=0;contador<10;contador++)
	{
		numeroIngreso=parseInt(prompt("Ingrese numero de repeticiones"));
		console.log("Numero: "+contador);
		if(9==numeroIngreso)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN