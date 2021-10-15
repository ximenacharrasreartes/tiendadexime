import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function App() {
    return ( <div className = "App">
        <Navbar/>
        <Home />
    
        </div>
    );
}

export default App;