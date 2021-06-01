import  * as types from "../Types/index";
const InitialState = false;
const FormReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.OPEN_SIGN_IN:
            return !state;  
        default:
            return state;
    }
}
export default FormReducer;