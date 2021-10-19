import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './components/ItemCount/ItemCount'
import {CartProvider} from "react-use-cart";

function App() {
    return ( 
    <div className = "App">
        
        <CartProvider>
        <Navbar/>
        <Home />
        <Cart />
        </CartProvider>

        </div>
    );
}

export default App;