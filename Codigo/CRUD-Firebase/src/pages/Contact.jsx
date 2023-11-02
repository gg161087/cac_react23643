import { Link } from 'react-router-dom';

import { Header } from '../partials/Header.jsx';
import { Footer } from '../partials/Footer.jsx';

import './Contact.css';

export const Contact = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="contact">
                    <h1>aca va contacto</h1>
                    <Link to="/">Volver</Link>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}