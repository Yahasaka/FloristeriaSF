import { useState, useRef, useEffect } from 'react'
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { User } from 'lucide-react'

function NavigationBar() {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const user = null
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return() => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

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
                    <li ref={dropdownRef} className="nav-user">
                        <button className={isOpen ? 'user-icon user-icon--active' : 'user-icon'} onClick={() => setIsOpen(!isOpen)}>
                            <User size={18} strokeWidth={1.5} />
                        </button>
                        {isOpen && (
                            <div className="nav-dropdown">
                                {user ? (
                                    <>
                                        <div className="nav-dropdown__header">
                                            <div className="nav-dropdown__avatar">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="nav-dropdown__name">{user.name}</p>
                                                <p className="nav-dropdown__role">{user.role}</p>
                                            </div>
                                        </div>
                                        <button className="nav-dropdown__item">Mi perfil</button>
                                        <button className="nav-dropdown__item">Mis pedidos</button>
                                        <div className="nav-dropdown__divider" />
                                        <button className="nav-dropdown__item nav-dropdown__item--danger">Cerrar sesión</button>
                                    </>
                                ) : (
                                    <>
                                        <div className="nav-dropdown__header-simple">
                                            <p className="nav-dropdown__welcome">Bienvenido</p>
                                            <p className="nav-dropdown__welcome-sub">Iniciá sesión para acceder a tu cuenta</p>
                                        </div>
                                        <button className="nav-dropdown__item" onClick={() => {
                                            setIsOpen(false)
                                            navigate('/login')
                                        }}>
                                            Iniciar sesión
                                        </button>
                                        <button className="nav-dropdown__item" onClick={() => {
                                            setIsOpen(false)
                                            navigate('/registro')
                                        }}>
                                            Crear cuenta
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavigationBar