import React, { useState, useEffect } from 'react';
import Main from '../../components/Main/Main';
import Product from '../../components/Product/Product';
import Blog from '../../components/Blog/Blog';
import Helps from '../../components/Helps/Helps';
import Footer from '../../components/Footer/Footer';

function Home({ searchValue }) {
  return (
    <div>
      <Main />
      <Product searchValue={searchValue} />
      <Blog />
      <Helps />
    </div>
  );
}

export default Home;
