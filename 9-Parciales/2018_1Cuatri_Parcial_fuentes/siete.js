function mostrar()
{

  var nota;
  var sexo;
  var acumuladornotas = 0;
  var promedio;
  var notabaja;
  var sexobajo;
  var contadorvaronesmayor=0;
   

  for(var i=0; i<5; i++)
  {
    nota = parseInt(prompt("Ingrese nota 0-10"));
    //mintras no sea valida
    //while(!(nota >=0 && nota <=10))
    //mientras la nota sea invalida
    while(nota < 0 || nota > 10 || isNaN(nota))
    {
      nota = prompt( "Error. Reinngrese su nota. entre a y 10")
    }
    //ya tengo la nota validada
    sexo = prompt("Ingrese sexo:")//.toLowerCase();
    //sexo=sexo.toLowerCase(); pasar a mayuscula a minuscula

    //mientras es sexo no sea valido
    while(!(sexo == "m" || sexo == "f" || sexo == "M" || sexo == "F"))
    {
      //mientras el sexo sea invalido
      //while(sexo != "m" && sexo !="f")
      sexo = prompt("Error.Reingrese sexo:")
    }
    //acumuladornotas=acumuladornotas + nota;
    acumuladornotas += nota;
    if(nota<notabaja || i==0)
    {
      notabaja = nota;
      sexobajo = sexo;
    }
    if(sexo == "m" && nota >= 6)
    {
      contadorvaronesmayor++;
    }
    
  }
   promedio = acumuladornotas / 5;
   alert("promedio: " + promedio);
   document.write("promedio: "+promedio+"<br>");
   document.write("notabaja: "+notabaja+ " sexo " +sexobajo +"<br>");
   document.write("la cantidad de varones que tuvieron 6 o mas es: "+contadorvaronesmayor +"<br>");
   


  /*  var nota;
  var sexo;
  var promedio;
  var acumuladorNotas =0;
  var sexoBajo;
  var varones6Mas = 0;
  var notaBaja = 10;
  
  
  for ( var i =0; i <5; i++)
  {  
    nota = parseInt(prompt("Ingrese su nota"));
    while ( nota <0 || nota >10)
    {
      nota = parseInt(prompt("Error. Reingrese su nota. entre 0 y 10."));
    }
      
    sexo = prompt("Ingrese su sexo");
    while ( sexo != "f" && sexo != "m")
    {
      sexo = prompt("Ingrese su sexo. f o m");
    } 
    
  
  if ( nota < notaBaja)
  {
    notaBaja = nota;
    sexoBajo = sexo;
  }
  
    if ( nota >=6 && sexo == "m")
    {
      varones6Mas++;
      
    }  
  
    acumuladorNotas = acumuladorNotas + nota;
   }

   promedio = acumuladorNotas / 5;

  document.write("El promedio de las notas totales es " + promedio + " La nota mas baja es " + notaBaja + " y el sexo de esa nota mas baja es " + sexoBajo + " y la cantidad de varones que tuvieron 6 o mas es " + varones6Mas);*/
}
