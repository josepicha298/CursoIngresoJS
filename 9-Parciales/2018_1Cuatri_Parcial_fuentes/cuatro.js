function mostrar()
{
    var num1;
    var num2;
    var suma;

    num1=prompt("Ingrese numero");
    num2=prompt("Ingrese otro numero");

    if(num1==num2)
    {
        alert(num1 + num2);
    }
    else if(num1>num2)
    {
        alert(num1 - num2);
    }
    else
    {
        suma = parseInt(num1) + parseInt(num2);
        if(suma>10)
        {
            alert("la suma es "+suma+" y supero el 10");
        }
        else
        {
            alert("la suma es " +suma);
        }
    }
}
