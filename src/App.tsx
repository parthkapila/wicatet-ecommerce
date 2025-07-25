import { Routes, Route } from 'react-router-dom'
import { WishlistProvider } from '@/contexts/WishlistContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ProductsPage } from '@/pages/ProductsPage'
import { FAQPage } from '@/pages/FAQPage'
import { WishlistPage } from '@/pages/WishlistPage'

function App() {
  return (
    <WishlistProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </WishlistProvider>
  )
}

export default App 