import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { vegetable } from '../../lib/data';
import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

import all from '../../assets/img/product-all.svg';
import buntle from '../../assets/img/product-buntle.svg';
import herb from '../../assets/img/product-herb.svg';
import vegetableimg from '../../assets/img/product-vegetable.svg';
import fruit from '../../assets/img/product-fruit.svg';
import suplie from '../../assets/img/product-suplie.svg';
import flower from '../../assets/img/product-flower.svg';
import like from '../../assets/img/like.svg';
import liked from '../../assets/img/liked.svg';

function Product() {
    const [likedItems, setLikedItems] = useState(() => {
        const saved = localStorage.getItem('likedItems');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
    }, [likedItems]);

    const toggleLike = (item) => {
        setLikedItems(prev => {
            const isLiked = prev.some(likedItem => likedItem.id === item.id);
            if (isLiked) {
                return prev.filter(likedItem => likedItem.id !== item.id);
            } else {
                return [...prev, item];
            }
        });
    };

    const [category, setCategory] = useState('All');
    const [value, setValue] = useState(3);
    const sortedVegetables = [...vegetable].reverse();

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className='Product'>
            <div className="container">
                <div className="product__text__container">
                    <h2 className='product__title'>Our products</h2>
                    <Link className='product__text'>
                        View(12)
                    </Link>
                </div>

                <div className="product__buttons">
                    <button className='product__btn' onClick={() => handleCategoryChange('All')}>
                        <img src={all} alt="" />
                        All
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('herb')}>
                        <img src={buntle} alt="" />
                        Herbs
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('bundles')}>
                        <img src={herb} alt="" />
                        Bundles
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('vegetable')}>
                        <img src={vegetableimg} alt="" />
                        Vegetables
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('fruit')}>
                        <img src={fruit} alt="" />
                        Fruits
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('suplie')}>
                        <img src={suplie} alt="" />
                        Supplies
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('flower')}>
                        <img src={flower} alt="" />
                        Flowers
                    </button>
                </div>

                <ul className='product__list'>
                    {
                        sortedVegetables?.filter((i) => category === 'All' || i.category === category).map((item, index) => (
                            <li key={index} className='product__item'>
                                <button className='setlike' onClick={() => toggleLike(item)}>
                                    <img src={likedItems.some(likedItem => likedItem.id === item.id) ? liked : like} alt="" />
                                </button>
                                <img src={item.img} alt="" />
                                <Flex gap="middle" vertical>
                                    <Rate tooltips={desc} onChange={setValue} value={value} />
                                </Flex>
                                <h3 className='product__item__title'>{item.title}</h3>
                                <h4 className='product__price'>$ {item.price}</h4>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Product;
