import { BarButton } from '../BarButton/index.jsx';

import './FooterBar.css'

export const FooterBar = ({buttons, onButtonClick}) => {
    return (
        <div className="footerbar">
            <div className="footerbar__container">            
                <div className="footerbar__buttons">
                    <BarButton buttons={buttons} onButtonClick={onButtonClick}></BarButton>                     
                </div>
                <small className="footerbar__copyright">Todos los derechos reservados ©</small>
            </div>
        </div>
    )
}