import ProductCard from "./ProductCard";
import { products } from '../data/products'

function ProductGrid () {
    return (
        <section className="product-grid-section">
            <div className="section-header">
                <p className="section-eyebrow">Selección del día</p>
                <h2 className="section-title"> Nuestros arreglos</h2>
                <div className="divider">
                    <div className="divider-line"/>
                    <span className="divider-gem">✦</span>
                    <div className="divider-ine"/>
                </div>
            </div>
            <div className="product-grid">
                {products.slice(0,3).map((product) => (<ProductCard key={product.id} product={product} /> 
            ))}
            </div>
        </section>
    )
}

export default ProductGrid