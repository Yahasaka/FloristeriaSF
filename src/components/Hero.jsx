function Hero() {
    return (
        <section className="hero">
            <div className="hero-ornament" />
            <p className="hero-eyebrow">
                Floristeria y Detalles San Francisco · Cartago, Costa Rica
            </p>
            <h1 className="hero-title">
                Flores y Detalles para ese <br /> <em>momento especial</em>
            </h1>
            <p className="hero-subtitle">
                Arreglos hechos con amor, entregados con cuidado.
                Porque cada flor y detalle tiene su historia.
            </p>
            <div className="hero-cta">
                <a href="/catalogo" className="btn-primary">
                    Ver Catalogo
                </a>
                <a href="#contacto" className="btn-outline">
                    Contáctanos
                </a>
            </div>
        </section>
    )
}

export default Hero