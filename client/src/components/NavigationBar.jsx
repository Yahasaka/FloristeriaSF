import { Navigate, NavLink, useNavigate } from "react-router-dom";

function NavigationBar() {

    const navigate = useNavigate()

    function handleAnchorClick(e, sectionId) {
        e.preventDefault()
        navigate('/')
        setTimeout(() => {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }

    return (
        <header className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-brand">
                    Floristeria y Detalles <em>San Francisco</em>
                </NavLink>
                <ul className="navbar-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>
                            Catalogo
                        </NavLink>
                    </li>
                    <li>
                        <a href="/#nosotros" className="nav-link" onClick={(e) => handleAnchorClick(e, 'nosotros')}>Nosotros</a>
                    </li>
                    <li>
                        <a href="/#contacto" className="nav-link" onClick={(e) => handleAnchorClick(e, 'contacto')}>Contacto</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavigationBar