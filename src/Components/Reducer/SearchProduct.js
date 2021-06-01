import  * as types from "../Types/index";
const InitialState = {
    onShow:false,
    searchText:""
};
const SearchProduct = (state = InitialState, action) => {
    switch (action.type) {
        case types.SEARCH_PRODUCT_TEXT:
            console.log(action.wordSearch);
            
            return {
                ...state,
                searchText:action.wordSearch
            }
        case types.SHOW_PRODUCT_ADDED_TO_CART:
            return {
                ...state,
                onShow:!state.onShow
            }
        default:
            return state;
    }
}
export default SearchProduct;