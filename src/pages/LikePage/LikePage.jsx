// src/pages/LikePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LikePage.css';

function LikePage() {
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];

    return (
        <div className="like__page">
            <div className="container__like">
                <h2>Your liked items</h2>
                {likedItems.length > 0 ? (
                    <ul className="like__list">
                        {likedItems.map((item, index) => (
                            <li key={index} className="like__item">
                                <img src={item.img} alt={item.title} className="like__item__img" />
                                <div className="like__item__details">
                                    <h3>{item.title}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>You have no liked items.</p>
                )}
                <Link to="/products" className="continue__shopping">Continue shopping</Link>
            </div>
        </div>
    );
}

export default LikePage;
