import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import { CartContextProvider } from './context/cartContextProvider'
import ScrollToTop from './components/ScrollToTop'
import { UserContextProvider } from './context/userContextProvider'

function App() {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/produkter' element={<ProductsPage />} />
            <Route path='/produkt/:id' element={<ProductPage />} />
            <Route path='/varukorg' element={<CartPage />} />
            <Route path='/profil' element={<Profile />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App
