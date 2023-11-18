// array carrito inicializacion 
const carrito = []

//Array de licores

const licores = [
    {codigo: 1433, nombre: "Cerveza Andes", precio: 850, categoria: "Cervezas", contenidoMl: 473, cantidad: 1},
    {codigo: 1454, nombre: "Cerveza Patagonia Amber", precio: 850, categoria: "Cervezas", contenidoMl: 473, cantidad: 1},
    {codigo: 1524, nombre: "Cerveza Quilmes", precio: 630, categoria: "Cervezas", contenidoMl: 473, cantidad: 1},
    {codigo: 1958, nombre: "Cerveza Corona", precio: 630, categoria: "Cervezas", contenidoMl: 330, cantidad: 1},
    {codigo: 1212, nombre: "Cerveza Stella Artois", precio: 400, categoria: "Cervezas", contenidoMl: 269, cantidad: 1},
    {codigo: 1048, nombre: "Cerveza Heineken", precio: 820, categoria: "Cervezas", contenidoMl: 473, cantidad: 1},
    {codigo: 1545, nombre: "Cerveza Schneider Rubia", precio: 700, categoria: "Cervezas", contenidoMl: 473, cantidad: 1},
    {codigo: 3048, nombre: "Vino Tinto Trumpeter", precio: 2500, categoria: "Vinos", contenidoMl: 375, cantidad: 1 },
    {codigo: 3025, nombre: "Vino El Enemigo", precio: 19000, categoria: "Vinos", contenidoMl: 750, cantidad: 1},
    {codigo: 3124, nombre: "Vino Luigi Bosca", precio: 4500, categoria: "Vinos", contenidoMl: 750 ,cantidad: 1},
    {codigo: 3811, nombre: "Vino Tinto Los Intocables", precio: 3500, categoria: "Vinos", contenidoMl: 750, cantidad: 1},
    {codigo: 3248, nombre: "Vino Escorihuela", precio: 18000, categoria: "Vinos", contenidoMl: 750, cantidad: 1},
    {codigo: 1584, nombre: "Vodka Skyy 750ml", precio: 3200, categoria: "Vodka", contenidoMl: 750, cantidad: 1},
    {codigo: 2811, nombre: "Vodka Absolut 700ml", precio: 8600, categoria: "Vodka", contenidoMl: 700, cantidad: 1},
    {codigo: 2655, nombre: "Vodka Smirnoff 700ml", precio: 3500, categoria: "Vodka", contenidoMl: 700, cantidad: 1},
    {codigo: 1623, nombre: "Vodka Sernova 700ml", precio: 2500, categoria: "Vodka", contenidoMl: 700, cantidad: 1},
    
]


// Funciones para buscar productos

// por nombre

function buscarPorNombre(){
    let name = prompt("Indica un nombre para buscar")
    if( name === ""){
        alert("❌ Ingresa un nombre válido")
        buscarPorNombre()
    }else{
        const nombreBuscados = licores.filter((licor) => licor.nombre.toLowerCase().includes(name.toLowerCase().trim()));
        console.table(nombreBuscados)
    }
}


// buscar por categoria

function buscarPorCategoria(){
    let cat = prompt("Hola, qué categoria buscas")
    if( cat === ""){
        alert("❌ Ingresa una categoria válida")
        buscarPorCategoria()
    }else{
        const categoriaBuscada = licores.filter((licor) => licor.categoria.toLowerCase().includes(cat.toLowerCase().trim()));
        console.table(categoriaBuscada)
    }
    
}

// por codigo para agregar al carrito

function buscarPorCodigo(){
    let codigo = prompt("Ingrese el codigo del producto: ")
    if( codigo === ""){
        alert("❌Ingresa un código válido❌")
        buscarPorCodigo()
    }else{
        let idx = licores.findIndex((licor) => licor.codigo === parseInt(codigo))
        if (idx === -1){
            alert("❌ El codigo ingresado no corresponde a ningun producto.\n\nIntenta nuevamente😎")
            buscarPorCodigo()
        }else{
            const codigoBuscado = licores.find((licor) => licor.codigo === parseInt(codigo));
            console.log(codigoBuscado)
        }
        
    }
    
}

