import './FooterBar.css'

export const FooterBar = () => {
    return (
        <div className="footerbar">
            <div className="footerbar__container">            
                <div className="footerbar__buttons">
                    <button id="btn_previous">Anterior</button>
                    <button id="btn_next">Siguiente</button>
                </div>
                <small className="copyright">Todos los derechos reservados ©</small>
            </div>
        </div>
    )
}