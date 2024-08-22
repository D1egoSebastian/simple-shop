

const list = document.querySelector(".list")
const btn = document.querySelectorAll(".btn")
//
const total = document.querySelector(".total-container")

//
//el btn porque es donde queremos agregar una funcion de js//

//creamos un objeto vacio para almacenar el producto y simular una tienda//

const CarObject = []

//Empezamos creando la funcion//
const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad : 1,
        precio: parseInt(e.target.dataset.precio)
    };

    //SI usamos un array en vez de un objeto tenemos que encontrar esa propiedad que queremos trabajar, o sea usando array methods

    const index = CarObject.findIndex((item) => {
        //al llamar el findindex "item" pues ese nombre es que usaremos
        return item.id === producto.id;
        //de esta manera estamos almacenando el producto dentro de item.
    })
    


    // -1 porque si al buscar el producto da como resultado -1 en los array significa que no existe por lo tanto podemos asignarlo al producto o sumarlo

    if (index === -1) {
        //Usando array methots .push
        CarObject.push(producto);
    }else{
        //si ya existe solamente lo sumamos
        CarObject[index].cantidad +=1;
    }

    console.log(CarObject)

    //Y que esto se vea reflejado en el html por eso crearemos otra funcion para visualizarlo//
    pintarCarrito();
};

//Aqui realizaremos la funcion de incrementar y decrementar

const Inc = (e) => {
   
    CarObject = CarObject.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++
            pintarCarrito()
        }
        return item
    })
};

function dec(e) {

    const id = e.target.dataset.id;

    CarObject.forEach((item, index) => {
        if (item.id === id && item.cantidad > 1) {
            item.cantidad--;
        }else if (item.cantidad === 1) {
            CarObject.splice(index, 1);
        };
    });



    pintarCarrito()
}

btn.forEach((boton) => {
    boton.addEventListener("click", agregarCarrito)
})
//for each porque es por cada vez que se presione el boton//

//ahora trabajamos lo ultimo que seria la funcion de pintarcarrito//

const pintarCarrito = () => {
    list.innerHTML = "";

    let finaltotal = 0;
    //Como estamos usando un array ya no podemos usar un for, como estamos iterando en una lista y no en un objeto, usaremos Foreach
    CarObject.forEach((producto) => {
        const li = document.createElement("li")
        li.className = "listt"
        
        const fix = document.createElement("li")
        li.className = "fix"

        const buttons = document.createElement("li")
        buttons.className = "buttons"

        const product = document.createElement("span");
        product.className = "product";
        product.textContent = producto.titulo;

        const cant = document.createElement("span");
        cant.className = "cant";
        cant.textContent = producto.cantidad;

        const add = document.createElement("button");
        add.className = "add";
        add.textContent = "Agregar";
        add.dataset.id = producto.id;
        add.addEventListener("click", Inc);
        
        const rest = document.createElement("button");
        rest.className = "rest";
        rest.textContent = "Quitar";
        rest.dataset.id = producto.id;
        rest.addEventListener("click", dec)

        //agregar el total aqui
        const sum = document.createElement("p")
        sum.className = "total";
        sum.textContent = "hola"
        //---------------------------//
        fix.appendChild(product);
        fix.appendChild(cant);
        buttons.appendChild(add)
        buttons.appendChild(rest)
        li.appendChild(fix)
        li.appendChild(buttons)
        list.appendChild(li);

        finaltotal += producto.precio * producto.cantidad;
    });
        
    total.innerHTML = ""

    const finishbutton = document.createElement("button")
    finishbutton.className = "finish";
    finishbutton.textContent = "Finalizar Compra";
    finishbutton.addEventListener("click", () => {
        alert("Listo!")
    })

    const div = document.createElement("div");
    div.className = "total-div";
    
    const totalamount = document.createElement("p")
    totalamount.className = "totalamount"
    totalamount.innerHTML = "total: " + "$"+finaltotal;
    
    div.appendChild(finishbutton)
    div.appendChild(totalamount)
    total.appendChild(div);
    

}