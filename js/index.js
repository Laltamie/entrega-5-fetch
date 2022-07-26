const productos = [];
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const verCarrito = document.getElementById("verCarrito");
const botones = document.getElementById("botones");
const seccionProductos = document.getElementById("productos");
const botonBorrar = document.getElementById("borrarCarrito");
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};

class Producto{
    constructor (nombre, precio, img, id){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.id = id;
    }
}

productos.push(new Producto("Top", 2000,"multimedia/producto-1.jpg", 1));
productos.push(new Producto("Calza", 4000,"multimedia/producto-2.jpg", 2));
productos.push(new Producto("Buzo", 8000,"multimedia/producto-3.jpg", 3));
productos.push(new Producto("Campera", 10000, "multimedia/producto-4.jpg", 4));
productos.push(new Producto("Polera", 3000, "multimedia/producto-5.jpg", 5));


function crearDivs() {
    for (const producto of productos) {
        let card = document.createElement("div.col");
        card.innerHTML = `<div class="card h-100">
                            <img src="${producto.img}" class="card-img-top img-fluid" alt="${producto.nombre}">
                            <div class="card-body">
                                <h3 class="card-title">${producto.nombre}</h3>
                                <p class="card-text">$${producto.precio}</p>
                                <button id="${producto.id}">Agregar al carrito</button>
                            </div>
                        </div>`
                        seccionProductos.append(card);

                        let addCarrito = document.getElementById(producto.id);
                        addCarrito.addEventListener("click", () => {
                            carrito.push(producto);
                            localStorage.setItem("carrito", JSON.stringify(carrito));
                            swal ("Se agregó al carrito") ;
                        });
                    };
};

crearDivs();


verCarrito.addEventListener("click", () => {
    seccionProductos.innerHTML = "";
    for (const item of carrito) {
        let cardCarrito = document.createElement("div.col");
        cardCarrito.innerHTML = `<div class="card h-100">
                            <img src="${item.img}" class="card-img-top" alt="${item.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${item.nombre}</h5>
                                <p class="card-text">$${item.precio}</p>
                            </div>
                        </div>`
                        seccionProductos.append(cardCarrito);
        }
   
});




botonBorrar.addEventListener("click", () => {
    borrarCarrito();
    console.log("hola");
});

