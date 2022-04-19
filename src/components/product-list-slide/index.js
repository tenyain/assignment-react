import React, {useEffect, useState} from 'react';
import useFetch from '../../helper/useFetch';
import { GetLandingProductPromotion } from '../../constants/api';
import ProductCard from '../common/product-card';

const ProductListSlide = () => {

    const [getData , setGetData ] = useState(null);

    const { data, error, loading } = useFetch(GetLandingProductPromotion);

    useEffect(() => {
        if(data !== null){
            setGetData(data)
            // console.log(data);
        }
    }, [data]);

    let promotionList;
    if(getData !== null){
        promotionList = getData;
    }

    if(loading) return (<div><h1 className='text-center text-yellow-500' >Loading</h1></div>)
    if(error) return (<div><h1 className='text-center text-red-500' >Fail Fetch</h1></div>)

    return (
        <div>
            <h1 className='text-center text-green-500'>Here is product list slide</h1>

            <div className='flex justify-center items-center p-10'>
                <div className='flex space-x-4'>
                    {
                        getData &&
                        promotionList.map((product,index) => {
                            let name = product.name;
                            let image = product.url;
                            let originalPrice = `${product.originalPrice.toLocaleString()} Ks`;
                            let promotePrice = `${product.promotePrice.toLocaleString()} Ks`;
                            let promotePercent = `${product.promotePercent} %`;

                            return (
                                <ProductCard
                                    key={index}
                                    name={name}
                                    image={image}
                                    promotePercent = {promotePercent}
                                    originalPrice = {originalPrice}
                                    promotePrice = {promotePrice}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductListSlide;
