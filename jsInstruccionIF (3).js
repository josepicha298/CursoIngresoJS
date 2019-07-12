function mostrar()
{
   //tomo la edad 
   var Edad;
   Edad = document.getElementById("edad").value;

   if(Edad >= 18)
   {
       alert("sos mayor de edad");
   }

   if(Edad <= 18)
   {
       alert("sos menor de edad");
   }

}//FIN DE LA FUNCIÓN