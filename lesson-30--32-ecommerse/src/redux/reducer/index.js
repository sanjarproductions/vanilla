import { cartReducer } from "./cartReducer";
import { langReducer } from "./langReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    language: langReducer,
    cart: cartReducer
})

export default rootReducer