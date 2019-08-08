function mostrar()
{
  var nota;
  var sexo;
  var promedio;
  var acumuladorNotas =0;
  var sexoBajo;
  var sexoAlto;
  var varones6Mas = 0;
  var notaBaja = 10;
  
  
  for ( var i =0; i <5; i++)
  {  
    nota = parseInt(prompt("Ingrese su nota"));
    while ( nota <0 || nota >10)
    {
      nota = prompt("Ingrese su nota. entre 0 y 10.")
    }
      
    sexo = prompt("Ingrese su sexo");
    while ( sexo != "f" || sexo != "m")
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

  document.write("El promedio de las notas totales es " + promedio + " La nota mas baja es " + notaBaja + " y el sexo de esa nota mas baja es " + sexoBajo + " y la cantidad de varones que tuvieron 6 o mas es " + varones6Mas); 
}
