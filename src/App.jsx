import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import NavbarFixed from './components/NavbarFixed'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarFixed />
        <div>
          <Routes>
            {/* <Route path="/" element={<TodoList />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
      <Hero />
      <MainPage />
      <Footer />
    </>
  )
}

export default App