// buscar producto por precio

function buscarPorPrecio(){
    let monto = prompt("👻Ingresa el monto que deseas buscar")
    if( monto === ""){
        alert("❌Ingresa un monto válido.❌")
        buscarPorPrecio()
    }else{
        const porPrecio = licores.filter((licor) => licor.precio === parseFloat(monto))
        if(porPrecio.length === 0){
        alert("😓Disculpa, por el momento no tenemos licores con ese precio.")
        let respuesta = confirm("¿Deseas buscar otro precio?")
            if(respuesta === true){
                buscarPorPrecio()    
            }else{
                alert("😎Muchas gracias por visitarnos. \n\n¡¡Vuelve Pronto!!😊✌️")
            }
    }else{
        console.table(porPrecio)
    }  
    }  
}

// funcion calcula el total del carrito

function calcularTotal() {
    // Usar reduce para sumar el resultado de precio * cantidad para cada producto en el carrito
    const total = carrito.reduce((acumulador, licor) => {
        const subtotal = licor.precio * licor.cantidad;
        return acumulador + subtotal;
    }, 0);

    // Devolver el resultado total
    return total;
}


// agregar producto al carrito

function agregarAlCarrito(){
    let codigo = parseInt(prompt("😎 Ingresa el código del producto que quieres añadir al carrito: "))
    let idx = licores.findIndex((licor) => licor.codigo === codigo)
    if (idx === -1){
        alert("😓No existe un producto con ese código")
        agregarAlCarrito()
    }else{
        let cantidad = parseInt(prompt("🍺 Ingresa la cantidad que quieres del producto"))
        const licorBuscado = licores.find((licor) => licor.codigo === codigo)
        licorBuscado.cantidad = cantidad
        if(licorBuscado !== undefined){
            carrito.push(licorBuscado)
            alert(licorBuscado.nombre + " Se agregó correctamente al carrito.🤩")
            let respuesta = confirm("¿Deseas agregar algo más?😎")
            if(respuesta === false){
                console.clear()
                total = calcularTotal()
                console.table(carrito)
                console.log("🍺 El monto total de tu carrito es:💲",total)
                
            }else{
                agregarAlCarrito()
            }
        }else{
            alert("No tenemos algun licor con ese código, ingresalo nuevamente")
            agregarAlCarrito()
        }
    }
    
}


// funcion para agregar producto al Inventario

function agregarAlInventario(){
    let nombre = prompt("Ingresa el nombre del producto: ")
    let codigo = parseInt(prompt("Ingresa el código del producto: "))
    let precio = parseFloat(prompt("Ingresa el precio del producto: "))
    let categoria = prompt("Ingresa la categoria del producto: ")
    let conteniloMl = parseInt(prompt("Ingresa el contenido neto del licor"))

    if(nombre === "" || codigo === "" || precio === "" || categoria === "" || conteniloMl === ""){
        alert("Ingresa datos válidos")
        agregarAlInventario()
    }else{
        const nuevoLicor = new constructor(codigo, nombre, precio, categoria, conteniloMl)
        licores.push(nuevoLicor)
        console.log("Se agregó correctamente el producto: "+nombre+"🍺")
        console.table(licores)
    }
}


// eliminar un producto del Inventario

function eliminarDelInventario(){
    console.table(licores)
    let codigoEliminar = parseInt(prompt("Ingresa el codigo del producto que deseas eliminar"))

    let idx = licores.findIndex((licor) => licor.codigo === codigoEliminar)

    if(idx !== -1 ){
        licores.splice (idx, 1)
        console.table(licores)
        console.log("😎😎Se eliminó con éxito el producto con el código: ", codigoEliminar,"😎😎")
    }else{
        alert("❌El producto que intentas eliminar ¡No existe!❌")
    }
}







