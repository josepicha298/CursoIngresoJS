function mostrar()
{
//tomo la edad  
    var Mes = document.getElementById("mes").value;
    /*switch(Mes)
    {
        case "Enero":
        case "Marzo":
        case "Abril":
        case "Mayo" :
        case "Junio":
        case "Julio" :
        case "Agosto" :
        case "Septiembre":
        case "Octubre" :
        case "Noviembre":
        case "Diciembre" :
        alert("Este mes tiene 30 o más días");
        break;
        default:
            alert("Este mes no tiene más de 29 días.");
    }*/

    switch(Mes)
    {
        case "Febrero":
        {
            alert("Este mes no tiene más de 29 días")
            break;
        }
        default:
        {
            alert("Este mes tiene 30 o más días");
            break;
        }
    }
	


}//FIN DE LA FUNCIÓN