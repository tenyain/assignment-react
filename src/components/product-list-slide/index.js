import React, { useEffect, useState } from 'react';
import useFetch from '../../helper/useFetch';
import { GetLandingProductPromotion } from '../../constants/api';
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

const ProductListSlide = () => {

    const [getData, setGetData] = useState(null);

    const { data, error, loading } = useFetch(GetLandingProductPromotion);

    useEffect(() => {
        if (data !== null) {
            setGetData(data)
        }
    }, [data]);

    let promotionList;
    if (getData !== null) {
        promotionList = getData;
    }

    if (loading) return (<div><h1 className='text-center text-yellow-500' >Loading</h1></div>)
    if (error) return (<div><h1 className='text-center text-red-500' >Fail Fetch</h1></div>)

    return (
        <>
            {
                (getData && promotionList.length > 0) &&
                <section>
                    <div className='container mx-auto  p-10'>
                        <h1 className='heading--lg--darkblue'>Promotion</h1>
                        {/* <div className='flex space-x-4'> */}
                            <SwiperV1>
                                {
                                    getData &&
                                    promotionList.map((product, index) => {
                                        let name = product.name;
                                        let image = product.url;
                                        let originalPrice = `${product.originalPrice.toLocaleString()} Ks`;
                                        let promotePrice = `${product.promotePrice.toLocaleString()} Ks`;
                                        let promotePercent = `${product.promotePercent} %`;

                                        return (
                                            <SwiperSlide key={index}>
                                                <ProductCard
                                                    
                                                    name={name}
                                                    image={image}
                                                    promotePercent={promotePercent}
                                                    originalPrice={originalPrice}
                                                    promotePrice={promotePrice}
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

export default ProductListSlide;
