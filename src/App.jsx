import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Thing from './pages/Thing/Thing';
import Footer from './components/Footer/Footer';
import Select from './pages/Select/Select';
import Ourblog from './pages/Ourblog/Ourblog';
import Contact from './components/Contact/Contact';
import LikePage from './pages/LikePage/LikePage';
import CartPage from './pages/CartPage/CartPage';
import Payment from './pages/Payment/Payment';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='App'>
      <Header onSearch={setSearchValue} />
      <Routes>
        <Route path='/' element={<Home searchValue={searchValue} />} />
        <Route path='/products' element={<Thing />} />
        <Route path='/select/:id' element={<Select />} />
        <Route path='/ourblog' element={<Ourblog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
