import React from 'react'
import './Ourblog.css'
import greenone from '../../assets/img/green-one.svg'
import greentwo from '../../assets/img/green-two.svg'
import greenthree from '../../assets/img/green-three.svg'
import clock from '../../assets/img/soat.png'
import strawberry from '../../assets/img/strawberry.svg'
import downgirl from '../../assets/img/down-girl.svg'
import downfruit from '../../assets/img/down-fruit.svg'
import downhatgirl from '../../assets/img/down-hatgirl.svg'

function Ourblog() {
    return (
        <div className='Ourblog'>
            <div className="container">
                <div className="our__intro">
                    <h2 className='our__intro__title'>Welcome to our blog</h2>
                    <p className='our__intro__text'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
                    <img className='greenone' src={greenone} alt="" />
                    <img className='greentwo' src={greentwo} alt="" />
                    <img className='greenthree' src={greenthree} alt="" />
                </div>


                <div className="blog__container">
                    <div className="blog__left">
                        <div className="blog__left__first">
                            <div className="blog__left__intro">
                                <img src={clock} alt="" />
                                <p className='blog__left__clock'>12.09.2021</p>
                            </div>

                            <h2 className='blog__left__title'>How to plant spinach correctly in <br /> winter</h2>
                            <p className='blog__left__text'>In most areas, successive sowing can be done from early <br /> spring until early winter, but more often during hotter <br /> months...</p>
                            <button className='blog__left__btn'>Read</button>
                        </div>

                        <div className="blog__left__twice">
                            <div className='blog__left__second'>
                                <div className="blog__left__intro">
                                    <img src={clock} alt="" />
                                    <p className='blog__left__clock'>12.09.2021</p>
                                </div>
                                <h2 className='blog__left__twice__title'>How to plant spinach correct</h2>
                                <button className='blog__left__btn'>Read</button>
                            </div>


                            <div className='blog__left__third'>
                                <div className="blog__left__intro">
                                    <img src={clock} alt="" />
                                    <p className='blog__left__clock'>12.09.2021</p>
                                </div>
                                <h2 className='blog__left__twice__title'>How to plant spinach correct</h2>
                                <button className='blog__left__btn'>Read</button>
                            </div>
                        </div>
                    </div>

                    <div className="blog__right">
                        <div className="blog__left__intro">
                            <img src={clock} alt="" />
                            <p className='blog__left__clock'>12.09.2021</p>
                        </div>
                        <h2 className='blog__right__title'>How to plant spinach correctly</h2>
                        <p className='blog__right__text'>In most areas, successive sowing can be done from
                            early spring until early winter, but more often during</p>
                        <button className='blog__right__btn'>Read</button>
                    </div>
                </div>

                <div className="blog__strw">
                    <div className="blog__strw__left">
                        <div>
                            <div className="blog__left__intro">
                                <img src={clock} alt="" />
                                <p className='blog__left__clock'>12.09.2021</p>
                            </div>
                            <h2 className='blog__right__title'>How to plant spinach correctly <br /> in winter</h2>
                            <p className='blog__right__text'>In most areas, successive sowing can be done from
                                early <br /> spring until early winter, but more often during</p>
                            <button className='blog__right__btn'>Read</button>
                        </div>
                        <img src={strawberry} alt="" />
                    </div>

                    <div className='blog__left__third blog__strw__little'>
                        <div className="blog__left__intro">
                            <img src={clock} alt="" />
                            <p className='blog__left__clock'>12.09.2021</p>
                        </div>
                        <h2 className='blog__left__twice__title'>How to plant spinach <br /> correct</h2>
                        <button className='blog__left__btn'>Read</button>
                    </div>
                </div>


                <div className="blog__down">
                    <div className="blog__down__item">
                        <div className="blog__left__intro">
                            <img src={clock} alt="" />
                            <p className='blog__left__clock'>12.09.2021</p>
                        </div>
                        <h2 className='blog__right__title'>How to plant spinach <br /> correctly  in winter</h2>
                        <p className='blog__right__text'>In most areas, successive sowing can be <br /> done from
                            early spring until early winter, but <br /> more often during</p>
                        <button className='blog__right__btn'>Read</button>
                        <img className='downgirl' src={downgirl} alt="" />
                    </div>
                    <div className="blog__down__item">
                        <div className="blog__left__intro">
                            <img src={clock} alt="" />
                            <p className='blog__left__clock'>12.09.2021</p>
                        </div>
                        <h2 className='blog__right__title'>How to plant spinach <br /> correctly  in winter</h2>
                        <p className='blog__right__text'>In most areas, successive sowing can be <br /> done from
                            early spring until early winter, but <br /> more often during</p>
                        <button className='blog__right__btn'>Read</button>
                        <img className='downgirl' src={downfruit} alt="" />
                    </div>
                    <div className="blog__down__item">
                        <div className="blog__left__intro">
                            <img src={clock} alt="" />
                            <p className='blog__left__clock'>12.09.2021</p>
                        </div>
                        <h2 className='blog__right__title'>How to plant spinach <br /> correctly  in winter</h2>
                        <p className='blog__right__text'>In most areas, successive sowing can be <br /> done from
                            early spring until early winter, but <br /> more often during</p>
                        <button className='blog__right__btn'>Read</button>
                        <img className='downgirl' src={downhatgirl} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ourblog