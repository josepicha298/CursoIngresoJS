/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var primerNumero; //las variables 
	var segundoNumero;
	var resultado;

	primerNumero=document.getElementById("numeroUno").value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=document.getElementById("numeroDos").value;
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero+segundoNumero;
	console.log("hola "+resultado);
	//alert("La suma es "+resultado);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=document.getElementById("numeroUno").value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=document.getElementById("numeroDos").value;
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero-segundoNumero;
	alert("La suma es "+resultado);
	
}

function multiplicar()
{ 
	var numerouno;
	var numerodos;
	var multiplicar;

	numerouno=parseInt(document.getElementById("numeroUno").value);
	
	numerodos=parseInt(document.getElementById("numeroDos").value);

	multiplicar=numerouno*numerodos;
	alert("La multiplicacion es "+multiplicar);
	
}

function dividir()
{
	var numerouno;
	var numerodos;
	var dividir;

	numerouno=document.getElementById("numeroUno").value;
	numerouno=parseInt(numerouno);
	numerodos=document.getElementById("numeroDos").value;
	numerodos=parseInt(numerodos);

	dividir=numerouno/numerodos;
	alert("La division es "+dividir);
	
}

