import React, { useState } from 'react';
import './Thing.css';
import Product from '../../components/Product/Product';
import search from '../../assets/img/search.svg';

function Thing() {
    const [sortOrder, setSortOrder] = useState('');

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className='Thing'>
            <div className="container">
                <div className="thing__container">
                    <div className='thing__div'>
                        <img src={search} alt="search" />
                        <input type="text" placeholder='Search' className='thing__inp' />
                    </div>
                    <select
                        className="thing__select"
                        value={sortOrder}
                        onChange={handleSortChange}
                    >
                        <option value="" disabled>Select sorting</option>
                        <option value="most-expensive">Most Expensive</option>
                        <option value="least-expensive">Least Expensive</option>
                    </select>
                </div>
                <Product sortOrder={sortOrder} />
            </div>
        </div>
    );
}

export default Thing;
