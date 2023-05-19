const productos = [
    { nombre: "Negro", precio: 254.50, id: "1", img: "../img/tenegro2.jpg", idCat: "2", descripcion: "Distinguido y fornido" },
    { nombre: "Rojo", precio: 266.50, id: "2", img: "../img/terojo2.jpg", idCat: "2", descripcion: "Aromático y singular" },
    { nombre: "Verde", precio: 350.50, id: "3", img: "../img/teverde2.jpg", idCat: "3", descripcion: "Saludable y claro"  },
    { nombre: "Blanco", precio: 387.50, id: "4", img: "../img/teblanco2.jpg", idCat: "3", descripcion: "Suave y refrescante"  },
    { nombre: "Chai", precio: 471.50, id: "5", img: "../img/techai2.jpg", idCat: "2", descripcion: "Especiado y exótico"  },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 2000)
    })
}