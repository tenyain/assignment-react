import React, { useState, useEffect } from 'react';
import useFetch from '../../helper/useFetch';
import { GetLandingProductLatest } from '../../constants/api';
import ProductCard from '../common/product-card';

const LatestProductSlide = () => {

    const [ getData, setGetData ] = useState(null);
    const { data, loading, error } = useFetch(GetLandingProductLatest);

    useEffect(()=> {
        if(data !== null) {
            setGetData(data);
            // console.log(data);
        }
    }, [data]);

    let latestList;
    if(getData !== null){
        latestList = getData;
    }

    if(loading) return (<div><h1 className='text-center text-yellow-500' >Loading</h1></div>)
    if(error) return (<div><h1 className='text-center text-red-500' >Fail Fetch</h1></div>)

    return (
        <div>
            <div className='flex justify-center items-center p-10'>
                <div className='flex space-x-4'>
                    {
                        getData &&
                        latestList.map((product,index) => {
                            let name = product.name;
                            let image = product.url;
                            let originalPrice = `${product.originalPrice.toLocaleString()} Ks`;

                            return (
                                <ProductCard
                                    key={index}
                                    name={name}
                                    image={image}
                                    originalPrice = {originalPrice}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default LatestProductSlide;
