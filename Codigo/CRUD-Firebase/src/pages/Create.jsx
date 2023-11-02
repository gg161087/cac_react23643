import { useNavigate }from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { Header } from '../partials/Header.jsx';
import { Form } from '../components/Form.jsx'
import { Footer } from '../partials/Footer.jsx';

import { db } from '../firebase/firebaseConfig.js';

const mySwal = withReactContent(Swal);

import './Create.css';

export const Create = () => {

    const navigate = useNavigate()

    const heroesCollection = collection(db,'heroes');
    
    const handleCreate = async (values) => {        
        const dateOfBirth = new Date(values.dateOfBirth);
        const formattedDate = Timestamp.fromDate(dateOfBirth);
        const {name, lastName, speciality} = values;

        try {
            await addDoc(heroesCollection,{
                name: name,
                lastName: lastName,
                speciality: speciality,
                dateOfBirth: formattedDate
            });
            Swal.fire(`Documento ${values.name} creado exitosamente`);            
            navigate('/');
        } catch (error) {
            console.error('Error al crear el documento en Firestore:', error);
            navigate('/');
        }
    };
    return (
        <>
        <Header></Header>
        <Form onSubmit={handleCreate} booleano={false}></Form>
        <Footer></Footer>
        </>
    )
}