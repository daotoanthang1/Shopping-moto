import * as types from "./../Types/index";
export const openSignIn = ()=>{
    return {
        type:types.OPEN_SIGN_IN
    }
};
export const openSignUp = ()=>{
    return {
        type:types.OPEN_SIGN_UP,
    }
}
export const addToCart = (quantity)=>{
    return {
        type:types.ADD_TO_CART,
        quantity
    }
}
export const dataFormSignUp = (inf)=>{
    return {
        type:types.DATA_FORM_SIGN_UP,
        inf
    }
}
export const voucherForm = ()=>{
    return {
        type:types.VOUCHER_FORM
    }
}
export const searchProductText = (wordSearch)=>{
    return {
        type:types.SEARCH_PRODUCT_TEXT,
        wordSearch
    }
}
export const showProductAddedToCart = ()=>{
    return {
        type:types.SHOW_PRODUCT_ADDED_TO_CART
    }
}
export const dataProductFromListBrand = (product)=>{
    return {
        type:types.DATA_PRODUCT,
        product,
    }
}
export const brandFromListBrand = (brand)=>{
    return {
        type:types.BRAND,
        brand
    }
}
export const infoProductByDetailProduct = (infoProduct)=>{
    return {
        type:types.INFO_PRODUCT_BY_DETAIL_PRODUCT,
        infoProduct
    }
}
export const dataProductById = (id)=>{
    return {
        type:types.DATA_PRODUCT_BY_ID,
        id
    }
}
export const dataProductByPurchase = (inf)=>{
    return {
        type:types.DATA_PRODUCT_BUY_PURCHASE,
        inf
    }
}
export const voucherChosen = (voucher)=>{
    return {
        type:types.VOUCHER_CHOSEN,
        voucher
    }
}