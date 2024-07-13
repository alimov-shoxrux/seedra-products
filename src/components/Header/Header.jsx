import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/img/seedra-logo.svg';
import { Link } from 'react-router-dom';
import inst from '../../assets/img/seedra-inst.svg';
import faceb from '../../assets/img/seedra-faceb.svg';
import search from '../../assets/img/input-serach.svg';
import like from '../../assets/img/seedra-like.svg';
import korzinka from '../../assets/img/seedra-korzinka.svg';
import Tooltip from '@mui/material/Tooltip';
import { Modal } from 'antd';

function Header() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [likedItems, setLikedItems] = useState([]);


    useEffect(() => {
        const saved = localStorage.getItem('likedItems');
        if (saved) {
            setLikedItems(JSON.parse(saved));
        }
    }, []);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className='Header'>
            <div className="container">
                <nav className='header__nav'>
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>

                    <ul className='header__list'>
                        <li className='header__item'>
                            <Link to={'/products'}>
                                ALL PRODUCTS
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link >
                                ABOUT SEEDRA
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link>
                                OUR BLOG
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link>
                                CONTACTS
                            </Link>
                        </li>
                    </ul>
                    <div className='header__social'>
                        <Tooltip title="Instagram" arrow>
                            <img className='header__social__inst' src={inst} alt="inst" />
                        </Tooltip>

                        <Tooltip title="Facebook" arrow>
                            <img src={faceb} alt="faceb" />
                        </Tooltip>
                    </div>

                    <div className='header__inp'>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search' />
                    </div>

                    <div className="header__navigations">
                        <button className='like__btn' onClick={showModal}>
                            <img className='header__like' src={like} alt="" />
                        </button>
                        <img className='header__korzinka' src={korzinka} alt="" />

                        <Modal
                            title="You can see what you liked item"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <ul>
                                {likedItems.map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <img src={item.img} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                                        <span style={{ marginRight: '10px' }}>{item.title}</span>
                                        <span>${item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </Modal>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
