import React from 'react'
import './Main.css'
import cardimg from '../../assets/img/seedra-card.svg'
import fire from '../../assets/img/Fire.svg'
import mbottom from '../../assets/img/miniature-bottom.svg'
import Zoom from '@mui/material/Zoom';
import { Tooltip } from '@mui/material'

function Main() {
  return (
    <div className='Main'>
      <div className="container">
        <div className="main__container">
          <div className="main__left">
            <h1 className='main__title'>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
            <p className='main__text'>
              Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee
            </p>

            <div className='main__prices'>
              <img src={fire} alt="" />
              <h2>$12.56</h2>
              <h4>$15.56</h4>
            </div>

            <div className="main__btns">
              <Tooltip TransitionComponent={Zoom} title="Add">
                <button className='main__add'>Add to card</button>
              </Tooltip>

              <button className='main__discover'>Add to card</button>
            </div>
          </div>

          <div className="main__right">
            <img className='cardimg' src={cardimg} alt="" />
          </div>
        </div>


        <div className="hero__down">
          <h2 className='hero__down__title'>We sell seeds </h2>
          <p className='hero__down__text'>that always sprout and gardening supplies which never break</p>
        </div>
      </div>
    </div>
  )
}

export default Main