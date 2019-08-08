function mostrar()
{
   /*var sexo = prompt("ingrese f ó m .");
   sexo=sexo.toLowerCase()

    while (sexo != "f" &&  sexo != "m" ) {
	
	 sexo =(prompt("Error. Ingrese un sexo entre f y m."));
    sexo=sexo.toLowerCase()
    } 
     document.getElementById("Sexo").value = sexo;*/


   var sexo = prompt("ingrese f ó m .");

   while(sexo!="f" && sexo!="m")
   {
      sexo = prompt("ingrese el sxo f o m");
   }
   
   document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN