import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDoc, doc, updateDoc, Timestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { Header } from '../partials/Header.jsx';
import { Form } from '../components/Form.jsx'
import { Footer } from '../partials/Footer.jsx';

import { db } from '../firebase/firebaseConfig.js';

const mySwal = withReactContent(Swal);

import './Edit.css';

export const Edit = () => {

    const { id } = useParams();
    const [defaultValues, setDefaultValues] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        const fetchItem = async () => {
            const heroeCollection = doc(db, 'heroes', id)
            try {
                const heroeDoc = await getDoc(heroeCollection);
                if (heroeDoc.exists) {
                    const data = heroeDoc.data();
                    const dateOfBirth = new Date(data.dateOfBirth.seconds * 1000).toISOString().split('T')[0];
                    data.dateOfBirth = dateOfBirth;     
                    setDefaultValues(data);                    
                } else {
                    console.log('No se encontró el documento correspondiente.');
                }
            } catch (error) {
                console.error('Error al obtener el documento:', error);
            }
        };
        fetchItem();
    }, [db, id]);

    const handleEdit = async (values) => {
        try {
            const editDoc = doc(db, 'heroes', id);
            const dateOfBirth = new Date(values.dateOfBirth);
            const formattedDate = Timestamp.fromDate(dateOfBirth);
            const {name, lastName, speciality} = values;
            await updateDoc(editDoc, {
                name: name,
                lastName: lastName,
                speciality: speciality,
                dateOfBirth: formattedDate
            });
            Swal.fire(`Documento ${values.name} actualizado exitosamente`); 
            navigate("/");
            console.log('Valores para actualizar:', values);
        } catch (error) {
            Swal.fire(`Error inesperado al actualizar ${values.name}`);
            console.error('Error al actualizar el documento en Firestore:', error);
            navigate("/");
        }
    };

    return (
        <>
            <Header></Header>
            {Object.keys(defaultValues).length !== 0 ? (
                <Form onSubmit={handleEdit} defaultValues={defaultValues} booleano={true}></Form>
            ) : (
                <p>Cargando...</p>
            )}
            
            <Footer></Footer>
        </>
    )
}