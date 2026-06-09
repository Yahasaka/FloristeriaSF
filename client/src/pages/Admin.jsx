import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { LayoutDashboard, Package, Star, TrendingUp, Users, LogOut, Plus, Eye, Pencil, Trash2 } from "lucide-react"
import NavigationBar from '../components/NavigationBar'
import { products as initialProducts } from '../data/products'

const sampleOrders = [

    {id: 1, product: 'Rosas Eternas', client: 'Marco Gutierrez', channel: 'web', price: 12500, status: 'Entregado'},
    {id: 2, product: 'Centro de Mesa', client: 'Cliente X', channel: 'whatsapp', price: 35000, status: 'Entregado'},
    {id: 3, product: 'Bouquet Primavera', client: 'Cliente X', channel: 'presencial', price: 10000, status: 'Entregado'},
    {id: 4, product: 'Girasoles', client: 'Julian Samoa', channel: 'web', price: 9500, status: 'Entregado'},
    {id: 5, product: 'Orquidea Elegante', client: 'Cliente X', channel: 'whatsapp', price: 28000, status: 'Entregado'},

]

function calcIncome(orders) {
    const total= orders.reduce((sum, o) => sum + o.price, 0)
    const web = orders.filter(o => o.channel === 'web').reduce((sum, o) => sum + o.price, 0)
    const whatsapp = orders.filter(o => o.channel === 'whatsapp').reduce((sum, o) => sum + o.price, 0)
    const presencial = orders.filter(o => o.channel === 'presencial').reduce((sum, o) => sum + o.price, 0)
    return { total, web, whatsapp, presencial }
}

