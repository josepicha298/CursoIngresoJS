function mostrar()
{
   //tomo la edad
   var Edad;
   var estadocivil;

   Edad=document.getElementById("edad").value;
   estadocivil=document.getElementById("estadoCivil").value;


   /*if(Edad <=18)
    {
        if(estadocivil == "Casado")
          alert("Es muy pequeño para NO ser soltero");       
    }
      
     if(Edad <=18)
    {
        if(estadocivil == "Divorciado")
          alert("Es muy pequeño para NO ser soltero");       
    }


    if(Edad<18)
    {
      if(estadocivil!="Soltero")
      {
        alert("Es muy chico");
      }
    }*/

   
   if(Edad<18 && estadocivil!="Soltero")
   {
       alert("Es muy pequeño para NO ser soltero");
   }

}//FIN DE LA FUNCIÓN


