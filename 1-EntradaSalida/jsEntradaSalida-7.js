/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numerouno;
    var numerodos;
    var sumar;

    numerouno=document.getElementById("numeroUno").value;
    numerouno=parseInt(numerouno);
    
    numerodos=document.getElementById("numeroDos").value;
    numerodos=parseInt(numerodos);

    sumar = numerouno + numerodos;
    alert(sumar);
}

function restar()
{
    var numerouno;
    var numerodos;
    var restar;

    numerouno=document.getElementById("numeroUno").value;
    numerouno=parseInt(numerouno);

    numerodos=document.getElementById("numeroDos").value;
    numerodos=parseInt(numerodos);
    restar = numerouno - numerodos;
    alert(restar);
	
}

function multiplicar()
{ 
    var numerouno;
    var numerodos;
    var multiplicar;

    numerouno=document.getElementById("numeroUno").value;
    numerouno=parseInt(numerouno);

    numerodos=document.getElementById("numeroDos").value;
    numerodos=parseInt(numerodos);
    multiplicar = numerouno * numerodos;
    alert(multiplicar);
	
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
    dividir = numerouno / numerodos;
	alert(dividir);
}

