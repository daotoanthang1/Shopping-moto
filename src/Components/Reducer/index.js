import {combineReducers} from "redux";
import FormReducer from "./FormReducer";
import product from "./ProductsReducer";
import dataFormSignUp from "./DataFormSignUp";
import Voucher from "./Voucher";
import InfoProducts from "./InfoProduct";
import SearchProduct from "./SearchProduct"
const rootReducer = combineReducers({
    FormReducer,
    product,
    dataFormSignUp,
    Voucher,
    InfoProducts,
    SearchProduct
})
export default rootReducer;