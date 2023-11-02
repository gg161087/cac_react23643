import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

import { db } from '../firebase/firebaseConfig.js';
import { Header } from '../partials/Header.jsx';
import { Table } from '../components/Table.jsx'
import { Footer } from '../partials/Footer.jsx';

import './Show.css';

export const Show = () => {
    //1ro configurar useState (hook)
    const [heroes, setHeroes] = useState([]);
    //2do referenciar a la db de firestore con 'collection'
    const heroesCollection = collection(db, 'heroes');
    //3ro funcion para mostrar todos los documentos de la db
    const getHeroes = async () => {
        const data = await getDocs(heroesCollection)
        setHeroes(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )    
    }
    //4to funcion para eliminar un documento
    const deleteHeroe = async (id) => {
        const heroeDoc = doc(db, 'heroes', id);
        await deleteDoc(heroeDoc);
        getHeroes();
    }
    //5to funcion para sweetalert (confirmacion/elimacion de documento)
    const confirmDelete = (id) => {
        Swal.fire({
            title: 'Estas Seguro/a?',
            text: "No podes revertir esta Accion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Deseo Borrarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteHeroe(id) // llamamos a la funcion eliminar
                Swal.fire(
                    'Borrado!',
                    'Tu Heroe ha sido Borrado/a.',
                    'success'
                )
            }
        })
    }
    //6to useEffect
    useEffect(()=>{
        getHeroes()
    },[])
    //7ma devolver la vida del componente
    return (
        <>
            <Header></Header>
            <Table heroes={heroes} onDelet={confirmDelete}></Table>
            <Footer></Footer>
        </>
    )
}