import { createContext, useState, useEffect } from 'react'

//!creamos el Context y lo exportamos para usarlo dentro de un Usecontext para consumirlo dentro de otro archivo
export const PizzaMiaContext = createContext();

export default function PizzaMiaProvider({ children }) {
    const [pizzas, setPizzas] = useState([])
    const [carrito, setCarrito] = useState([])

    //!funcion async para traer datos de json
    async function getPizzas() {
        const response = await fetch("/pizzas.json")
        const data = await response.json();
        //!guarda lo que se pasa dentro del State
        setPizzas(data)
    }

    function agregarCarrito({ id, name, price, img }) {
        const producto = { id, name, price, img, cantidad: 1 };
        //!buscar posición y ver si existe
        const indPizzas = carrito.findIndex((pedido) => pedido.id === id);

        //!si ya existe le agregamos 1 y actualizamos carrito
        if (indPizzas >= 0) {
            carrito[indPizzas].cantidad++;
            //!actualizando Carrito
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, producto]);
        }
    }
    console.log(carrito);

    //!funcion flecha y un array de dependencias
    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <>
            {/* todos los valores a compartir dentro de PizzaMiaContext */}
            <PizzaMiaContext.Provider value={{ pizzas, setPizzas, carrito, setCarrito, agregarCarrito }}>
                {children}
            </PizzaMiaContext.Provider>
        </>
    )
}

