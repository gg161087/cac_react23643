import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Boton from "./components/Boton.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Boton numero={1} nombre="Pepe" />
        <Boton numero={2} nombre="Pepa" />
        <Boton numero={3} />
        <Boton numero={4} />
        <Boton numero={5} />
    </>
)
