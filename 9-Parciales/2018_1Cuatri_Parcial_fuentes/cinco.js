function mostrar()
{
    var datos = prompt(" ingresar un planeta del sistema solar");

    switch(datos)
     {
        case "tierra" :
           alert( "acá vivimos");
           break;
        case "mercurio" :
        case "venus" :
           alert("acá hace más calor");
           break;
        case "nepturno":
        case "pluton":
           alert("acá hace más frio");
           break;
           default:
              alert("los planetas se ingresan en minúscula");
        
     }           
}
