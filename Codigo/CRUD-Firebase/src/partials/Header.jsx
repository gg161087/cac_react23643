import './Header.css';

export const Header = () => {
    return (
        <header className="page-header">
            <nav className="navbar container">
                <picture className="navbar__logo">
                    <a href="/">
                        <img src="/cac-logo.png" alt="FunkoShop Logotipo"/>
                    </a>
                </picture>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a className="navbar__link" href="/contact">CONTACTO</a>                    
                    </li>                                 
                </ul>
            </nav>
        </header>
    )
}