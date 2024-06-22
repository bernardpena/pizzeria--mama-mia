import React, { useContext } from 'react';
import { PizzaMiaContext } from "../context/PizzaMiaContext";
import "../assets/style/css/home.css";

// import Navbar from './components/Navbar.jsx';
// import Header from './components/Header.jsx';
// import Card from './components/Card.jsx';
// import Footer from './components/Footer.jsx';


function Home() {
    const { pizzas, carrito, agregarCarrito } = useContext(PizzaMiaContext)
    return (
        <div>
            <nav> Pizzeria mama Mia - Carrito: {carrito.length}</nav>
            {pizzas?.map((element) => (
                <div>
                    {" "}
                    <p>Nombre de Pizza: {element.name}</p>
                    <img style={{ width: "200px" }} src={element.img} alt={element.name} />
                    <button onClick={() => agregarCarrito(element)}>Agregar al Carrito</button>
                    <p>Precio: {element.price}</p>
                </div>
            ))}
            <footer>Derechos reservados</footer>
        </div>
    )
}

export default Home