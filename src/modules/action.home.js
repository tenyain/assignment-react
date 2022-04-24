import { 
    set_brand_list,
    set_latest_products,
    set_promotion_products
} from './reducer.home';

import {
    GetLandingProductLatest,
    GetLandingProductPromotion,
    GetBrand
} from '../services/service.home';

import { OPEN_GET_CONFIG } from '../constants/header'

export const fetch_latestProducts = () => {
    return async (dispatch) => {
        let response = await GetLandingProductLatest();

        if(response.ok) {
            const body = await response.json();
            dispatch(set_latest_products(body));
        }else {
            console.log('Fetching Error');
        }
    }
}

export const fetch_brandList = () => {
    return async (dispatch) => {
        let response = await GetBrand();

        if(response.ok) {
            const body = await response.json();
            dispatch(set_brand_list(body));
        }else {
            console.log('Fetching Error.')
        }
    }
}