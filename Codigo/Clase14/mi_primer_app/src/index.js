import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {CardDos} from './CardDos.jsx';
/* import Card from './ejemplo/Card.jsx'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <Card apellido='Messi' nacimiento={1987} clubes={['Newells', 'Barcelona']} mundial={true} late={false}></Card>
            <Card apellido= "Ronaldo" nacimiento= {1987} clubes= {["Lisboa", "Manchester"]} mundial= {false} late={true}></Card> */}
        <CardDos/>
    </>
);