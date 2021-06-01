import {createStore} from "redux";
import rootReducer from "./Components/Reducer/index";
const store = createStore(
    rootReducer
)
export default store;