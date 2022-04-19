import React from 'react';

const ProductCard = (props) => {

    let { name, originalPrice, promotePrice, promotePercent, image } = props;

    return (
        <div className='productCard--primary'>
            {   promotePercent &&
                <p className='absolute top-2 right-2 py-1 px-2  text-white bg-green-500 rounded-full'>
                    {promotePercent}
                </p>
            }
            <img className='w-40' src={image} alt={`${name}`} />
            <div className='p-4'>
                <h1 className='font-bold text-blue-800'>
                    {name}
                </h1>

                <p className=''>
                    {promotePrice}
                </p>

                <p className= {` ${promotePrice && 'line-through text-gray-400'} `}>
                    {originalPrice}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
