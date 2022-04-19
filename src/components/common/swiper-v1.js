import React from 'react';
import { Swiper } from 'swiper/react';

const SwiperV1 = (props) => {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                navigation={false}
            >
                {props.children}
            </Swiper>
        </>
    );
}

export default SwiperV1;
