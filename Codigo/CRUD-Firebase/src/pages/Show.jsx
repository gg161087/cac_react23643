import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

import { db } from '../firebase/firebaseConfig.js';
import { Header } from '../partials/Header.jsx';
import { Footer } from '../partials/Footer.jsx';
import { Table } from '../components/Table.jsx';

import './Show.css';

export const Show = () => {
    //1ro configurar useState (hook)
    //2do referenciar a la db de firestore con 'collection'
    //3ro funcion para mostrar todos los documentos de la db
    //4to funcion para eliminar un documento
    //5to funcion para sweetalert (confirmacion/elimacion de documento)
    //6to useEffect
    //7ma devolver la vida del componente
    return (
        <>
            <Header></Header>
            <h1>Aca se van a mostrar todos los documentos</h1>
            <Table data='algo'></Table>
            <Footer></Footer>
        </>
    )
}