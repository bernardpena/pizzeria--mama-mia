import { Routes, Route } from "react-router-dom";

import Home from "./view/Home";
import Carrito from "./view/Carrito";

import "./assets/style/css/app.css"

function App() {


  return (

    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/:id" element={<Detalle />} /> */}
      <Route path="/carrito" element={<Carrito />} />
      {/* <Route path="*" element={<PageNoFound />} /> */}
    </Routes>
  )
}

export default App
