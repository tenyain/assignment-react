import React, { useState, useEffect } from 'react';
import useFetch from '../../helper/useFetch';
import { GetLandingProductLatest } from '../../constants/api';
import ProductCard from '../common/product-card';

import SwiperV1 from '../common/swiper-v1';
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import SwiperCore, { Navigation } from "swiper";

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Navigation]);

const LatestProductSlide = () => {

    const [getData, setGetData] = useState(null);
    const { data, loading, error } = useFetch(GetLandingProductLatest);

    useEffect(() => {
        if (data !== null) {
            setGetData(data);
            // console.log(data);
        }
    }, [data]);

    let latestList;
    if (getData !== null) {
        latestList = getData;
    }

    if (loading) return (<div><h1 className='text-center text-yellow-500' >Loading</h1></div>)
    if (error) return (<div><h1 className='text-center text-red-500' >Fail Fetch</h1></div>)

    return (
        <>
            {
                ( getData && latestList.length > 0) &&
                <section>
                    <div className='container mx-auto p-10'>
                        <h1 className='heading--lg--darkblue'>New Arrivals</h1>
                        {/* <div className='flex space-x-4'> */}
                            <SwiperV1>
                                {
                                    latestList.map((product, index) => {
                                        let name = product.name;
                                        let image = product.url;
                                        let originalPrice = `${product.originalPrice.toLocaleString()} Ks`;
                                
                                        return (
                                            <SwiperSlide key={index}>
                                                <ProductCard
                                                    name={name}
                                                    image={image}
                                                    originalPrice={originalPrice}
                                                />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </SwiperV1>
                        {/* </div> */}
                    </div>
                </section>
            }

        </>
    );
}

export default LatestProductSlide;
