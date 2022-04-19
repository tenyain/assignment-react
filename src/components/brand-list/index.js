import React, { useEffect, useState } from 'react';
import useFetch from '../../helper/useFetch';
import BrandCard from '../common/brand-card';
import { GetBrand } from '../../constants/api';

const BrandList = () => {

    const [ getData, setGetData ] = useState(null);
    const { data, error, loading } = useFetch(GetBrand);
    
    useEffect(() => {
        if(data !== null){
            setGetData(data)
            console.log(data)
        }
    }, [data]);

    let brandList;
    if(getData !== null) {
        brandList = getData;
    }

    if(loading) return (<div><h1 className='text-center text-yellow-500' >Loading</h1></div>)
    if(error) return (<div><h1 className='text-center text-red-500' >Fail Fetch</h1></div>)

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl mb-4'>
                Brands
            </h1>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5'>
                {
                    getData &&
                    brandList.map((brand, index) => {
                        let image = brand.url;
                        let name = brand.name;
                        return (
                            <BrandCard
                                key={index}
                                image ={image}
                                name ={name}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default BrandList;
