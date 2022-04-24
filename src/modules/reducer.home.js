import * as type from './type';

export const initialState = {
    latestProducts: [],
    promotionProducts: [],
    brandList: []
}

const getCommonState = (state) => ({
    ...state,
    dataExist: true,
})

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.PROMOTION_PRODUCT:
            return {
                ...getCommonState(state),
                promotionProducts: action.payload,
            }
        case type.LATEST_PRODUCT : 
            return {
                ...getCommonState(state),
                latestProducts : action.payload
            }
        case type.BRAND_LIST:
            return {
                ...getCommonState(state),
                brandList : action.payload
            }
        default:
            return state;
    }
}

export default Reducer;

export const set_latest_products = (data = []) => ({
    type: type.LATEST_PRODUCT,
    payload: data
});

export const set_promotion_products = (data = []) => ({
    type: type.PROMOTION_PRODUCT,
    payload: data
});

export const set_brand_list = (data = []) => ({
    type: type.BRAND_LIST,
    payload: data
})