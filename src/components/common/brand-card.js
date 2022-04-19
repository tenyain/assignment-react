import React from 'react';

const BrandCard = (props) => {

    let { image, name } = props;

    return (
        <div className='text-center'>
            <a href='#'>
                <div className=' w-32 h-32 mx-auto overflow-hidden rounded-full'>
                    <img className='w-full h-full' src={image} alt={name} />
                </div>
                <h1 className='text-bold text-blue-700 text-lg font-bold mt-2'>{name}</h1>
            </a>
        </div>
    );
}

export default BrandCard;
