import * as types from "./../Types/index";
const InitialState = {
    quantity:0,
    infoProduct:"",
    IDProductsToSmallCart:[],
    imgSource:""
}
const ProductReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state, quantity: state.quantity+1
            }
        case types.DATA_PRODUCT_BY_ID:
            state.IDProductsToSmallCart.push(action.id);
            return {
                ...state,
                infoProduct:action.id
            };     
        default:
            return state;
    }
}
export default ProductReducer;