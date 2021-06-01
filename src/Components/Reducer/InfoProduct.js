import * as types from "./../Types/index";
const InitialState = {
    product:"",
    brandName:"",
    infoProduct:""
}

const InfoProduct = (state = InitialState, action) => {
    switch (action.type) {
        case types.DATA_PRODUCT:
        return {...state,
            product:action.product
        };
        case types.BRAND:
            return {
                ...state,
                brandName:action.brand
            }
        case types.INFO_PRODUCT_BY_DETAIL_PRODUCT:
            return {
                ...state,
                infoProduct:action.infoProduct
            }    
        default:
            return state;
    }
}

export default InfoProduct;