class Contenedor{
    objetos=[]

    agregarContenedor(producto){
        this.contenedor.push(producto);
        console.log(contenedor);
    }

    mostrarContenido(){
        const listaProductos = document.getElementById("listaProductos")
        const productos = document.createElement('div')

        this.objetos.forEach(element => 
            productos.innerHTML = 
            `
            <label>Nombre: ${element.nombre} </label>
            <label>${element.contador}</label>
            <button id="boton" class="btn btn-primary" value="${element.id}">+</button>
            `
            
            )
            console.log(contenedor)
            listaProductos.appendChild(productos)
    }
}

class Objeto{
    id;
    nombre;
    contador = 1;
    constructor(nombre){
        this.nombre = nombre;
    }

    agregarContador(){
        this.contador = this.contador + 1;
    }

    
}

const contenedor = new Contenedor();



function obtenerDatos(){
    event.preventDefault();
    const dato = document.getElementById("nombre").value;
    const objeto = new Objeto(dato)
    contenedor.objetos.push(objeto);
    console.log(contenedor.objetos)
    document.getElementById("formulario").reset();

    contenedor.mostrarContenido();
}

