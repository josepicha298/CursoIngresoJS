function mostrar()
{
//tomo la edad  
    var mesDelano = document.getElementById('mes').value;

    //alert (mesDelAño);
    /*switch(mesDelano)
    {
    
        case "Abril" :
        case "Junio" :  
        case "Septiembre" :  
        case "Noviembre" :
        {
        alert("Si tiene 30 días.");
        break;
        }
            
        case "Enero" :
        case "Marzo" :
        case "Mayo" :
        case "Julio" :
        case "Agosto" :
        case "Octubre" :
        case "Diciembre" :
        {
        alert("Si tiene 31 días.");
        break;
        }

        default:
        {
        alert("Si tiene 28 días.");
        break;
        }
    }*/

    switch(mesDelano)
    {
        case "Febrero":
        {
            alert("Si tiene 28 días.");
            break;
        }

        case "Abril" :
        case "Junio" :  
        case "Septiembre" :  
        case "Noviembre" :
        {
            alert("Si tiene 30 días.");
            break;
        }

        default:
        {
           alert("Si tiene 31 días.");
           break; 
        }

    }

   
}//FIN DE LA FUNCIÓN