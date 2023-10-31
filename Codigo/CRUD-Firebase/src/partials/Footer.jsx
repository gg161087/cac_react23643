import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <nav className="navbar container">
                <ul className="navbar__item">
                    <li className="navbar__item">
                        <a className="navbar__link" href="/contact">CONTACTO</a>
                    </li>
                </ul>
                <picture>
                    <img className='navbar__logo' src="/cac-logo.png" alt="Logotipo de codo a codo"/>    
                </picture>
            </nav>
            <p className="footer__copy">All rights reserved 2023 - CRUD-Firebase of Gonzalo Gonzalez &copy;</p>      
        </footer>
    )
}