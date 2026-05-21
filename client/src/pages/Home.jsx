import AboutSection from '../components/AboutSection'
import Hero from '../components/Hero'
import NavigationBar from '../components/NavigationBar'
import ProductGrid from '../components/ProductGrid'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <NavigationBar />
            <main>
                <Hero />
                <ProductGrid />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}

export default Home