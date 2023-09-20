import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Boton from './Boton.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Boton numero={1}></Boton>
    <Boton numero={2}></Boton>
    <Boton numero={3}></Boton>
  </React.StrictMode>
);