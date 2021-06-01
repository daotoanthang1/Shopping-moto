import  * as types from "../Types/index";
const InitialState = {
    status:true,
    voucherChosen:""
};
const Voucher = (state = InitialState, action) => {
    switch (action.type) { 
        case types.VOUCHER_FORM:
            return !state;
        case types.VOUCHER_CHOSEN:
            return {
                ...state,
                voucherChosen:action.voucher
            }    
        default:
            return state;
    }
}
export default Voucher;