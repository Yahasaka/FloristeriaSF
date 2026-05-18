function ProductCard({ product }) {
    return (
        <article className="product-card">
            <div className="product-card__image">
                {product.image ? (<img src={product.image} alt={product.name} />) : 
                (<div className="product-card__placeholder">
                    <span>{product.category}</span>
                </div>
                )}
            </div>

            <div className="product-card__body">
                <span className={product.available ? 'product-badge product-badge--available' : 'product-badge product-badge--order'}>
                    {product.available ? 'Disponible' : 'Bajo Pedido'}
                </span>
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__description">{product.description}</p>
                <div className="product-card__footer">
                    <span className="product-card__price">
                        ₡{product.price.toLocaleString('es-CR')}
                    </span>
                    <button className="product-card__btn">
                        Ver más
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard