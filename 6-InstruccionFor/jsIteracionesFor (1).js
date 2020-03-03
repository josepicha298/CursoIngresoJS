function mostrar()
{
    /*contador=0;
    for( ; ; )
    {
        if(contador==5)
        break;
        contador++;
        console.log(contador);
    }*/

    /*var contador;
    console.info("inicio", contador);
    for(contador=0 ;contador<5 ;contador++ )
    {
        console.info("inicio", contador);
    }
      console.info("out", contador);*/

      /*var contador;
     
      for(contador=1 ;contador<11 ;contador++ )
    {
         document.write(contador,"<br/>");
    }*/

    var contador;
    var contadorpares;
    var acumulador;
    var maximo;
    var minimo;
    var numeroIngresado;
    var nombre;
    var sexo;
    var maximosexo;
    var maximonombre;
    //inicializaciones
    contador=0;
    acumulador=0;
    contadorpares=0;
    //var bandera=0; //no es importante el valor que tiene

    while(contador<10)
    {
        contador=contador+1;
        numeroIngresado=promt("Ingrese el "+contador+"ª numero");
        numeroIngresado=parseInt(numeroIngresado);
        while(isNaN(numeroIngresado) || numeroIngresado<0 || numeroIngresado<10)
        {
            numeroIngresado=promt("Error ingrese el "+contador+"ª numero");
            numeroIngresado=parseInt(numeroIngresado);
        }
        sexo=promt("ingrese el "+contador+"ª numero");
        while(!isNaN(sexo)|| sexo!="f" && sexo!="m")
        {
            sexo=promt("Error ,ingrese el "+contador+"ª sexo");
        }
        nombre=promt("ingrese el "+contador+"ª nombre");
        //tengo todos los datos

        acumulador=acumulador+numeroIngresado;
        if(numeroIngresado%2==0)
        {
            contadorpares=contadorpares+1;
        }
        /*if(contador==1)
        {
            maximo=numeroIngresado;
            minimo=numeroIngresado;
        }else
        {*/
            if(maximo<numeroIngresado || contador==1)
            {
                maximo=numeroIngresado;
                maximosexo=sexo;
                maximonombre=nombre;
            }
            if(maximo>numeroIngresado || contador==1)
            {
                minimo=numeroIngresado;
            }
      //}

    }
}