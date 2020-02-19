function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;


	while (contador<5)
	{
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador++;
	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador /contador;


}//FIN DE LA FUNCIÓN