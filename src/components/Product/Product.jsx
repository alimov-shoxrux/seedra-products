import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Product.css';
import { vegetable } from '../../lib/data'; // O'zgartiring, agar kerak bo'lsa
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
import korzinka from '../../assets/img/seedra-korzinka.svg';

function Product({ sortOrder }) {
    const navigation = useNavigate()

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
    const sortedVegetables = [...vegetable];

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    const filteredProducts = sortedVegetables.filter((item) =>
        (category === 'All' || item.category === category)
    );

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOrder === 'most-expensive') {
            return b.price - a.price;
        } else if (sortOrder === 'least-expensive') {
            return a.price - b.price;
        }
        return 0;
    });

    return (
        <div className='Product'>
            <div className="container">
                <div className="product__text__container">
                    <h2 className='product__title'>Our products</h2>
                    <Link className='product__text'>
                        View({sortedProducts.length})
                    </Link>
                </div>

                <div className="product__buttons">
                    <button className='product__btn' onClick={() => handleCategoryChange('All')}>
                        <img src={all} alt="All" />
                        All
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('herb')}>
                        <img src={buntle} alt="Herbs" />
                        Herbs
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('bundles')}>
                        <img src={herb} alt="Bundles" />
                        Bundles
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('vegetable')}>
                        <img src={vegetableimg} alt="Vegetables" />
                        Vegetables
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('fruit')}>
                        <img src={fruit} alt="Fruits" />
                        Fruits
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('suplie')}>
                        <img src={suplie} alt="Supplies" />
                        Supplies
                    </button>
                    <button className='product__btn' onClick={() => handleCategoryChange('flower')}>
                        <img src={flower} alt="Flowers" />
                        Flowers
                    </button>
                </div>

                <ul className='product__list'>
                    {
                        sortedProducts.map((item, index) => (
                            <li onClick={() => navigation(`/select/${item.id}`)} key={index} className='product__item'>
                                <button className='setlike' onClick={() => toggleLike(item)}>
                                    <img src={likedItems.some(likedItem => likedItem.id === item.id) ? liked : like} alt="Like" />
                                </button>
                                <img src={item.img} alt={item.title} />
                                <Flex gap="middle" vertical>
                                    <Rate tooltips={desc} onChange={setValue} value={value} />
                                </Flex>
                                <h3 className='product__item__title'>{item.title}</h3>
                                <h4 className='product__price'>$ {item.price}</h4>
                                <div className="product__korzinka">
                                    <img src={korzinka} alt="Add to cart" />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Product;
