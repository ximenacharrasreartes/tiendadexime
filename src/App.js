import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './components/Cart/Cart'

function App() {
    return ( <div className = "App">
        <Navbar/>
        <Home />
        <Cart/>
        </div>
    );
}

export default App;