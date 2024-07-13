import React from 'react'
import './Footer.css'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import line from '../../assets/img/line.png'
import logo from '../../assets/img/seedra-logo.svg';
function Footer() {
    return (
        <div>

            <section className='footer'>
                <div className="container  secret__foooter">
                    <nav className='footer__nav'>
                        <ul className='footer__list'>
                            <li className='nav__items' >
                                <a href="#">ALL PRODUCTS</a>
                            </li>
                    
                            <li className='nav__item2'>
                                <a href="#">ABOUT SEEDRA</a>
                            </li>
                        
                            <li className='nav__item2'>
                                <a href="#">OUR BLOG</a>

                            </li>
                            <li>
                                <img className='logo__foot' src={logo} alt="" />
                            </li>
                            <li className='nav__item3'>
                                <a href="#">Terms&Conditions</a>

                            </li>
                         
                            <li className='nav__item2'>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                        <img className='line' src={line} alt="" />
                        <div className='foot__box'>
                            <img className='fot__insta' src={instagram} alt="" />
                            <img className='fot__face' src={facebook} alt="" />
                            <h1 className='foot__title'>All rights reserved</h1>
                        </div>
                    </nav>

                </div>
            </section>

        </div>
    )
}

export default Footer