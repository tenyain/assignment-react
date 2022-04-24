import * as endpoints from '../constants/api';

export const GetLandingProductPromotion = async (data) => {
    return await fetch (endpoints.GetLandingProductLatest, data);
}

export const GetLandingProductLatest = async () => {
    return await fetch (endpoints.GetLandingProductLatest);
}

export const GetBrand = async () => {
    return await fetch (endpoints.GetBrand);
}