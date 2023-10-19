import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import Footer from './components/Footer'
import { CartContextProvider } from './context/cartContextProvider'

function App() {
  return (
    <>
      <CartContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/produkter' element={<ProductsPage />} />
          <Route path='/produkt/:id' element={<ProductPage />} />
          <Route path='/varukorg' element={<CartPage />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </>
  )
}

export default App
