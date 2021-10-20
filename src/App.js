import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './components/Cart/Cart'
import {CartProvider} from "react-use-cart";
import ItemCard from './components/Items/ItemCard';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
    return ( 
    <div className = "App">
        
        <CartProvider>
        <Navbar/>
        <Home />
        <ItemCount/>
        <Cart />
        </CartProvider>

        <ItemCount/>

        </div>
    );
}

export default App;