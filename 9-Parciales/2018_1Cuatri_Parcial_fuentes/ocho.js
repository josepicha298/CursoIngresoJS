function mostrar()
{
    /*var seguir;
    do
    {
        alert("hola que tal");
        seguir=confirm("quiere continuar quiere que lo saludo de nuevo");

    }while(seguir ==true)*/

    /*var seguir;
    do
    {
        alert("hola que tal");
        
    }while(confirm("quiere continuar quiere que lo saludo de nuevo"))
    var letra;
    var num = parseInt(prompt("Ingrese numero"));

    for(i=-100; i<=100; i++)
    {*/
        //(!(letra>=65 && letra<=90) || (letra>= 97 && letra<=122))
        var letra;
        var num;
        var contadorpar=0;
        var contadorimpar=0;
        var acumpos;
        var acumneg;
        var mayor;
        var menor;
        var mayorle;
        var menorle;
        var promedio=0;
        do
        {
            letra= prompt("Ingrese datos");
            num=parseInt(prompt("Ingrese numero entre -100 y 100:"));
        }while(num < -100 || num>100 || isNaN(num)) 
        {
        num=parseInt(prompt("Error. Reingrese numero entre -100 y 100:"))
        }
        //me fijo la paridad
        if(nem % 2 == 0)
        {
            contapar++;

        }
        else
        {
            contadorimpar++

        }

        if(num>0)
        {
            acumpos= acumpos + num;
        }
        if(nem>mayour || flag==0)
        {
            mayor = numero;
            mayorle = letra;
        }

        if(num<menor)
        {
            menor=num;
            menorle=letra
        }

    

}
