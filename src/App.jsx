import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Thing from './pages/Thing/Thing'
import Footer from './components/Footer/Footer'
import Select from './pages/Select/Select'
import Ourblog from './pages/Ourblog/Ourblog'
import Contact from './components/Contact/Contact'
import LikePage from './pages/LikePage/LikePage'
import CartPage from './pages/CartPage/CartPage'


function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Thing />}  />
        <Route path='/select/:id' element={<Select />} />
        <Route path='/ourblog' element={<Ourblog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/like" element={<LikePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
