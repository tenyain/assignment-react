import React from 'react';
import { ProductListSlide, LatestProductSlide, BrandList } from '../../components';

const Home = () => {
    return (
        <section>
            <h1 className='text-center font-bold text-5xl'>This is Home page.</h1>

            <ProductListSlide/>
            <LatestProductSlide/>
            <BrandList/>
        </section>
    );
}

export default Home;
