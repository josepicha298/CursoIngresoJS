function mostrar()
{
    var precio = prompt("Ingrese precio");
    var porcentaje = prompt("Ingrese procentaje");
    var descuento;
    descuento = precio * porcentaje /100;
    descuento = precio - descuento;
    document.getElementById("elPrecioFinal").value=descuento;

}
