import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { vegetable } from '../../lib/data'
import './Select.css'
import like from '../../assets/img/select-like.svg'

function Select() {



    const [count, setCount] = useState(2);

    const handleplus = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const handleminus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };


    const { id } = useParams()
    let findItem = vegetable.find((item) => item.id == id)
    const random = findItem.id * Math.random().toString()[0];
    console.log(random);
    return (
        <div className='Select'>
            <div className="container">
                <div className="select__container">
                    <div className="select__left">
                        <img className='select__left__img' src={findItem.img} alt="" />
                    </div>
                    <div className="select__right">
                        <h2 className='select__right__title'>{findItem.title}</h2>
                        <div className="select__size__div">
                            <div className='select__pack'>
                                <p className='size__text'>SIZE</p>
                                <h5><span className='count__span'>{count}</span>Pack</h5>
                            </div>
                            <div className='select__btns'>
                                <button onClick={handleminus} className='select__btn btn__select'>-</button>
                                <h5 className='select__btn__number'>{count}</h5>
                                <button onClick={handleplus} className='select__btn'>+</button>
                            </div>
                        </div>

                        <div className="select__start">
                            <div className={count == 1 ? 'select__border' : 'select__start__div'}>
                                <h6>1 pack</h6>
                                <p>start from <span>{findItem.price} $</span></p>
                            </div>
                            <div className={count == 2 ? 'select__border' : 'select__start__div'}>
                                <h6>2 pack</h6>
                                <p>start from <span>{findItem.price * 2} $</span></p>
                            </div>
                            <div className={count == 3 ? 'select__border' : 'select__start__div'}>
                                <h6>3 pack</h6>
                                <p>start from <span>{findItem.price * 3} $</span></p>
                            </div>
                            <div className={count == 4 ? 'select__border' : 'select__start__div'}>
                                <h6>4 pack</h6>
                                <p>start from <span>{findItem.price * 4} $</span></p>
                            </div>
                            <div className={count == 5 ? 'select__border' : 'select__start__div'}>
                                <h6>5 pack</h6>
                                <p>start from <span>{findItem.price * 5} $</span></p>
                            </div>
                        </div>

                        <div className="select__addmodal">
                            <h2>{findItem.price} $</h2>
                            <div className='select__add__right'>
                                <img className='select__like' src={like} alt="" />
                                <button className='select__add__btn'>Add to card</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Select