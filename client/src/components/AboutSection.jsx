import { Italic } from 'lucide-react'
import  { storeInfo } from '../data/store'

function AboutSection() {
    return (
        <section className="about-section" id="nosotros">
            <div className="about-container">
                <div className="about-content">
                    <p className="section-eyebrow">Nuestra Historia</p>
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Una floristería <em style={{ color: 'var(--rose-600)', fontStyle: 'Italic'}}>Con corazón</em>
                    </h2>
                    <div className="divider" style={{ margin: '0 0 var(--space-sm)'}}>
                        <div className="divider-line" />
                        <span className="divider-gem">✦</span>
                        <div className="divider-line" />
                    </div>
                    <p className="about-description">{storeInfo.description}</p>
                    <div className="about-stats">
                        {storeInfo.stats.map((stat, index) => (
                            <div key={index} className="about-stat">
                                <span className="about-stat__value">{stat.value}</span>
                                <span className="about-stat__label">{stat.label}</span>
                                <span className="about-stat__desc">{stat.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-image">
                    <div className="about-image__placeholder">
                        <p className="about-image__text">Foto del Local</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection