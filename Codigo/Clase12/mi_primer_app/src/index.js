import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Card from './Card.jsx';

class Jugador {
  constructor(nombre, nacimiento, club, logros, enColeccion) {
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.club = club;
    this.logros = logros;
    this.enColeccion = enColeccion;
  }
}
const jugador1 = new Jugador("Lionel Messi", 1987, "Paris Saint-Germain", ["Balón de Oro", "Champions League"], true);
const jugador2 = new Jugador("Cristiano Ronaldo", 1987, "Manchester United", ["Balón de Oro", "Eurocopa"], false);

console.log(jugador1);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Card jugador={jugador1}></Card>
    <Card jugador={jugador2}></Card>
  </>
);