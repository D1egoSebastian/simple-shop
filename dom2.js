//Utilizaremos las dos variables con la que integraremos js//

const list = document.querySelector(".list")
const btn = document.querySelectorAll(".btn")
//el btn porque es donde queremos agregar una funcion de js//

//creamos un objeto vacio para almacenar el producto y simular una tienda//

const CarObject = {}

//Empezamos creando la funcion//
const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad : 1
    };

    //agregamos la condicion para sumar el producto si el usuario ya le dio click//

    if (CarObject[producto.id]) {
        CarObject[producto.id].cantidad += 1
    }else{
        CarObject[producto.id] = producto
    }

    //Y que esto se vea reflejado en el html por eso crearemos otra funcion para visualizarlo//
    pintarCarrito();
};

//agreguemos el eventlistener porque esto ocurrira siempre y cuando demos click en "add"//

btn.forEach((boton) => {
    boton.addEventListener("click", agregarCarrito)
})
//for each porque es por cada vez que se presione el boton//

//ahora trabajamos lo ultimo que seria la funcion de pintarcarrito//

const pintarCarrito = () => {
    list.innerHTML = "";

    //En esta funcion el objeto producto no existe por lo tanto, hay que hacer una iteracion para que lo recorra//

    for (let find in CarObject) {
        
        const li = document.createElement("li")
        li.className = "list"
    
        const product = document.createElement("span")
        product.className = "product"
        product.textContent = CarObject[find].titulo;
    
        const cant = document.createElement("span")
        cant.className = "cant"
        cant.textContent = CarObject[find].cantidad;
    
        li.appendChild(product)
        li.appendChild(cant)
    
    
        list.appendChild(li)

    }

}