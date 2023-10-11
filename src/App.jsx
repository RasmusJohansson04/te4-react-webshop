import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'
import NavbarFixed from './components/NavbarFixed'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavbarFixed />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/produkter' element={<ProductsPage />} />
        <Route path='/produkt' element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
