function mostrar()
{
    //tomo la edad  
    var Edad;
    Edad = document.getElementById("edad").value;

    if(Edad >= 18)
    {
        alert("mayor de edad")
    }
    if(Edad >= 13)  
    {
      if(Edad <= 17)
      alert("adolecente")
    }

    if(Edad <= 13)
    {
        alert("niño")
    }




}//FIN DE LA FUNCIÓN