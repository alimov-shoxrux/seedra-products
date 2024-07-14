import React from 'react'
import phone from '../../assets/img/contact-phone.svg'
import email from '../../assets/img/contact-email.svg'
import './Contact.css'

function Contact() {
    return (
        <div className='Contact'>
            <div className="container">
                <div className="contact__div">
                    <div className="contact__left">
                        <h2 className='contact__title'>Contact us</h2>
                        <p className='contact__text'>Send for us your request and we <br /> will get in touch with you as <br /> soon as possible</p>

                        <div className='contact__media'>
                            <div className='contact__social'>
                                <img src={phone} alt="" />
                                <p className='contact__con'>+380 98 782 82 23</p>
                            </div>
                            <div className='contact__social'>
                                <img src={email} alt="" />
                                <p className='contact__con'>mailmail@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact__right">
                        <form className='contact__form'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Your name' />
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Your email' />
                            <label htmlFor="">Message</label>
                            <input type="text" placeholder='Your message' />
                            <button>Send request</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact