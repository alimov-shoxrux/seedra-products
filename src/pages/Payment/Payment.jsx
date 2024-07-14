import React, { useState } from 'react';
import path from '../../assets/img/pay.png';
import visa from '../../assets/img/viza.png';
import mastercard from '../../assets/img/mastercard.png';
import paypal from '../../assets/img/paypal.png';
import './Payment.css'

function Payment() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div>
            <div className="container">
                <div className="Payment">
                    <div className="container__box">
                        <div className='korinmas__box'>
                            <h1 className='payment__title2'>Payment info</h1>

                        </div>
                        <p className='type__des'>Card type</p>
                        <div className='tolov__buttons'>
                            <button className='tolov__button12'><img src={path} alt="" /></button>
                            <button className='tolov__button123'><img src={visa} alt="" /></button>
                            <button className='tolov__button124'><img src={mastercard} alt="" /></button>
                            <button className='tolov__button125'><img src={paypal} alt="" /></button>
                        </div>
                        <p className='card__num'>Card number</p>
                        <input className='card__input' type="number" placeholder='0000 0000 0000 0000' />
                        <div className='expring'>
                            <div>
                                <p className='date__des'>Expiring date</p>
                                <input className='date__inp' type="number" placeholder='01/01' name="" id="" />
                            </div>
                            <div>
                                <p className='date__des'>CCV</p>
                                <input className='date__inp' type="number" placeholder='123' name="" id="" />
                            </div>
                        </div>
                        <div className='total__box'>
                            <p className='total__des'>Total amount</p>
                            <h1 className='total__title'>$12.56</h1>
                        </div>
                        <div className='continu'>
                            <div>
                                <h2 className='price__title'>$12.56</h2>
                            </div>
                            <div className='continu2'>
                                <h2 className='continu__title'>Continue</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;