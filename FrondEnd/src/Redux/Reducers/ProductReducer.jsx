import * as actonType from '../Constance/ProductConstance';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actonType.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actonType.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}
export const getProductsDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actonType.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true}
        case actonType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload}
        case actonType.GET_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        case actonType.GET_PRODUCT_DETAILS_RESET:
            return { product: {} };
        default:
            return state
    };
}