import React, { useState } from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'
import clock from '../../assets/img/soat.png'
import carla from '../../assets/img/carla.png'
function Blog() {
  const [activeDiv, setActiveDiv] = useState('div1');
  const [activeButton, setActiveButton] = useState('div1');

  const scrollToDiv = (divId) => {
    setActiveDiv(divId);
    setActiveButton(divId);
    document.getElementById(divId).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='Blog'>
      <div className="container">
        <div className="blog__introduction">
          <h2 className="blog__title">Our Blog</h2>
          <Link className='blog__page'>
            Go to our blog
          </Link>
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


        <h1 className='out__title'>What our clients say</h1>
        <div className="conteant22">
          <div className={`carla__box ${activeDiv === 'div1' ? 'active' : 'inactive'}`} id="div1">
            <div className='carla'>
              <img src={carla} alt="" />
              <div>
                <h1>Carla Samantoes-Diego</h1>
                <p>12.09.2021</p>
              </div>
            </div>
            <div className="stars2">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star half">&#9733;</span>
            </div>
            <p className='carla__des'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br />
              Be sure of our quality - the freshest
              batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best . </p>
          </div>
          <div className={`carla__box ${activeDiv === 'div2' ? 'active' : 'inactive'}`} id="div2">
            <div className='carla'>
              <img src={carla} alt="" />
              <div>
                <h1>Carla Samantoes-Diego</h1>
                <p>12.09.2021</p>
              </div>
            </div>
            <div className="stars2">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star half">&#9733;</span>
            </div>
            <p className='carla__des'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br />
              Be sure of our quality - the freshest
              batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best  </p>
          </div>
          <div className={`carla__box ${activeDiv === 'div3' ? 'active' : 'inactive'}`} id="div3">
            <div className='carla'>
              <img src={carla} alt="" />
              <div>
                <h1>Carla Samantoes-Diego</h1>
                <p>12.09.2021</p>
              </div>
            </div>
            <div className="stars2">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star half">&#9733;</span>
            </div>
            <p className='carla__des'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br />
              Be sure of our quality - the freshest
              batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best . </p>
          </div>
        </div>
        <div className="buttons__btn">
          <button className={`grren__btn1 ${activeButton === 'div1' ? 'active-button' : ''}`} onClick={() => scrollToDiv('div1')}></button>
          <button className={`grren__btn2 ${activeButton === 'div2' ? 'active-button' : ''}`} onClick={() => scrollToDiv('div2')}></button>
          <button className={`grren__btn3 ${activeButton === 'div3' ? 'active-button' : ''}`} onClick={() => scrollToDiv('div3')}></button>
        </div>
      </div>

    </div >
  )
}

export default Blog