import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import PizzaMiaProvider from "./context/PizzaMiaContext.jsx"

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//css
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <PizzaMiaProvider>
        <App /> {/* children */}
      </PizzaMiaProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
