function mostrar()
{

	/*var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="s";
	var numero;

  do {

	numero = parseInt(prompt("ingrese un numero"));
	
	if (numero < 0) {
		negativo = negativo * numero;
		contador++;
	}
  else {
	positivo = positivo + numero
  } 
   respuesta = prompt("Desea continuar");
  } while ( respuesta == "s");


   document.getElementById('suma').value=positivo;

  if(contador == 0){
	negativo = 0;
  }
   document.getElementById('producto').value=negativo;*/

	/*var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var contadorNega
	
	var respuesta="s";

	do{
		numero=parseInt(prompt("Ingrese un numero"));
		//positivo=positivo+numero;
		//contador++;	
		//respuesta=prompt("Quiere ingresar otro numero?");

		if(numero>0){

			positivo= positivo+numero;
		}
		else
		{
			negativo=negativo*numero;
			contadorNega++;
		}
		respuesta=prompt("Quiere ingresar otro numero?");
	}
	while(respuesta=="s");
	//document.getElementById('suma').value=positivo;
	//document.getElementById('producto').value=negativo;
	if(contadorNega==0){
		negativo=0;
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;*/

	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si";

	while(respuesta=="si")
	{
		numero=parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero=parseInt(prompt("Ingrese un numero"));
		}
		if(numero<0)
		{
			negativo=negativo*numero;
			contador++
		}else
			{
				positivo=positivo+numero;
			}
		respuesta=prompt("Quiere ingresar otro numero")
		respuesta=respuesta.toLowerCase()
	}
	document.getElementById('suma').value=positivo;
	if(contador==0)
	{
		negativo=0;
	}
	document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN