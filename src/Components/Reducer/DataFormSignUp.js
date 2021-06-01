import axios from "axios";
import * as types from "../Types/index";
const InitialState = {
    isSignUp:""
} 
const FormSignUp = (state = InitialState, action) => {
    switch (action.type) {
        case types.OPEN_SIGN_UP:
            return !state;
        case types.DATA_FORM_SIGN_UP:
        return {...state,
            isSignUp:action.inf
        };
        default:
            return state;
    }
}
export default FormSignUp;