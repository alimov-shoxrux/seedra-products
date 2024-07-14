// src/pages/CartPage.js
import React, { useState, useEffect } from 'react';
import './CartPage.css';
import { Link } from 'react-router-dom';

function CartPage() {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const incrementQuantity = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id 
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decrementQuantity = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id 
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item
        ));
    };

    return (
        <div className="CartPage">
            <div className="container">
                <h2 className="cart__title">Cart</h2>
                <ul className="cart__list">
                    {
                        cartItems.map((item, index) => (
                            <li key={index} className="cart__item">
                                <img src={item.img} alt={item.title} />
                                <div className="cart__item__info">
                                    <h3>{item.title}</h3>
                                    <p>$ {item.price}</p>
                                    <div className="cart__item__quantity">
                                        <button onClick={() => decrementQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => incrementQuantity(item.id)}>+</button>
                                    </div>
                                    <button className="remove__btn" onClick={() => removeItem(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="cart__summary">
                    <h3>Total: $ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
                    <Link  to={'/payment'}>Go to Payment</Link>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
