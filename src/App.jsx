import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Thing from './pages/Thing/Thing'
import Footer from './components/Footer/Footer'
import Select from './pages/Select/Select'


function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Thing />}  />
        <Route path='/select/:id' element={<Select />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
