
let opcion = prompt("BIENVENIDOS \nLIQUIDACION TOTAL \n 1. Heladera: $90.000 \n 2. Aire Acondicionado: $80.000 \n 3. Lavarropas: $70.000 \n 4.Termotanque: $60.000 \n 5. Calefactor: $50.000 \n \n -Si usted compra dos productos se le hará un descuento del 10% \n -Si usted compra tres productos se le hará un descuento del 20% \n -Si usted compra más de tres productos se le hará un descuento del 30% \n \n ° presione cualquier letra si desea comprar y luego aceptar ó; \n ° ingrese la palabra (salir) para no continuar con las compras")


while (opcion !=="salir"){
    const precio = (precioUno, precioDos, precioTres, precioCuatro, precioCinco) => precioUno + precioDos + precioTres + precioCuatro + precioCinco
    const mostrarPrecio = precio => alert (precio)

    const descuento = (descuentoUno, descuentoDos, descuentoTres, descuentoCuatro, descuentoCinco) => descuentoUno + descuentoDos + descuentoTres + descuentoCuatro + descuentoCinco
    const mostrarDescuento = descuento => alert (descuento)

    const precioFinal = (precioFinalUno, PrecioFinalDos) => (precioFinalUno + PrecioFinalDos)
    const mostrarPrecioFinal = precioFinal => alert (precioFinal)


    let heladera = prompt("Ingrese (SI ó NO) si desea comprar la Heladera y luego presione aceptar")
    let aire = prompt("Ingrese (SI ó NO) si desea comprar el aire acondicionado y luego presione aceptar")
    let lavarropas = prompt("Ingrese (SI ó NO) si desea comprar el lavarropas y luego presione aceptar")
    let termotanque = prompt("Ingrese (SI ó NO) si desea comprar el termotanque y luego presione aceptar")
    let calefactor = prompt("Ingrese (SI ó NO) si desea comprar el calefactor y luego presione aceptar")

    if (heladera == "si" || heladera == "SI" || heladera == "Si"){
        heladera1 = 90000
        descuentoHeladera1 = 1
    } else {
        heladera1 = 0
        descuentoHeladera1 = 0
    }

    if (aire =="si" || aire == "SI" || aire == "Si"){
        aire1 = 80000
        descuentoAire1 = 1
    } else {
        aire1 = 0
        descuentoAire1 = 0
    }

    if (lavarropas =="si" || lavarropas == "SI" || lavarropas == "SI"){
        lavarropas1 = 70000
        descuentoLavarropas1 = 1
    }else {
        lavarropas1 = 0
        descuentoLavarropas1 = 0
    }

    if (termotanque =="si" || termotanque == "SI" || termotanque == "Si"){
        termotanque1 = 60000
        descuentoTermotanque1 = 1
    }else {
        termotanque1 = 0
        descuentoTermotanque1 = 0
    }

    if (calefactor == "si" || calefactor == "SI" || calefactor == "Si"){
        calefactor1 = 50000
        descuentoCalefactor1 = 1
    } else{
        calefactor1 = 0
        descuentoCalefactor1 = 0
    }


    let heladera2 = heladera1
    let aire2 = aire1
    let lavarropas2 = lavarropas1
    let termotanque2 = termotanque1
    let calefactor2 = calefactor1

    let descuentoHeladera2 = descuentoHeladera1
    let descuentoAire2 = descuentoAire1
    let descuentoLavarropas2 = descuentoLavarropas1
    let descuentoTermotanque2 = descuentoTermotanque1
    let descuentoCalefactor2 = descuentoCalefactor1


    let resultadoPrecio = precio (heladera2, aire2, lavarropas2, termotanque2, calefactor2)
    let resultadoDescuento = descuento (descuentoHeladera2, descuentoAire2, descuentoLavarropas2, descuentoTermotanque2, descuentoCalefactor2)

    let precioNumero = Number(resultadoPrecio)
    let descuentoNumero = Number (resultadoDescuento)

    if (resultadoDescuento == 0){
        descuento1 = 0
    }else if (resultadoDescuento == 1){
        descuento1 = 0
    } else if (resultadoDescuento == 2){
        descuento1 = 0.1
    }else if (resultadoDescuento == 3){
        descuento1 = 0.2
    } else if (resultadoDescuento >= 4){
        descuento1 = 0.3 
    }


    mostrarPrecio("RECIBO \n Heladera: $" + heladera2 + "\n Aire Acondicionado: $" + aire2 + "\n Lavarropas: $" + lavarropas2 + "\n Termotanque: $" + termotanque2 + "\n Calefactor: $" + calefactor2 + "\n \n Total sin descuento: $" + precioNumero + "\n Descuento aplicado: $" + (descuento1 * precioNumero) + "\n \n Precio final con descuento: $" + (precioNumero - (descuento1 * precioNumero)) + "\n IVA 21%: $" + ((precioNumero - (descuento1 * precioNumero)) * 0.21) + "\n Total con IVA: $ " + ((precioNumero - (descuento1 * precioNumero)) * 1.21))
    
    opcion = prompt ("pulse salir para terminar ó pulse cualquier letra para cambiar de comprar")
}