import React, { useEffect, useState } from 'react';
import useFetch from '../../helper/useFetch';
import BrandCard from '../common/brand-card';
import { GetBrand } from '../../constants/api';

const BrandList = (props) => {

    const { brandList = 0} = props;
    // console.log(brandList)

    // const [getData, setGetData] = useState(null);
    // const { data, error, loading } = useFetch(GetBrand);

    // useEffect(() => {
    //     if (data !== null) {
    //         setGetData(data)
    //         // console.log(data)
    //     }
    // }, [data]);

    // let brandList;
    // if (getData !== null) {
    //     brandList = getData;
    // }

    // if (loading) return (<div><h1 className='text-center text-yellow-500' >Loading</h1></div>)
    // if (error) return (<div><h1 className='text-center text-red-500' >Fail Fetch</h1></div>)

    return (
        <>
            {
                (brandList.length > 0) &&
                <section className='bg-gray-100'>
                    <div className='container mx-auto p-10'>
                        <h1 className='heading--lg--darkblue'>
                            Brands
                        </h1>

                        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5'>
                            {
                                brandList.map((brand, index) => {
                                    let image = brand.url;
                                    let name = brand.name;
                                    return (
                                        <BrandCard
                                            key={index}
                                            image={image}
                                            name={name}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            }

        </>
    );
}

export default BrandList;
