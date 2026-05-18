import { MapPin, Clock, Phone, Instagram, MessageCircle } from 'lucide-react'
import { storeInfo } from '../data/store'

function ContactSection() {
    return (
        <section className="contact-section" id="contacto">
            <div className="contact-header">
                <p className="section-eyebrow">Visitanos</p>
                <h2 className="section-title">
                    ¿Dónde <em style={{color: 'var(--rose-600)', fontStyle: 'italic' }}>encontrarnos?</em>
                </h2>
                <p className="contact-subtitle">
                        Estamos en Cartago, Costa Rica.<br />
                        Con gusto te ayudamos a encontrar lo que buscás.
                </p>
            </div>

            <div className="contact-items">
                <div className="contact-item">
                    <div className="contact-icon">
                        <MapPin size={22} strokeWidth={1.5} color="var(--text-dark)" />
                    </div>
                    <p className="contact-item__label">Dirección</p>
                    <p className="contact-item__value">{storeInfo.address}</p>
                </div>

                <div className="contact-item">
                    <div className="contact-icon">
                        <Clock size={22} strokeWidth={1.5} color= "var(--text-dark)" />
                    </div>
                    <p className="contact-item__label">Horario</p>
                    <p className="contact-item__value">{storeInfo.hours}</p>
                </div>

                <div className="contact-item">
                    <div className="contact-icon">
                        <Phone size={22} strokeWidth={1.5} color= "var(--text-dark)" />
                    </div>
                    <p className="contact-item__label">Teléfono</p>
                    <p className="contact-item__value">{storeInfo.phone}</p>
                </div>

                <div className="contact-item">
                    <div className="contact-icon">
                        <Instagram size={22} strokeWidth={1.5} color= "var(--text-dark)" />
                    </div>
                    <p className="contact-item__label">Instagram</p>
                    <p className="contact-item__value">{storeInfo.instagram}</p>
                </div>
            </div>

            <div className="contact-bottom">
                <p className="contact-bottom__text">
                    ¿Tenés alguna consulta?{' '}
                    <strong>Escribinos y te respondemos a la brevedad.</strong>
                </p>
            <a
                href={`https://wa.me/${storeInfo.whatsapp}?text=Hola, me gustaria consultar sobre sus arreglos florales.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
            >
                <MessageCircle size={16} strokeWidth={1.5} />
                Escribir por whatsapp
                </a>
            </div>
        </section>
    )
}

export default ContactSection