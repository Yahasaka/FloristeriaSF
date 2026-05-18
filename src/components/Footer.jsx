import { storeInfo } from "../data/store";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <p className="footer-name">
                        Floristeria y Detalles <em>San Francisco</em>
                    </p>
                    <p className="footer-tagline">
                        Flores para cada momento especial
                    </p>
                </div>
                <div className="footer-nav">
                    <p className="footer-col__title">Navegación</p>
                    <ul className="footer-links">
                        <li><a href="/" className="footer-link">Inicio</a></li>
                        <li><a href="/catalogo" className="footer-link">Catálogo</a></li>
                        <li><a href="#nosotros" className="footer-link">Nosotros</a></li>
                        <li><a href="#contacto" className="footer-link">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p className="footer-col__title">Contacto</p>
                    <ul className="footer-links">
                        <li className="footer-link">{storeInfo.address}</li>
                        <li className="footer-link">{storeInfo.phone}</li>
                        <li className="footer-link">{storeInfo.hours}</li>
                        <li className="footer-link">{storeInfo.instagram}</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-copy">
                    © {new Date().getFullYear()} Floristeria y Detalles San Francisco · Todos los derechos reservados
                </p>
            </div>
        </footer>
    )
}

export default Footer