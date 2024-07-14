// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/img/seedra-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import inst from '../../assets/img/seedra-inst.svg';
import faceb from '../../assets/img/seedra-faceb.svg';
import search from '../../assets/img/input-serach.svg';
import like from '../../assets/img/seedra-like.svg';
import korzinka from '../../assets/img/seedra-korzinka.svg';
import Tooltip from '@mui/material/Tooltip';

function Header() {
    const [likedItems, setLikedItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const saved = localStorage.getItem('likedItems');
        if (saved) {
            setLikedItems(JSON.parse(saved));
        }
    }, []);

    return (
        <div className='Header'>
            <div className="container">
                <nav className='header__nav'>
                    <Link to={'/'}>
                        <img src={logo} alt="Logo" />
                    </Link>

                    <ul className='header__list'>
                        <li className='header__item'>
                            <Link to={'/products'}>
                                ALL PRODUCTS
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link to={'/ourblog'}>
                                OUR BLOG
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link to={'/contact'}>
                                CONTACTS
                            </Link>
                        </li>
                    </ul>
                    <div className='header__social'>
                        <Tooltip title="Instagram" arrow>
                            <img className='header__social__inst' src={inst} alt="Instagram" />
                        </Tooltip>

                        <Tooltip title="Facebook" arrow>
                            <img src={faceb} alt="Facebook" />
                        </Tooltip>
                    </div>

                    <div className='header__inp'>
                        <img src={search} alt="Search" />
                        <input type="text" placeholder='Search' />
                    </div>

                    <div className="header__navigations">
                        <button className='like__btn' onClick={() => navigate('/like')}>
                            <img className='header__like' src={like} alt="Like" />
                        </button>
                        <button className='cart__btn' onClick={() => navigate('/cart')}>
                            <img className='header__korzinka' src={korzinka} alt="Cart" />
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
