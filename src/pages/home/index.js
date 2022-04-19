import React from 'react';
import { ProductListSlide, LatestProductSlide, BrandList } from '../../components';

const Home = () => {
    return (
        <>
            <ProductListSlide/>
            <LatestProductSlide/>
            <BrandList/>
        </>
    );
}

export default Home;
