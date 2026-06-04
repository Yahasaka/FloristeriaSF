import { act, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Camera, Package, Heart, MapPin, Bell, Lock, CreditCard, Star, LogOut } from 'lucide-react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

function Profile() {

    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('personal')
    const [form, setForm] = useState({ 
        name: 'Picon',
        lastname: 'Picon',
        email: 'picon@correo.com',
        phone: ''
    })

    const [notifications, setNotifications] = useState({
        offers: true,
        newProducts: false
    })

    function handleFormChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function toggleNotification(key) {
        setNotifications({ ...notifications, [key]: !notifications[key] })
    }

    /* Ejemplos de llenado borrar luego */

    const orders = [
        { id: 1, name: 'Rosas Eternas', date: '15 de marzo, 2025', price: 12500, status: 'Entregado', emoji: '🌹' },
        { id: 2, name: 'Bouquet Primavera', date: '2 de febrero, 2025', price: 18000, status: 'Entregado', emoji: '🌸'},
        { id: 3, name: 'Centrod e Mesa', date: '10 de enero, 2025', price: 35000, status: 'Entregado', emoji: '🌻'}
    ]

    const favorites = [
        { id: 1, name: 'Rosas Eternas', price: 12500, emoji: '🌹'},
        { id: 2, name: 'Bouquet Primavera', price: 18000, emoji: '🌸'}
    ]

    return (
        <>
            <NavigationBar />
            <main className="profile-page">
                <div className="profile-layout">
                    <aside className="profile-sidebar">
                        <div className="profile-sidebar__user">
                            <div className="profile-avatar profile-avatar--lg">P</div>
                            <p className="profile-sidebar__name">Picon Picon</p>
                            <p className="profile-sidebar__email">picon@correo.com</p>
                            <span className="profile-sidebar__role">Cliente</span>
                        </div>

                        <nav className="profile-nav">
                            <p className="profile-nav__section">Mi cuenta</p>
                            <button
                                className={`profile-nav__item ${activeSection === 'personal' ? 'profile-nav__item--active' : ''}`}
                                onClick={() => setActiveSection('personal')}
                            >
                                <Camera size={14} strokeWidth={1.5} />
                                Información  personal
                            </button>

                            <button
                                className={`profile-nav__item ${activeSection === 'address' ? 'profile-nav__item--active' : ''}`}
                                onClick={() => setActiveSection('address')}
                            >
                                <MapPin size={14} strokeWidth={1.5} />
                                Dirección  de entrega
                            </button>

                            <button
                                className={`profile-nav__item ${activeSection === 'password' ? 'profile-nav__item--active' : ''}`}
                                onClick={() => setActiveSection('password')}
                            >
                                <Lock size={14} strokeWidth={1.5} />
                                Contraseña
                            </button>

                            <button 
                                className={`profile-nav__item ${activeSection === 'notifcations' ? 'profile-nav__item--active' : ''}`}
                                onClick={() => setActiveSection('notifications')}
                            >
                                <Bell size={14} strokeWidth={1.5} />
                                Notificaciones
                            </button>
                            
                            <p className="profile-nav__section">Mis compras</p>

                            <button
                                className={`profile-nav__item ${activeSection === 'orders' ? 'profile-nav__item--active' : ''}`}
                                onClick={() => setActiveSection('orders')}
                            >
                                <Package size={14} strokeWidth={1.5} />
                                Historial de pedidos
                            </button>

                            <button
                                className={`profile-nav__item ${activeSection === 'favorites' ? 'profile-nav__item--active' : ''}`}
                                onClick={() => setActiveSection('favorites')}
                            >
                                <Heart size={14} strokeWidth={1.5} />
                                Favoritos
                            </button>

                            <p className="profile-nav__section">Próximamente</p>

                            <button className="profile-nav__item profile-nav__item--disabled">
                                <CreditCard size={14} strokeWidth={1.5} />
                                Métodos de pago
                            </button>

                            <button className="profile-nav__item profile-nav__item--disabled">
                                <Star size={14} strokeWidth={1.5} />
                                Reseñas
                            </button>
                        </nav>

                        <button
                            className="profile-sidebar__logout"
                            onClick={() => navigate('/')}
                        >
                            <LogOut size={14} strokeWidth={1.5} />
                            Cerrar sesión
                        </button>
                    </aside>

                    <div className="profile-content">
                        {activeSection === 'personal' && (
                            <div className="profile-section">
                                <h2 className="profile-section__title">Información  personal</h2>
                                <p className="profile-section__sub">Actualizá  tus datos de contacto</p>
                                
                                <div className="profile-photo-banner">
                                    <div className="profile-avatar profile-avatar--md">P</div>
                                    <div className="profile-photo-banner__info">
                                        <p className="profile-photo-banner__name">{form.name} {form.lastName}</p>
                                        <p className="profile-photo-banner-hint">JPG o PNG · Máximo 2MB</p>
                                    </div>
                                    
                                    <button className="profile-photo-banner__btn">
                                        <Camera size={16} strokeWidth={1.5} color="var(--rose-600)" />
                                    </button>
                                </div>

                                <div className="profile-two-col">
                                    <div className="auth-form-group">
                                        <label className="auth-label">Nombre</label>
                                        <input className="auth-input" name="name" value={form.name} onChange={handleFormChange} />
                                    </div>

                                    <div className="auth-form-group">
                                        <label className="auth-label">Apellido</label>
                                        <input className="auth-input" name="lastName" value={form.lastName} onChange={handleFormChange} />
                                    </div>
                                </div>

                                <div className="auth-form-group">
                                    <label className="auth-label">Correo electrónico</label>
                                    <input className="auth-input" name="email" value={form.email} onChange={handleFormChange} />
                                </div>

                                <div className="auth-form-group">
                                    <label className="auth-label">Teléfono</label>
                                    <input className="auth-input" name="phone" value={form.phone} onChange={handleFormChange} placeholder="+506 0000-0000" />
                                </div>

                                <div className="profile-section__footer">
                                    <button className="auth-submit" style={{ width: 'auto', padding: '10px 24px' }}>
                                        Guardar cambios
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeSection === 'address' && (
                            <div className="profile-section">
                                <h2 className="profile-section__title">Dirección  de entrega</h2>
                                <p className="profile-section__sub">Tu dirección  guardada para pedidos</p>
                            
                                <div className="auth-form-group">
                                    <label className="auth-label">Provincia</label>
                                    <input className="auth-input" placeholder="Ej: Cartago" />
                                </div>
                                <div className="auth-form-group">
                                    <label className="auth-label">Cantón</label>
                                    <input className="auth-input" placeholder="Ej: El Guarco" />
                                </div>
                                <div className="auth-form-group">
                                    <label className="auth-label">Distrito</label>
                                    <input className="auth-input" placeholder="Ej: Tejar" />
                                </div>
                                <div className="auth-form-group">
                                    <label className="auth-label">Señas exactas</label>
                                    <input className="auth-input" placeholder="Ej: 100mts norte del parque" />
                                </div>

                                <div className="profile-section__footer">
                                    <button className="auth-submit" style={{width: 'auto', padding: '10px 24px' }}>
                                        Guardar dirección\
                                    </button>       
                                </div>
                            </div>
                        )}

                        {activeSection === 'password' && (
                            <div className="profile-section">
                                <h2 className="profile-section__title">Cambiar contraseña</h2>
                                <p className="profile-section__sub">Usá  una contraseña segura de al menos 8 caracteres</p>
                                
                                <div className="auth-form-group">
                                    <label className="auth-label">Contraseña  actual</label>
                                    <input className="auth-input" type="password" placeholder="••••••••" />
                                </div>
                                <div className="auth-form-group">
                                    <label className="auth-label">Nueva contraseña</label>
                                    <input className="auth-input" type="password" placeholder="••••••••" />
                                </div>
                                <div className="auth-form-group">
                                    <label className="auth-label">Confirmar nueva contraseña</label>
                                    <input className="auth-input" type="password" placeholder="••••••••" />
                                </div>

                                <div className="profile-section__footer">
                                    <button className="auth-submit" style={{width: 'auto', padding: '10px 24px' }}>
                                        Cambiar contraseña
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeSection === 'notifications' && (
                            <div className="profile-section">
                                <h2 className="profile-section__title">Notificaciones</h2>
                                <p className="profile-section__sub">Elegí qué notificaciones quieres recibir</p>

                                <div className="profile-toggles">
                                    <div className="profile-toggle-row">
                                        <div>
                                            <p className="profile-toggle-label">Ofertas y promociones</p>
                                            <p className="profile-toggle-sub">Recibí descuentos exclusivos por correo</p>
                                        </div>
                                        <button
                                            className={`profile-toggle ${notifications.offers ? 'profile-toggle--on' : ''}`}
                                            onClick={() => toggleNotification('offers')}
                                        >
                                            <div className="profile-toggle--dot" />
                                        </button>
                                    </div>

                                    <div className="profile-toggle-row">
                                        <div>
                                            <p className="profile-toggle-label">Novedades del catálogo</p>
                                            <p className="profile-toggle-sub">Enterate cuando agregamos productos nuevos</p>
                                        </div>
                                        <button
                                            className={`profle-togle ${notifications.newProducts ? 'profile-toggle--on' : ''}`}
                                            onClick={() => toggleNotification('newProducts')}
                                        >
                                            <div className="profile-toggle--dot" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'orders' && (
                            <div className="profile-section">
                                <h2 className="profile-section__title">Historial de pedidos</h2>
                                <p className="profile-section__sub">Tus últimas  compras</p>

                                <div className="profile-orders">
                                    {orders.map(order => (
                                        <div key={order.id} className="profile-order-item">
                                            <div className="profile-order-img">{order.emoji}</div>
                                            <div className="profile-order-info">
                                                <p className="profile-order-name">{order.name}</p>
                                                <p className="profile-order-date">{order.date}</p>
                                            </div>
                                            <span className="profile-order-status">Entregado</span>
                                            <p className="profile-order-price">
                                                ₡{order.price.toLocateString('es.CR')}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeSection === 'favorites' && (
                            <div className="profile-section">
                                <h2 className="profile-section__title">Favoritos</h2>
                                <p className="profile-section__sub">Arreglos que guardaste</p>

                                {favorites.length > 0 ? (
                                    <div className="profile-orders">
                                        {favorites.map(fav => (
                                            <div key={fav.id} className="profile-order-item">
                                                <div className="profile-order-img">{fav.emoji}</div>
                                                <div className="profile-order-info">
                                                    <p className="profile-order-name">{fav.name}</p>
                                                </div>
                                                <p className="profile-order-price">
                                                    ₡{fav.price.toLocaleString('es-CR')}
                                                </p>
                                                <button className="profile-order-btn">Ver producto</button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="profile-empty">
                                        <p className="profile-empty__title">No tenés favoritos guardados</p>
                                        <p className="profile-empty__sub">Explora el catalogo y guarda los que más te gusten</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Profile


