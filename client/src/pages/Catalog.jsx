import { use, useState } from "react"
import NavigationBar from "../components/NavigationBar"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import { products, categories } from "../data/products"

function Catalog() {
    
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedSubcategories, setSelectedSubcategories] = useState([])

    function toggleCategory(categoryId) {

        setSelectedCategories(prev => {
            if (prev.includes(categoryId)){
                const cat = categories.find(c => c.id === categoryId)
                const subIds = cat.subcategories.map(s => s.id)

                setSelectedSubcategories(prevSubs => prevSubs.filter(s => !subIds.includes(s)))
                return prev.filter(c => c !== categoryId)
            }
            return [...prev, categoryId]
        })
    }

    function toggleSubCategory(subcategoryId) {

        setSelectedSubcategories(prev => prev.includes(subcategoryId) ? prev.filter(s => s !== subcategoryId) : [...prev, subcategoryId])
    }

    const filteredProducts = products.filter(product => {
        
        const flowerCategory = categories.find(c => c.id === 'flores')
        const flowerSubIds = flowerCategory.subcategories.map(s => s.id)
        
        const selectedFlowers = selectedSubcategories.filter(s =>flowerSubIds.includes(s))
        const selectedOtherSubs = selectedSubcategories.filter(s => !flowerSubIds.includes(s))
        const selectedOtherCats = selectedCategories.filter(c => c !== 'flores')
        const floresSelected = selectedCategories.includes('flores')

        if ( selectedCategories.length === 0 && selectedSubcategories.length === 0)
            return true

        const passesCategory = selectedOtherCats.length === 0 || selectedOtherCats.includes(product.category)
        const passesSubCategory = selectedOtherSubs.length === 0 || selectedOtherSubs.includes(product.subcategory)
        const passesFlower = selectedFlowers.length === 0 || selectedFlowers.includes(product.flower) || (floresSelected && product.category === 'flores')

        return passesCategory && passesSubCategory && passesFlower
    })

    return (
        <>
        <NavigationBar />
        <main className="catalog-main">
            <div className="catalog-layout">
                <aside className="catalog-sidebar">
                    {(selectedCategories.length > 0 || selectedSubcategories.length > 0) && (
                        <button 
                            className="catalog-clear"
                            onClick={() => {
                                setSelectedCategories([])
                                setSelectedSubcategories([])
                            }}
                        >
                            Limpiar Filtros
                        </button>
                    )}

                    {categories.map(category => (
                        <div key={category.id} className="sidebar-group">
                            <label className="sidebar-category">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category.id)}
                                    onChange={() => toggleCategory(category.id)}
                                    className="sidebar-checkbox"
                                />
                                <span>{category.label}</span>
                            </label>

                                <div className="sidebar-subcategories">
                                    {category.subcategories.map(sub => (
                                        <label key={sub.id} className="sidebar-subcategory">
                                            <input 
                                                type="checkbox"
                                                checked={selectedSubcategories.includes(sub.id)}
                                                onChange={() => toggleSubCategory(sub.id)}
                                                className="sidebar-checkbox"
                                            />
                                            <span>{sub.label}</span>
                                        </label>           
                                    ))}
                                </div>
                        </div>
                    ))}
                </aside>
                <div className="catalog-content">
                    <div className="catalog-header">
                        <div>
                            <h1 className="page-title">
                                Nuestro <em>catálogo</em>
                            </h1>
                            <p className="catalog-count">
                                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
                            </p>
                        </div>
                        <div className="divider" style={{ maxWidth: '120px' }}>
                            <div className="divider-line"/>
                            <span className="divier-gem">✦</span>
                            <div className="divider-line" />
                    </div>
                </div>
                {filteredProducts.length > 0 ? (
                    <div className="product-grid">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="catalog-empty">
                        <p className="catalog-empty__title">
                            No encontramos productos
                        </p>
                        <p className="catalog-empty__sub">
                            Intenta con una combinación diferente de filtros.
                        </p>
                    </div>
                )}
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Catalog