function Admin() {
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('dashboard')
    const [orders, setOrders] = useState(sampleOrders)
    const [products, setProducts] = useState(initialProducts)
    const [showManualForm, setShowManualForm] = useState(false)


    const [manualForm, setManualForm] = useState({ product: '', client: '', channel: 'presencial', price: '', status: 'Entregado' })

    const income = calcIncome(orders)

    function handleManualSubmit() {
        if (!manualForm.product || !manualForm.price) return
        const newOrder = {
            id: orders.length + 1,
            product: manualForm.product,
            client: manualForm.client || 'Cliente X',
            channel: manualForm.channel,
            price: parseInt(manualForm.price),
            status: manualForm.status
        }
        setOrders([newOrder, ...orders])
        setManualForm({ product: '', client: '', channel: 'presencial', price: '', status: 'Entregado' })
        setShowManualForm(false)
    }

    const channelLabel = { web: 'Web', whatsapp: 'Whatsapp', presencial: 'Presencial' }
    const channelClass = { web: 'admin-badge-web', whatsapp: 'admin-badge-wa', presencial: 'admin-badge-pres' }

    return (
        <div className="admin-page">
            <header className="admin-navbar">
                <div className="admin-navbar__left">
                    <p className="admin-navbar__brand">
                        San <em>Francisco</em>
                    </p>
                    <span className="admin-navbar__badge">Admin</span>
                </div>
                <div className="admin-navbar__right">
                    <button className="admin-navbar__link" onClick={() => navigate('/')}>
                        Ver sitio
                    </button>
                    <div className="admin-navbar__avatar">A</div>
                </div>
            </header>

            <div className="admin-body">
                <aside className="admin-sidebar">
                    <p className="admin-sidebar__section">General</p>
                    <button 
                        className={`admin-sidebar__item ${activeSection === 'dashboard' ? 'admin-sidebar__item--active' : ''}`}
                        onClick={() => setActiveSection('dashboard')}
                    >
                        <LayoutDashboard size={13} strokeWidth={1.5} />
                        Dashboard
                    </button>

                    <p className="admin-sidebar__section">Catálogo</p>
                    <button 
                        className={`admin-sidebar__item ${activeSection === 'products' ? 'admin-sidebar__item--active' : ''}`}
                        onClick={() => setActiveSection('products')}
                    >
                        <Package size={13} strokeWidth={1.5} />
                        Productos
                    </button>
                    <button 
                        className={`admin-sidebar__item ${activeSection === 'featured' ? 'admin-sidebar__item--active' : ''}`}
                        onClick={() => setActiveSection('featured')}
                    >
                        <Star size={13} strokeWidth={1.5} />
                        Destacados del día
                    </button>
                    
                    <p className="admin-sidebar__section">Ventas</p>
                    <button
                        className={`admin-sidebar__item ${activeSection === 'orders' ? 'admin-sidebar__item--active' : ''}`}
                        onClick={() => setActiveSection('orders')}
                    >
                        <TrendingUp size={13} strokeWidth={1.5} />
                        Pedidos e ingresos
                    </button>

                    <p className="admin-sidebar__section">Usuarios</p>
                    <button
                        className={`admin-sidebar__item ${activeSection === 'clients' ? 'admin-sidebar__item--active' : ''}`}
                        onClick={() => setActiveSection('clients')}
                    >
                        <Users size={13} strokeWidth={1.5} />
                        Clientes
                    </button>

                    <button className="admin-sidebar__logout" onClick={() => navigate('/')}>
                        <LogOut size={13} strokeWidth={1.5} />
                        Cerrar sesión
                    </button>
                </aside>

                <main className="admin-content">
                    {activeSection === 'dashboard' && (
                        <div>
                            <div className="admin-content__header">
                                <div>
                                    <h1 className="admin-content__title">Dashboard</h1>
                                    <p className="admin0content__sub">Junio 2025</p>
                                </div>
                                <button className="admin-btn-primary" onClick={() => {setActiveSection('oders'); setShowManualForm(true) }}>
                                    <Plus size={12} strokeWidth={1.5} />
                                    Registrar venta manual
                                </button>
                            </div>

                            <div className="admin-stats">
                                <div className="admin-stat-card">
                                    <p className="admin-stat-card__label">Productos</p>
                                    <p className="admin-stat-card__val">{products.length}</p>
                                    <p className="admin-stat-card__sub">En catálogo  activo</p>
                                </div>
                                <div className="admin-stat-card">
                                    <p className="admin-stat-card__label">Pedidos este mes</p>
                                    <p className="admin-stat-card__val">{orders.length}</p>
                                    <p className="admin-stat-card__sub admin-stat-card__sub--up">+8 vs mes anterior</p>
                                </div> 
                                <div className="admin-stat-card">
                                    <p className="admin-stat-card__label">Clientes registrados</p>
                                    <p className="admin-stat-card__val">89</p>
                                    <p className="admin-stat-card__sub admin-stat-card__sub--up">+5 nuevos este mes</p>
                                </div>      
                            </div>

                            <div className="admin-income-card">
                                <div className="admin-income-card__header">
                                    <div>
                                        <p className="admin-income-card__label">Ingresos totales - Junio 2026</p>
                                        <p className="admin-income-card__val">₡{income.total.toLocaleString('es-CR')}</p>
                                        <p className="admin-income-card__up">+12% vs mayo</p>
                                    </div>
                                    <p className="admin-income-card__channels">Web + Whatsapp + Presencial</p>
                                </div>

                                <div className="admin-income-bar">
                                    <div className="admin-income-bar__web" style={{ width: `${Math.round(income.web / income.total * 100)}%` }} />
                                    <div className="admin-income-bar__wa" style={{ width: `${Math.round(income.whatsapp / income.total * 100)}%` }} />
                                    <div className="admin-income-bar__pres" style={{ width: `${Math.round(income.presencial / income.total * 100)}%` }} />
                                </div>

                                <div className="admin-income-sources">
                                    <div className="admin-income-source">
                                        <div className="admin-income-source__header">
                                            <div className="admin-income-source__dot admin-income-source__dot--web" />
                                            <p className="admin-income-source__name">Web</p>
                                        </div>
                                        <p className="admin-income-source__val">₡{income.web.toLocaleString('es-CR')}</p>
                                        <p className="admin-income-source__pct">{Math.round(income.web / income.total * 100)}% del total</p>
                                        <p className="admin-income-source__count">{orders.filter(o => o.channel === 'web').length} pedidos</p>
                                    </div>

                                    <div className="admin-income-source">
                                        <div className="admin-income-source__header">
                                            <div className="admin-income-source__dot admin-income-source__dot--wa" />
                                            <p className="admin-income-source__name">Whatsapp</p>
                                        </div>
                                        <p className="admin-income-source__val">₡{income.whatsapp.toLocaleString('es-CR')}</p>
                                        <p className="admin-income-source__pct">{Math.round(income.whatsapp / income.total * 100)}% del total</p>
                                        <p className="admin-income-source__count">{orders.filter(o => o.channel === 'whatsapp').length} pedidos</p>
                                    </div>

                                    <div className="admin-income-source">
                                        <div className="admin-income-source__header">
                                            <div className="admin-income-source__dot admin-income-source__dot--pres" />
                                            <p className="admin-income-source__name">Presencial</p>
                                        </div>
                                        <p className="admin-income-source__val">₡{income.presencial.toLocaleString('es-CR')}</p>
                                        <p className="admin-income-source__pct">{Math.round(income.presencial / income.total * 100)}% del total</p>
                                        <p className="admin-income-source__count">{orders.filter(o => o.channel === 'presencial').length} pedidos</p>
                                    </div>
                                </div>
                            </div>

                            <div className="admin-table-header">
                                <p className="admin-table-title">Pedidos recientes</p>
                                <button className="admin-btn-outline" onClick={() => setActiveSection('orders')}>Ver todos</button> 
                            </div>
                            <div className="admin-table-wrap">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cliente</th>
                                            <th>Canal</th>
                                            <th>Precio</th>
                                            <th>Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.slice(0, 4).map(order => (
                                            <tr key={order.id}>
                                                <td>{order.product}</td>
                                                <td>{order.client}</td>
                                                <td><span className={` admin-badge ${channelClass[order.channel]} `}>{channelLabel[order.channel]}</span></td>
                                                <td>₡{order.price.toLocaleString('es-CR')}</td>
                                                <td><span className="admin-badge admin-badge-status">Entregado</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeSection === 'products' && (
                        <div>
                            <div className="admin-content__header">
                                <div>
                                    <h1 className="admin-content-title">Productos</h1>
                                    <p className="admin-content__sub">{products.length} productos en catálogo </p>
                                </div>
                                <button className="admin-btn-primary">
                                    <Plus size={12} strokeWidth={1.5} />
                                    Agregar Producto
                                </button>
                            </div>
                            <div className="admin-table-wrap">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Categoría</th>
                                            <th>Subcategoría</th>
                                            <th>Precio</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map(p => (
                                            <tr key={p.id}>
                                                <td>{p.name}</td>
                                                <td style={{ textTransform: 'capitalize'}}>{p.category}</td>
                                                <td style={{ textTransform: 'capitalize'}}>{p.subcategory}</td>
                                                <td>₡{p.price.toLocaleString('es-CR')}</td>
                                                <td>
                                                    <span className={`admin-badge ${p.available ? 'admin-badge-status' : 'admin-badge-web'}`}>
                                                        {p.available ? 'Disponible' : 'Bajo pedido'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="admin-action"><Pencil size={12} strokeWidth={1.5} /></button>
                                                    <button className="admin-action admin-action--danger"><Trash2 size={12} strokeWidth={1.5} /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeSection === 'orders' && (
                        <div>
                            <div className="admin-content__header">
                                <div>
                                    <h1 className="admin-content__title">Pedidos e ingresos</h1>
                                    <p className="admin-content__sub">{orders.length} pedidos este mes</p>
                                </div>
                                <button className="admin-btn-primary" onClick={() => setShowManualForm(!showManualForm)}>
                                    Registrar venta manual
                                </button>
                            </div>

                            {showManualForm && (
                                <div className="admin-manual-form">
                                    <p className="admin-manual-form__title">Nueva venta manual</p>
                                    <div className="admin-manual-form__grid">
                                        <div className="auth-form-group">
                                            <label className="auth-label">Product</label>
                                            <input className="auth-input" placeholder="Nombre del producto" value={manualForm.product} onChange={e => setManualForm({ ...manualForm, product: e.target.value })} />
                                        </div>
                                        <div className="auth-form-group">
                                            <label className="auth-label">Cliente</label>
                                            <input className="auth-input" placeholder="Nombre o 'Cliente X'" value={manualForm.client} onChange={e => setManualForm({ ...manualForm, client: e.target.value })} />
                                        </div>
                                        <div className="auth-form-group">
                                            <label className="auth-label">Canal</label>
                                            <select className="auth-input" value={manualForm.channel} onChange={e => setManualForm({ ...manualForm, channel: e.target.value })} >
                                                <option value="presencial">Presencial</option>
                                                <option value="whatsapp">Whatsapp</option>
                                                <option value="web">Web</option>
                                            </select>
                                        </div>

                                        <div className="auth-form-group">
                                            <label className="auth-label">Precio (₡)</label>
                                            <input className="auth-input" type="number" placeholder="0" value={manualForm.price} onChange={e => setManualForm({ ...manualForm, price: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="admin-manual-form__footer">
                                        <button className="admin-btn-outline" onClick={() => setShowManualForm(false)}>Cancelar</button>
                                        <button className="admin-btn-primary" onClick={handleManualSubmit}>Guardar venta</button>
                                    </div>
                                </div>
                            )}

                            <div className="admin-table-wrap">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cliente</th>
                                            <th>Canal</th>
                                            <th>Precio</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(order => (
                                            <tr key={order.id}>
                                                <td>{order.product}</td>
                                                <td>{order.client}</td>
                                                <td><span className={`admin-badge ${channelClass[order.channel]}`}>{channelLabel[order.channel]}</span></td>
                                                <td>₡{order.price.toLocaleString('es-CR')}</td>
                                                <td><span className="admin-badge admin-badge-status">Entregado</span></td>
                                                <td>
                                                    <button className="admin-action"><Eye size={12} strokeWidth={1.5} /></button>
                                                    <button className="admin-action"><Pencil size={12} strokeWidth={1.5} /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeSection === 'featured' && (
                        <div>
                            <h1 className="admin-content__title">Destacados del día</h1>
                            <p className="admin-content__sub" style={{ marginBottom: '20px' }}>Elegí los productos que aparecen en la sección principal del Home</p>
                            <div className="admin-table-wrap">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Categoría</th>
                                            <th>Precio</th>
                                            <th>Destacado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {initialProducts.slice(0, 8).map(p =>(
                                            <tr key={p.id}>
                                                <td>{p.name}</td>
                                                <td style={{ textTransform: 'capitalize' }}>{p.category}</td>
                                                <td>₡{p.price.toLocaleString('es-CR')}</td>
                                                <td>
                                                    <input type="checkbox" defaultChecked={p.id <= 6} style={{ accentColor: 'var(--rose-600)' }} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                                <button className="admin-btn-primary">Guardar selección</button>
                            </div>
                        </div>    
                    )}

                    {activeSection === 'clients' && (
                        <div>
                            <h1 className="admin-content__title">Clientes</h1>
                            <p className="admin-content__sub" style={{ marginBottom: '20px' }}>89 clientes registrados</p>
                            <div className="admin-table-wrap">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Correo</th>
                                            <th>Pedidos</th>
                                            <th>Registro</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Picon Picon</td>
                                            <td>picon@correo.com</td>
                                            <td>3</td>
                                            <td>Enero 2025</td>
                                            <td><button className="admin-action"><Eye size={12} strokeWidth={1.5} /></button></td>
                                        </tr>
                                        <tr>
                                            <td>Julian Samoa</td>
                                            <td>juliansm@correo.com</td>
                                            <td>1</td>
                                            <td>Marzo 2025</td>
                                            <td><button className="admin-action"><Eye size={12} strokeWidth={1.5} /></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}

export default Admin