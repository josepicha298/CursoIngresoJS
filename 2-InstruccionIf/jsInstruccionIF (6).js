function mostrar()
{
    //tomo la edad
    /*var Edad;
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
    }*/
    
    
    var Edad;
    Edad=document.getElementById("edad").value;

    if(Edad>17)
    {
        alert("Mayor de edad");
    }
    else if(Edad>=13 && Edad<=17)
    {
        alert("Adolecente");
    }
    else
    {
        alert("niño");
    }

}//FIN DE LA FUNCIÓN