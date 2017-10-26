total = 0;
contadorZanahoria = 0;
contadorTomate = 0;
contadorLechuga = 0;
contadorBerenjena = 0;
contadorPimiento = 0;
contadorPatata = 0;
contadorBrocoli = 0;
contadorCebolla = 0;
contadorAjo = 0;
contadorPepino = 0;
contadorEspinaca = 0;
contadorMaiz=0;
function venderProducto(producto) {
    if (verContador(producto.id) == 0) {
        aumentarContador(producto.id);
        var carrito = document.getElementById("carrito");
        var capa = document.createElement("div");
        capa.id = producto.id;
        capa.className = "cuadroProducto";
        var divBotones = document.createElement("div");
        var cantidad = document.createElement("p");
        cantidad.textContent = "x" + verContador(producto.id);
        cantidad.id = "cantidad"+producto.id;
        capa.appendChild(cantidad);
        var imagen = document.createElement("img");
        var imagenProducto = producto.getElementsByTagName("img")[0];
        imagen.src = imagenProducto.src;
        imagen.id = imagenProducto.id;
        imagen.className = "producto";
        capa.appendChild(imagen);
        var precio = producto.getElementsByTagName("a")[0].textContent;
        calcularPrecioTotal(precio);
        var botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar Unidad";
        botonBorrar.className = "boton";
        var id=producto.id;
        botonBorrar.onclick = function () {
            eliminarUnidadCarrito(id, precio,capa);
        }
        divBotones.appendChild(botonBorrar);
        var botonBorrarTodo = document.createElement("button");
        botonBorrarTodo.className = "boton";
        botonBorrarTodo.textContent = "Eliminar todo";
        botonBorrarTodo.onclick = function () {
            eliminarTodo(capa, precio);
        }
        divBotones.appendChild(botonBorrarTodo);
        capa.appendChild(divBotones);
        var cantidad = document.createElement("p");
        carrito.insertBefore(capa,carrito.firstChild);
        producto = null;
    } else {
        aumentarContador(producto.id);
        var precio = producto.getElementsByTagName("a")[0].textContent;
        calcularPrecioTotal(precio);
        capa = document.getElementById(producto.id);
//         for (var i = 0; i ==document.getElementsByClassName("cuadroProducto").length; i++) {
//             if (document.getElementsByClassName("cuadroProducto")[i].id=prodcuto.id) {
//                 alert(document.getElementsByClassName("cuadroProducto")[i].id);
//                document.getElementsByClassName("cuadroProducto")[i].id.innerHTML = "x" + verContador(producto.id);
//            }
//        }     
        document.getElementById("cantidad"+producto.id).innerHTML = "x" + verContador(producto.id);
        producto = null;
    }
}
function aumentarContador(idProd) {
    var respuesta;
    switch (idProd) {

        case "tomate":
            contadorTomate = contadorTomate + 1;
            respuesta = contadorTomate;
            break;
        case "lechuga":
            contadorLechuga = contadorLechuga + 1;
            respuesta = contadorLechuga;
            break;
        case "berenjena":
            contadorBerenjena = contadorBerenjena + 1;
            respuesta = contadorBerenjena;
            break;
        case "pimiento":
            contadorPimiento = contadorPimiento + 1;
            respuesta = contadorPimiento;
            break;
        case "patata":
            contadorPatata = contadorPatata + 1;
            respuesta = contadorPatata;
            break;
        case "zanahoria":
            contadorZanahoria = contadorZanahoria + 1;
            respuesta = contadorZanahoria;
            break;
        case "brocoli":
            contadorBrocoli = contadorBrocoli + 1;
            respuesta = contadorBrocoli;
            break;
        case "cebolla":
            contadorCebolla = contadorCebolla + 1;
            respuesta = contadorCebolla;
            break;
        case "ajo":
            contadorAjo = contadorAjo + 1;
            respuesta = contadorAjo;
            break;
        case "pepino":
            contadorPepino = contadorPepino + 1;
            respuesta = contadorPepino;
            break;
        case "espinaca":
            contadorEspinaca = contadorEspinaca + 1;
            respuesta = contadorEspinaca;
            break;
         case "maiz":
            contadorMaiz = contadorMaiz + 1;
            respuesta = contadorMaiz;
            break;
        default:
            alert("Error en la incrementación del contador");
    }
    return respuesta;
}
function reducirContador(idProd) {
    var respuesta;
    switch (idProd) {
        case "tomate":
            contadorTomate = contadorTomate - 1;
            respuesta = contadorTomate;
            break;
        case "lechuga":
            contadorLechuga = contadorLechuga - 1;
            respuesta = contadorLechuga;
            break;
        case "berenjena":
            contadorBerenjena = contadorBerenjena - 1;
            respuesta = contadorBerenjena;
            break;
        case "pimiento":
            contadorPimiento = contadorPimiento - 1;
            respuesta = contadorPimiento;
            break;
        case "patata":
            contadorPatata = contadorPatata - 1;
            respuesta = contadorPatata;
            break;
        case "zanahoria":
            contadorZanahoria = contadorZanahoria - 1;
            respuesta = contadorZanahoria;
            break;
        case "brocoli":
            contadorBrocoli = contadorBrocoli - 1;
            respuesta = contadorBrocoli;
            break;
        case "cebolla":
            contadorCebolla = contadorCebolla - 1;
            respuesta = contadorCebolla;
            break;
        case "ajo":
            contadorAjo = contadorAjo - 1;
            respuesta = contadorAjo;
            break;
        case "pepino":
            contadorPepino = contadorPepino - 1;
            respuesta = contadorPepino;
            break;
        case "espinaca":
            contadorEspinaca = contadorEspinaca - 1;
            respuesta = contadorEspinaca;
            break;
        case "maiz":
            contadorMaiz = contadorMaiz - 1;
            respuesta = contadorMaiz;
            break;
        default:
            alert("Error en la reducción del contador");
    }
    return respuesta;
}
function calcularPrecioTotal(precio) {
    var precioInt = parseFloat(precio);
    total = total + precioInt;
    if (total<=0){
        document.getElementById("precioTotal").innerHTML = 0;
    }else{
    document.getElementById("precioTotal").innerHTML = total.toFixed(2);
}
}
function eliminarUnidadCarrito(id, precio,producto) {
    if(verContador(id)==1){
        eliminarTodo(producto, precio);
    }else{
    var precioInt = parseFloat(precio);
    total = total - precioInt;
    document.getElementById("precioTotal").innerHTML = total.toFixed(2);
    document.getElementById("cantidad"+id).innerHTML = "x" + reducirContador(id);
    }
}
function  eliminarTodo(producto, precio) {
    producto.parentNode.removeChild(producto);
    total = total - (precio * verContador(producto.id));
    ponerContadorACero(producto.id);
    document.getElementById("precioTotal").innerHTML = total.toFixed(2);

}
function ponerContadorACero(idProd) {
    switch (idProd) {
        case "tomate":
            contadorTomate = 0;
            break;
        case "lechuga":
            contadorLechuga = 0;
            break;
        case "berenjena":
            contadorBerenjena = 0;
            break;
        case "pimiento":
            contadorPimiento = 0;
            break;
        case "patata":
            contadorPatata = 0;
            break;
        case "zanahoria":
            contadorZanahoria = 0;
            break;
        case "brocoli":
            contadorBrocoli = 0;
            break;
        case "cebolla":
            contadorCebolla = 0;
            break;
        case "ajo":
            contadorAjo = 0;
            break;
        case "pepino":
            contadorPepino = 0;
            break;
        case "espinaca":
            contadorEspinaca = 0;
         case "maiz":
            contadorMaiz =0;
            break;
        default:
            alert("Error al poner el contador a cero");
    }
}
function verContador(idProd) {
    var respuesta;
    switch (idProd) {
        case "tomate":
            respuesta = contadorTomate;
            break;
        case "lechuga":
            respuesta = contadorLechuga;
            break;
        case "berenjena":
            respuesta = contadorBerenjena;
            break;
        case "pimiento":
            respuesta = contadorPimiento;
            break;
        case "patata":
            respuesta = contadorPatata;
            break;
        case "zanahoria":
            respuesta = contadorZanahoria;
            break;
        case "brocoli":
            respuesta = contadorBrocoli;
            break;
        case "cebolla":
            respuesta = contadorCebolla;
            break;
        case "ajo":
            respuesta = contadorAjo;
            break;
        case "pepino":
            respuesta = contadorPepino;
            break;
        case "espinaca":
            respuesta = contadorEspinaca;
            break;
        case "maiz":
           respuesta=contadorMaiz;
            break;
        default:
            alert("Error en la visualizacion del contador");
    }
    return respuesta;
}
