import React from 'react';
import { Hook } from './hook';
import { ProductListSlide, LatestProductSlide, BrandList } from '../../components';

const Home = (props) => {

    const [latestProducts, brandList] = Hook(props)
    // console.log(brandList)

    return (
        <>
            <ProductListSlide/>
            <LatestProductSlide
                products = {latestProducts}
            />
            <BrandList
                brandList = {brandList}
            />
        </>
    );
}

export default Home;
