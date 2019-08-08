function mostrar()
{
//tomo la edad  
    var Edad;
    var estadocivil;
    Edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;
    /*if(Edad >=18 && estadocivil == "Soltero")
    {
           alert("Es soltero y no es menor");       
    }*/
     
     if(Edad >18 && estadocivil == "Soltero")
    {
           alert("Es soltero y no es menor");       
    }

    /*if(!(Edad <18 && estadocivil != "Soltero"))
    {
           alert("Es soltero y no es menor");       
    }*/

    

}//FIN DE LA FUNCIÓN