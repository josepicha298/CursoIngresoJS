function mostrar()
{
//tomo la edad  
     var Mes = document.getElementById('mes').value;

     /*switch(Mes)
     {
        case "Enero" :
        
        case "Febrero" :
        
        case "Marzo" :
        
        case "Abril" :
        
        case "Mayo" :
               
        case "Junio" :
        {
        alert("Falta para el invierno.");
        break;
        }

        case "Julio" :
        
        case "Agosto" :
        {
        alert("Abrigate que hace frio.");
        break;
        }

        case "Septiembre" :
        
        case "Octubre" :
        
        case "Noviembre" :
        
        case "Diciembre" :
        {
        alert("ahora calor!!!.");
        break;
        }
     }*/

     switch(Mes)
     {
        case "Julio" :
        
        case "Agosto" :
        {
        alert("Abrigate que hace frio.");
        break;
        }

        case "Septiembre":
        case "Octubre":
        case "Diciembre":
        {
            alert("Ya pasamos el frio, ahora calor!!!");
            break;
        }

        default:
        {
            alert("Falta para el invierno.");
            break;
        }
     }




}//FIN DE LA FUNCIÓN